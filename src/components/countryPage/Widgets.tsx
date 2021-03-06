import React from 'react';
import WeatherWidget from './widgets/WeatherWidget';
import CurrencyWidget from './widgets/CurrencyWidget';
import DateAndTimeWidget from './widgets/DateAndTimeWidget';

const Widgets: React.FC = () => {
  return (
    <div>
      <div>Widgets</div>
      <WeatherWidget />
      <CurrencyWidget />
      <DateAndTimeWidget />
    </div>
    
  )
}

export default Widgets;