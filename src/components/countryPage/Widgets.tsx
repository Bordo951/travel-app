import React, { useState } from "react";
import WeatherWidget from "./widgets/WeatherWidget";
import CurrencyWidget from "./widgets/CurrencyWidget";
import DateAndTimeWidget from "./widgets/DateAndTimeWidget";
import styled from "styled-components";

const WidgetsItems = styled.div<{ visible: boolean }>`
  width: 260px;
  margin-left: 25px;
  transition: all 0.5s ease;
  box-shadow: 0 0 20px 2px rgb(0 0 0 / 30%);
  margin-bottom: 30px;
  border-radius: 6px;
  @media (max-width: 767.98px) {
    position: fixed;
    top: 0;
    background-color: #fff;
    z-index: 10;
    right: 0;
    ${(props) => (props.visible ? "margin-right: 0;" : "margin-right: -260px;")}
  }
`;
const WidgetsShowBtn = styled.button`
  width: 50px;
  height: 44px;
  margin-left: -50px;
  position: absolute;
  cursor: pointer;
  transition: color 0.2s ease;
  color: #929292;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  .fas {
    padding: 0;
    margin: 0;
    font-size: 50px;
    color: inherit;
    display: none;
    line-height: 50px;
    border-radius: 8px;
    @media (max-width: 767.98px) {
      display: inline-block;
    }
  }
  &:hover .fas,
  &:focus .fas {
    outline: none;
    color: #df5900;
  }
`;
const WidgetsItem = styled.div`
  /* box-shadow: 0 0 20px 2px rgb(0 0 0 / 30%); */
  /* border-radius: 6px; */
  border-bottom: 2px solid #ffc343;
  /* margin-bottom: 30px; */
  &:last-of-type {
    border-radius: 6px;
    border-width: 6px;
  }
  .fas {
    font-size: 45px;
  }
`;

const Widgets: React.FC = () => {
  // eslint-disable-next-line
  const [widgetsVisibility, setWidgetsVisibility] = useState<boolean>(false);
  return (
    <div>
      <WidgetsItems visible={widgetsVisibility}>
        <WidgetsShowBtn onClick={() => setWidgetsVisibility(!widgetsVisibility)}>
          {widgetsVisibility ? (
            <i className="fas fa-caret-square-right"></i>
          ) : (
            <i className="fas fa-caret-square-left"></i>
          )}
        </WidgetsShowBtn>
        <WidgetsItem>
          <WeatherWidget />
        </WidgetsItem>
        <WidgetsItem>
          <DateAndTimeWidget />
        </WidgetsItem>
        <WidgetsItem>
          <CurrencyWidget />
        </WidgetsItem>
      </WidgetsItems>
    </div>
  );
};

export default Widgets;
