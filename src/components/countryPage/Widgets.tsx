import React, { useState } from "react";
import WeatherWidget from "./widgets/WeatherWidget";
import CurrencyWidget from "./widgets/CurrencyWidget";
import DateAndTimeWidget from "./widgets/DateAndTimeWidget";
import styled from "styled-components";

const WidgetsItems = styled.div<{ visible: boolean }>`
  /* position: fixed;
  top: calc(40vh + 150px);
  right: 0; */
  width: 260px;
  margin-left: 10px;
  transition: all 0.5s ease;
  /* ${(props) => (props.visible ? "margin-right: 0;" : "margin-right: -260px;")} */
`;
// eslint-disable-next-line
const WidgetsShowBtn = styled.button`
  width: 32px;
  height: 70px;
  margin-left: -32px;
  cursor: pointer;
  font-size: 40px;
  transition: color 0.2s ease;
  color: #333333;
  background-color: #ececec;
  .fas {
    color: inherit;
  }
  &:hover {
    color: #fff;
    background-color: #df5900;
  }
  &:focus {
    outline: 2px solid #979797;
    outline-offset: -2px;
  }
`;
const WidgetsItem = styled.div`
  background-color: red;
  margin-bottom: 30px;
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
        {/* <WidgetsShowBtn onClick={() => setWidgetsVisibility(!widgetsVisibility)}>
          {widgetsVisibility ? (
            <i className="fas fa-chevron-right"></i>
          ) : (
            <i className="fas fa-chevron-left"></i>
          )}
        </WidgetsShowBtn> */}
        <WidgetsItem>
          <i className="fas fa-cloud-sun"></i>
          <WeatherWidget />
        </WidgetsItem>
        <WidgetsItem>
          <i className="fas fa-euro-sign"></i>
          <CurrencyWidget />
        </WidgetsItem>
        <WidgetsItem>
          <i className="fas fa-calendar-alt"></i>
          <DateAndTimeWidget />
        </WidgetsItem>
      </WidgetsItems>
    </div>
  );
};

export default Widgets;
