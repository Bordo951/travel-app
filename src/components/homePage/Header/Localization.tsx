import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getLanguage, setLanguage } from "../../../redux/localizationSlice";

const LocalizationHeader = styled.div`
  position: relative;
    display: flex;
    width: 10em;
    height: 2em;
    line-height: 2;
    background: transparent;
    border-bottom: 1px solid #fff;
    border-radius: 5px;
    overflow: hidden;

  &::after {
    content: "\\25BC";
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #032A3D;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
  }

  &:hover::after {
    color: #df5900;
  }
  
  @media (max-width: 768px) {
        margin: 0 10px;
  }
    
  @media (max-width: 576px) {
      width: 9em;
  }
`;

const SelectBox = styled.select`
  flex: 1;
  padding: 0 0.5em;
  color: #fff;
  cursor: pointer;

  font-family: "Montserrat-Medium", sans-serif;
  font-size: 18px;
  text-transform: uppercase;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #054B6D;
  background-image: none;

  &::-ms-expand {
    display: none;
  }
`;

const Localization: React.FC = () => {
  const lang = useSelector(getLanguage);
  const dispatch = useDispatch();

  const onLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    if (value === "ru" || value === "en" || value === "de") {
      dispatch(setLanguage(value));
    }
  };
  return (
    <LocalizationHeader>
      <SelectBox name="select" id="select" value={lang} onChange={onLangChange}>
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="de">German</option>
      </SelectBox>
    </LocalizationHeader>
  );
};

export default Localization;
