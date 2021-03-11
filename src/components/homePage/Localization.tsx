import React from 'react';
import styled from "styled-components";

const LocalizationHeader = styled.div`
  position: relative;
  display: flex;
  width: 10em;
  height: 3em;
  line-height: 3;
  background: #DF5900;
  overflow: hidden;
  
  &::after {
  content: '\\25BC';
  color: #C9C9C9;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #FF6600;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
  }
  
  &:hover::after {
  color: #FFF;
  }
`;

const SelectBox = styled.select`
  flex: 1;
  padding: 0 .5em;
  color: #fff;
  cursor: pointer;
  
  font-family: "Montserrat-Bold",sans-serif;
  font-size: 18px;
  text-transform: uppercase;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #DF5900;
  background-image: none;
  
  &::-ms-expand {
  display: none;
  }  
`;


const Localization: React.FC = () => {
    return (
            <LocalizationHeader>
                <SelectBox name="select" id="select">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                    <option value="de">German</option>
                </SelectBox>
            </LocalizationHeader>
    )
}

export default Localization;
