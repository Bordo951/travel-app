import React from 'react';
import InfoCountry from './countryPage/InfoCountry';
import Photogallery from './countryPage/Photogallery';
import VideoCountry from './countryPage/VideoCountry';
import Map from './countryPage/Map';
import Widgets from './countryPage/Widgets';

import styled from 'styled-components';


const CountryPage__intro = styled.div`
  width: 100%;
  height: 40vh;
  background: #ccc url("sample.jpg") no-repeat center center;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
`; 


const CountryPage: React.FC = () => {
  return (
    <div>
        <CountryPage__intro>
          <h2>
            Country name<br />
            <small>Capital name</small>
          </h2>
        </CountryPage__intro>
        <InfoCountry />
      <div>
        <Photogallery />
      </div>
      <div>
        <VideoCountry />
      </div>
      <div>
        <Map />
      </div>
      <div>
        <Widgets />
      </div>
    </div>
  )
}

export default CountryPage;