import React, { useState, useEffect } from "react";
import AddSpending from "./../firebase/AddSpending";
import { Btn } from "./../elements/Btn";
import {
  Input,
  InputBig,
  FilterContainer,
  ContainerBtn,
  Form,
} from "./../elements/FormItems";
import AlertComp from "./../elements/Alert";

import { ReactComponent as PlusIcon } from "./../images/plus.svg";
import DatePicker from "./DatePicker";
import SelectCategories from "./SelectCategories";
import GetUnixTime from "date-fns/getUnixTime";
import { useAuth } from "./../contexts/AuthContext";
import { fromUnixTime } from "date-fns/esm";
import { useHistory } from "react-router-dom";
import EditSpending from "./../firebase/EditSpending";

const FormSpending = ({ spending, id }) => {
  const history = useHistory();
  const [Description, setDescription] = useState("");
  const [Costs, setCosts] = useState("");
  const [Category, setCategory] = useState("home");
  const [date, setDate] = useState(new Date());
  const { user } = useAuth();
  const [AlertState, setAlertState] = useState(false);
  const [Alert, setAlert] = useState({});

  useEffect(() => {
    if (spending) {
      if (spending.user === user.uid) {
        setDescription(spending.description);
        setCosts(spending.costs);
        setCategory(spending.category);
        setDate(fromUnixTime(spending.date));
      } else {
        // history.push("/list");
      }
    }
  }, [spending, user, history]);

  const OnSubmit = (e) => {
    e.preventDefault();
    setAlertState(false);
    setAlert({});

    if (Description === "" || Costs === "") {
      setAlertState(true);
      setAlert({
        type: "danger",
        message: "Make sure that all fields are completed correctly.",
      });
    } else {
      if (spending) {
        EditSpending({
          id: id,
          date: GetUnixTime(date),
          category: Category,
          costs: Number(parseFloat(Costs).toFixed(2)),
          description: Description,
        })
          .then((res) => {
            setAlertState(true);
            setAlert({
              type: "success",
              message: "Spending was Edited successfully.",
            });
            setTimeout(() => {
              history.push("/list");
            }, 2000);
          })
          .catch((res) => {
            setAlertState(true);
            setAlert({
              type: "danger",
              message: "Something went wrong. Try it again.",
            });
          });
      } else {
        AddSpending({
          date: GetUnixTime(date),
          category: Category,
          costs: Number(parseFloat(Costs).toFixed(2)),
          description: Description,
          user: user.uid,
        })
          .then(() => {
            setDescription("");
            setCosts("");
            setDate(new Date());
            setCategory("home");
            setAlertState(true);
            setAlert({
              type: "success",
              message: "Spending was saved successfully.",
            });
          })
          .catch((error) => {
            setAlertState(true);
            setAlert({
              type: "danger",
              message: "Something went wrong. Try it again.",
            });
          });
      }
    }
  };

  return (
    <>
      <Form onSubmit={OnSubmit}>
        <FilterContainer>
          <SelectCategories category={Category} setCategory={setCategory} />
          <DatePicker date={date} setDate={setDate} />
        </FilterContainer>
        <div>
          <Input
            type="text"
            name="description"
            id="description"
            placeholder="Description
          "
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputBig
            type="text"
            name="costs"
            id="costs"
            placeholder="$0.00"
            value={Costs}
            onChange={(e) => setCosts(e.target.value.replace(/[^0-9.]/g, ""))}
          />
        </div>
        <ContainerBtn>
          <Btn type="submit" as="button" primary withIcon>
            {!id ? "Add Spending" : "Edit Spending"}
            <PlusIcon></PlusIcon>
          </Btn>
        </ContainerBtn>
      </Form>
      <AlertComp
        type={Alert.type}
        message={Alert.message}
        alertState={AlertState}
        setAlertState={setAlertState}
      />
    </>
  );
};

export default FormSpending;
