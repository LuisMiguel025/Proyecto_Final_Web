import React from "react";
import { Helmet } from "react-helmet";
import BtnGoBack from "../elements/BtnGoBack";
// import useGetSpendingMonth from "./../hooks/useGetSpenfingMonth";
import { Header, Title } from "./../elements/Header";
import TotalBar from "./TotalBar";

const SpendingsByCategories = () => {
  return (
    <>
      <Helmet>
        <title>Spendings By Categories</title>
      </Helmet>
      <Header>
        <BtnGoBack />
        <Title>Spendings By Categories</Title>
      </Header>
      <TotalBar />
    </>
  );
};

export default SpendingsByCategories;
