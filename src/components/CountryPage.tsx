import React from 'react';
import PhotogalleryOfCountry from './countryPage/PhotogalleryOfCountry';
import VideoOfCountry from './countryPage/VideoOfCountry';
import MapOfCountry from './countryPage/MapOfCountry';
import Widgets from './countryPage/Widgets';

const CountryPage: React.FC = () => {
  return (
    <div>
      <div>Country Page</div>
      <div>
        <PhotogalleryOfCountry />
      </div>
      <div>
        <VideoOfCountry />
      </div>
      <div>
        <MapOfCountry />
      </div>
      <div>
        <Widgets />
      </div>
    </div>
  )
}

export default CountryPage;