import React, { useState } from "react";
import styled from "styled-components";
import Theme from "./../theme";
import { ReactComponent as DownIcon } from "./../images/down.svg";
import IconCategory from "./../elements/IconCategory";

const SelectContainer = styled.div`
  background: ${Theme.LightGray};
  cursor: pointer;
  border-radius: 0.625rem; /* 10px */
  position: relative;
  height: 5rem; /* 80px */
  width: 40%;
  padding: 0px 1.25rem; /* 20px */
  font-size: 1.5rem; /* 24px */
  text-align: center;
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  &:hover {
    background: ${Theme.SecondLightGray};
  }
`;

const SelectedOption = styled.div`
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 1.25rem; /* 20px */
    height: auto;
    margin-left: 1.25rem; /* 20px */
  }
`;

const Options = styled.div`
  background: ${Theme.LightGray};
  position: absolute;
  top: 5.62rem; /* 90px */
  left: 0;
  width: 100%;
  border-radius: 0.625rem; /* 10px */
  max-height: 18.75rem; /* 300px */
  overflow-y: auto;
`;

const Option = styled.div`
  padding: 1.25rem; /* 20px */
  display: flex;
  svg {
    width: 28px;
    height: auto;
    margin-right: 1.25rem; /* 20px */
  }
  &:hover {
    background: ${Theme.SecondLightGray};
  }
`;

const SelectCategories = ({ category, setCategory }) => {
  const categories = [
    { id: "food", text: "Food" },
    { id: "accounts and payments", text: "Accounts and Payments" },
    { id: "home", text: "Home" },
    { id: "transport", text: "Transport" },
    { id: "clothes", text: "Clothes" },
    { id: "health and hygiene", text: "Health and Hygiene" },
    { id: "shopping", text: "Shopping" },
    { id: "fun", text: "Fun" },
  ];
  const [ShowSelect, setShowSelect] = useState(false);
  return (
    <SelectContainer onClick={() => setShowSelect(!ShowSelect)}>
      <SelectedOption>
        {category}
        <DownIcon />
        {ShowSelect && (
          <Options>
            {categories.map((category) => {
              return (
                <Option
                  key={category.id}
                  onClick={() => setCategory(category.text)}
                >
                  <IconCategory iconName={category.id} />
                  {category.text}
                </Option>
              );
            })}
          </Options>
        )}
      </SelectedOption>
    </SelectContainer>
  );
};

export default SelectCategories;
