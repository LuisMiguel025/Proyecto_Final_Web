import React from "react";
import { Helmet } from "react-helmet";
import BtnGoBack from "../elements/BtnGoBack";
import { Header, Title } from "./../elements/Header";
import TotalBar from "./TotalBar";
import useGetSpending from "./../hooks/useGetSpendings";
import IconCategory from "./../elements/IconCategory";
import ConvertToMoney from "./../functions/ConvertToMoney";
import { ReactComponent as EditIcon } from "./../images/editar.svg";
import { ReactComponent as DeleteIcon } from "./../images/borrar.svg";
import { Link } from "react-router-dom";
import DeleteSpending from "./../firebase/DeleteSpending";

import {
  BtnAccion,
  BtnContainer,
  BtnShowMore,
  Category,
  ContainerBtnCenter,
  Date,
  Description,
  List,
  ListItem,
  Subtitle,
  SubtitleContainer,
  Value,
} from "./../elements/ListItems";
import { Btn } from "./../elements/Btn";
import { format, fromUnixTime } from "date-fns";

const SpendingsList = () => {
  const [Spendings, getMoreSpendings, ThereAreMore] = useGetSpending();
  const formatDate = (date) => {
    return format(fromUnixTime(date), "dd MMMM yyyy");
  };
  const dateIsEqual = (spendings, index, spending) => {
    if (index !== 0) {
      const currentDate = formatDate(spending.date);
      const lastDate = formatDate(spendings[index - 1].date);
      if (currentDate === lastDate) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>Spending List</title>
      </Helmet>
      <Header>
        <BtnGoBack />
        <Title>Spending List</Title>
      </Header>

      <List>
        {Spendings.map((spending, index) => {
          return (
            <div key={spending.id}>
              {!dateIsEqual(Spendings, index, spending) && (
                <Date>{formatDate(spending.date)}</Date>
              )}
              <ListItem>
                <Category>
                  <IconCategory iconName={spending.category.toLowerCase()} />
                  {spending.category}
                </Category>
                <Description>{spending.description}</Description>
                <Value>{ConvertToMoney(spending.costs)}</Value>
                <BtnContainer>
                  <BtnAccion as={Link} to={`/edit/${spending.id}`}>
                    <EditIcon />
                  </BtnAccion>
                  <BtnAccion onClick={() => DeleteSpending(spending.id)}>
                    <DeleteIcon />
                  </BtnAccion>
                </BtnContainer>
              </ListItem>
            </div>
          );
        })}
      </List>

      {ThereAreMore && (
        <ContainerBtnCenter>
          <BtnShowMore onClick={() => getMoreSpendings()}>
            Show More
          </BtnShowMore>
        </ContainerBtnCenter>
      )}
      {Spendings.length === 0 && (
        <SubtitleContainer>
          <Subtitle>There are not spendings to show.</Subtitle>
          <Btn as={Link} to="/">
            Add Spending
          </Btn>
        </SubtitleContainer>
      )}

      {/* <TotalBar /> */}
    </>
  );
};

export default SpendingsList;
