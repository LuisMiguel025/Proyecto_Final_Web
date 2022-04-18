import React from "react";
import styled from "styled-components";
import Theme from "./../theme";
import ConvertToMoney from "./../functions/ConvertToMoney";

const Bar = styled.div`
  background: ${Theme.Green};
  font-size: 1.25rem; /* 20px */
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.62rem 2.25rem; /* 10px 40px */
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 31.25rem) {
    /* 500px */
    flex-direction: column;
    font-size: 14px;
  }
`;

const TotalBar = () => {
  return (
    <Bar>
      <p>Total Spent in this month:</p>
      <p>{ConvertToMoney(0)}</p>
    </Bar>
  );
};

export default TotalBar;
