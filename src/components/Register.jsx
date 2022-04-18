import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ContainerHeader, Header, Title } from "./../elements/Header";
import { ContainerBtn, Form, Input } from "./../elements/FormItems";
import { Btn } from "./../elements/Btn";
import { ReactComponent as SvgRegister } from "./../images/registro.svg";
import styled from "styled-components";
import { auth } from "./../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";
import AlertComp from "./../elements/Alert";
const Svg = styled(SvgRegister)`
  width: 100%;
  max-height: 6.5rem;
  margin-bottom: 1.25rem;
`;

const Register = () => {
  const history = useHistory();
  const [Password, setPassword] = useState("");
  const [SecondPassword, setSecondPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [AlertState, setAlertState] = useState(false);
  const [Alert, setAlert] = useState({});

  const OnSubmit = (e) => {
    e.preventDefault();
    setAlertState(false);
    setAlert({});

    const expression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (!expression.test(Email)) {
      setAlertState(true);
      setAlert({
        type: "danger",
        message: "Make sure that your Email is in a valid format",
      });
      return;
    }
    if (
      Password.trim() === "" ||
      SecondPassword.trim() === "" ||
      Email.trim() === ""
    ) {
      setAlertState(true);
      setAlert({
        type: "danger",
        message: "Make sure that all fields are completed correctly",
      });
      return;
    }

    if (SecondPassword !== Password) {
      setAlertState(true);
      setAlert({
        type: "danger",
        message: "Make sure that both passwords are equal",
      });
      return;
    }
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((res) => {
        history.push("/");
      })
      .catch((res) => {
        setAlertState(true);
        setAlert({
          type: "danger",
          message: res.message,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Register</Title>
          <div>
            <Btn to="/login">Log In</Btn>
          </div>
        </ContainerHeader>
      </Header>
      <Form onSubmit={OnSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          name="secondpassword"
          placeholder="Repeat PassWord"
          value={SecondPassword}
          onChange={(e) => setSecondPassword(e.target.value)}
        />

        <ContainerBtn>
          <Btn as="button" primary type="submit">
            Register
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

export default Register;
