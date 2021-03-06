import React from "react";
import Theme from "./../theme";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}
const InputContainer = styled.div`
  input {
    font-family: "Work Sans", sans-serif;
    box-sizing: border-box;
    background: ${Theme.LightGray};
    border: none;
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    height: 5rem; /* 80px */
    width: 100%;
    padding: 0 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 60rem) {
    /* 950px */
    & > * {
      width: 100%;
    }
  }
`;

const DatePicker = ({ date, setDate }) => {
  return (
    <InputContainer>
      <DayPickerInput
        value={date}
        onDayChange={(day) => setDate(day)}
        format="dd MMMM yyyy "
        formatDate={formatDate}
        parseDate={parseDate}
      />
    </InputContainer>
  );
};

export default DatePicker;
