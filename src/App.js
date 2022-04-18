import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  ContainerBtn,
  ContainerHeader,
  Title,
} from "./elements/Header";

import { Btn } from "./elements/Btn";

import BtnLogOut from "./components/BtnLogOut";
import FormSpending from "./components/FormSpending";
// import TotalBar from "./components/TotalBar";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Add Spending</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Add Spending</Title>
          <ContainerBtn>
            {/* <Btn to="/categories"> Spendings by Categories</Btn> */}
            <Btn to="/list">Spending List</Btn>
            <BtnLogOut />
          </ContainerBtn>
        </ContainerHeader>
      </Header>
      <FormSpending />
      {/* <TotalBar /> */}
    </>
  );
};

export default App;
