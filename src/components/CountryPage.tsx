import React from 'react';
import Photogallery from './countryPage/Photogallery';
import VideoCountry from './countryPage/VideoCountry';
import Map from './countryPage/Map';
import Widgets from './countryPage/Widgets';


const CountryPage: React.FC = () => {
  return (
    <div>
      {/* <header>
        <h1>header</h1>
      </header> */}
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