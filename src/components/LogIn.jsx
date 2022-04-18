import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ContainerHeader, Header, Title } from "./../elements/Header";
import { ContainerBtn, Form, Input } from "./../elements/FormItems";
import { Btn } from "./../elements/Btn";
import { ReactComponent as SvgLogin } from "./../images/login.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { auth } from "./../firebase/firebaseConfig";
import AlertComp from "./../elements/Alert";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 7rem;
  margin-bottom: 1.25rem;
`;

const LogIn = () => {
  const history = useHistory();
  const [Password, setPassword] = useState("");
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
    if (Password.trim() === "" || Email.trim() === "") {
      setAlertState(true);
      setAlert({
        type: "danger",
        message: "Make sure that all fields are completed correctly",
      });
      return;
    }
    auth
      .signInWithEmailAndPassword(Email, Password)
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
        <title>Log In</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Log In</Title>
          <div>
            <Btn to="/register">Register</Btn>
          </div>
        </ContainerHeader>
      </Header>
      <Form on onSubmit={OnSubmit}>
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
        <ContainerBtn>
          <Btn as="button" primary type="submit">
            Log In
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

export default LogIn;
