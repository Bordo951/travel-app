import React from 'react';
import styled from "styled-components";

const LocalizationHeader = styled.div`
  position: relative;
  display: flex;
  width: 10em;
  height: 3em;
  line-height: 3;
  background:  #363636;
  overflow: hidden;
  
  &::after {
  content: '\\25BC';
  color: #FFF;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: rgba(77,77,77,.8);
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
  }
  
  &:hover::after {
  color: #DF5900;
  }
`;

const SelectBox = styled.select`
  flex: 1;
  padding: 0 .5em;
  color: #fff;
  cursor: pointer;
  
  font-family: "Montserrat-Medium",sans-serif;
  font-size: 18px;
  text-transform: uppercase;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background:  #363636;
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
