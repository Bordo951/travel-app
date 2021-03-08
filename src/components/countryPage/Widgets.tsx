import React,{useState} from 'react';
import WeatherWidget from './widgets/WeatherWidget';
import CurrencyWidget from './widgets/CurrencyWidget';
import DateAndTimeWidget from './widgets/DateAndTimeWidget';
import styled from 'styled-components';


const Widgets__items = styled.div `
  position: fixed;
  top: calc(40vh + 150px);
  right: 0;
  width: 260px;
  transition: all .5s ease;
  button {
    width: 50px;
    margin-left: -50px;
    cursor: pointer;
    font-size: 40px;
    .fas {
      pointer-events: none;
    }
  }
  div {
    display: flex;
  }

`
const Widgets__item = styled.div `
  background-color: red;
  margin-bottom: 30px;
  .fas {
    font-size: 45px;
  }
  
`



const Widgets: React.FC = (props) => {
  const [widgetsVisibility, setWidgetsVisibility] = useState<boolean>(false);
  return (
    <div>
      <Widgets__items style={widgetsVisibility ? ({marginRight: '-260px'}) : ({marginRight: '0'})}>
        <button onClick={() => setWidgetsVisibility(!widgetsVisibility)}>
          {widgetsVisibility ? (<i className="fas fa-chevron-right"></i>) : (<i className="fas fa-chevron-left"></i>)}
        </button>
        <Widgets__item>
          <i className="fas fa-cloud-sun"></i>
            <WeatherWidget />
        </Widgets__item>
        <Widgets__item>
          <i className="fas fa-euro-sign"></i>
            <CurrencyWidget />
        </Widgets__item>
        <Widgets__item>
            <i className="fas fa-calendar-alt"></i>
            <DateAndTimeWidget />
        </Widgets__item>
      </Widgets__items>
      
    </div>
    
  )
}

export default Widgets;