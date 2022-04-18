import React from "react";
import { Helmet } from "react-helmet";
import BtnGoBack from "../elements/BtnGoBack";
import { Header, Title } from "./../elements/Header";
import TotalBar from "./TotalBar";
import FormSpending from "./FormSpending";
import { useParams } from "react-router-dom";
import useGetSpending from "./../hooks/useGetSpending";

const EditSpending = () => {
  const { id } = useParams();
  const [Spending] = useGetSpending(id);
  return (
    <>
      <Helmet>
        <title>Edit Spending</title>
      </Helmet>
      <Header>
        <BtnGoBack path="/list" />
        <Title>Edit Spending</Title>
      </Header>
      <FormSpending spending={Spending} id={id} />
      <TotalBar />
    </>
  );
};

export default EditSpending;
