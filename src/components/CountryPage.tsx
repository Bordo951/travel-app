import React,{useState} from 'react';
import InfoCountry from './countryPage/InfoCountry';
import Photogallery from './countryPage/Photogallery';
import VideoCountry from './countryPage/VideoCountry';
import Map from './countryPage/Map';
import Widgets from './countryPage/Widgets';

import styled from 'styled-components';
import '../fonts/fonts.css'

const CountryPage__intro = styled.div`
  width: 100%;
  height: 40vh;
  background: #ccc url("sample.jpg") no-repeat center center;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
`;
const Countainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`; 

const CountryPage__tabs = styled.div `
  background-color: #ececec;
  margin-bottom: 100px;
  button {
    /* text-transform: uppercase; */
    color: #333333;
    font-family: 'Montserrat-Medium',sans-serif;
    font-size: 20px;
    width: 210px;
    cursor: pointer;
    background-color: #ececec;
    padding: 24px 4px;
    border: none;
    border-right: 1px solid #e0e0e0;
    transition: all .2s ease; 
      &:first-of-type {
      border-left: 1px solid #e0e0e0;
      }
      .fas {
        color: inherit;
        padding-right: 8px;
        font-size: 22px;
      }
      &:focus {
        outline: 2px solid #979797;
        outline-offset: -2px;
      }
      &:hover {
        color: #fff;
        background-color: #df5900;
      }
  }
`


const CountryPage: React.FC = () => {
  const [tabTitle, setTabTitle] = useState<string>('info');
  return (
    <div>
      <section>
        <CountryPage__intro>
          <Countainer>
            <h2>
              Country name<br />
              <small>Capital name</small>
            </h2>
          </Countainer>
        </CountryPage__intro>
        <CountryPage__tabs>
          <Countainer>
            <button onClick={() => setTabTitle('info')}><i className="fas fa-info"></i>Information</button>
            <button onClick={() => setTabTitle('gallery')}><i className="fas fa-image"></i>Photogallery</button>
            <button onClick={() => setTabTitle('video')}><i className="fas fa-video"></i>Video</button>
            <button onClick={() => setTabTitle('map')}><i className="fas fa-map-marker-alt"></i>Map</button>
          </Countainer>
        </CountryPage__tabs>
          <Countainer>
            {tabTitle === 'info' ? (<InfoCountry />) : ('')}
            {tabTitle === 'gallery' ? (<Photogallery />) : ('')}
            {tabTitle === 'video' ? (<VideoCountry />) : ('')}
            {tabTitle === 'map' ? ( <Map />) : ('')}
          </Countainer>    
      </section>
      <aside>
       <Widgets/>
      </aside>
    </div>
  )
}

export default CountryPage;