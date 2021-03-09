import React, { useState } from 'react';
import WeatherWidget from './widgets/WeatherWidget';
import CurrencyWidget from './widgets/CurrencyWidget';
import DateAndTimeWidget from './widgets/DateAndTimeWidget';
import styled from 'styled-components';

const WidgetsItems = styled.div<{ widgetsVisibility: boolean }>`
  position: fixed;
  top: calc(40vh + 150px);
  right: 0;
  width: 260px;
  transition: all 0.5s ease;
  ${(props) =>
    props.widgetsVisibility ? 'margin-right: 0;' : 'margin-right: -260px;'}
`;
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
// style={widgetsVisibility ? ({marginRight: '0'}) : ({marginRight: '-260px'})}
const Widgets: React.FC = () => {
  const [widgetsVisibility, setWidgetsVisibility] = useState<boolean>(false);
  return (
    <div>
      <WidgetsItems widgetsVisibility={widgetsVisibility}>
        <WidgetsShowBtn
          onClick={() => setWidgetsVisibility(!widgetsVisibility)}
        >
          {widgetsVisibility ? (
            <i className='fas fa-chevron-right'></i>
          ) : (
            <i className='fas fa-chevron-left'></i>
          )}
        </WidgetsShowBtn>
        <WidgetsItem>
          <i className='fas fa-cloud-sun'></i>
          <WeatherWidget />
        </WidgetsItem>
        <WidgetsItem>
          <i className='fas fa-euro-sign'></i>
          <CurrencyWidget />
        </WidgetsItem>
        <WidgetsItem>
          <i className='fas fa-calendar-alt'></i>
          <DateAndTimeWidget />
        </WidgetsItem>
      </WidgetsItems>
    </div>
  );
};

export default Widgets;
