import React, { useState, useRef } from 'react';
import InfoCountry from './countryPage/InfoCountry';
import Photogallery from './countryPage/Photogallery';
import VideoCountry from './countryPage/VideoCountry';
import Map from './countryPage/Map';
import Widgets from './countryPage/Widgets';

import { animateScroll as scroll } from 'react-scroll';

import styled from 'styled-components';
import '../fonts/fonts.css';

const CountryPageIntro = styled.div`
  width: 100%;
  height: 60vh;
  background: #ccc url('sample.jpg') no-repeat center center;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const CountryPageHeading = styled.h2`
  font-size: 50px;
  font-family: 'Montserrat-Bold', sans-serif;
  text-align: center;
  position: relative;
  z-index: 2;
`;
const Countainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;
const CountryPageTabs = styled.div`
  background-color: #ececec;
  margin-bottom: 70px;
`;
const CountryPageTab = styled.button`
  color: #333333;
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 18px;
  width: 200px;
  cursor: pointer;
  background-color: #ececec;
  padding: 24px 4px;
  border: none;
  border-right: 1px solid #e0e0e0;
  transition: all 0.2s ease;
  &:first-of-type {
    border-left: 1px solid #e0e0e0;
  }
  .fas,
  .fab {
    color: inherit;
    padding-right: 8px;
    font-size: 22px;
  }
  &:focus {
    outline: 1px solid rgba(223, 89, 0, 0.6);
    outline-offset: -2px;
  }
  &:hover {
    color: #fff;
    background-color: rgba(223, 89, 0, 0.6);
    border-color: rgba(223, 89, 0, 0.6);
    border: none;
  }
  &.active {
    color: #fff;
    background-color: #df5900;
    border-color: #df5900;
  }
`;

const CountryPage: React.FC = () => {
  const [tabTitle, setTabTitle] = useState<string>('info');

  const countryPageElem = useRef<HTMLDivElement>(null);

  const handleTab = (name: string) => {
    setTabTitle(name);
    let h = countryPageElem.current
      ? countryPageElem.current.offsetTop - window.scrollY
      : undefined; // высота картинки + header
    scroll.scrollMore(h);
  };
  return (
    <div>
      <section>
        <CountryPageIntro>
          <Countainer>
            <CountryPageHeading>
              Country name
              <br />
              <small>Capital name</small>
            </CountryPageHeading>
          </Countainer>
        </CountryPageIntro>
        <CountryPageTabs ref={countryPageElem}>
          <Countainer>
            <CountryPageTab
              onClick={() => handleTab('info')}
              className={tabTitle === 'info' ? 'active' : ''}
            >
              <i className='fas fa-info'></i>Information
            </CountryPageTab>
            <CountryPageTab
              onClick={() => handleTab('gallery')}
              className={tabTitle === 'gallery' ? 'active' : ''}
            >
              <i className='fas fa-image'></i>Photogallery
            </CountryPageTab>
            <CountryPageTab
              onClick={() => handleTab('video')}
              className={tabTitle === 'video' ? 'active' : ''}
            >
              <i className='fab fa-youtube'></i>Video
            </CountryPageTab>
            <CountryPageTab
              onClick={() => handleTab('map')}
              className={tabTitle === 'map' ? 'active' : ''}
            >
              <i className='fas fa-map-marker-alt'></i>Map
            </CountryPageTab>
          </Countainer>
        </CountryPageTabs>
        <Countainer>
          {tabTitle === 'info' ? <InfoCountry /> : ''}
          {tabTitle === 'gallery' ? <Photogallery /> : ''}
          {tabTitle === 'video' ? <VideoCountry /> : ''}
          {tabTitle === 'map' ? <Map /> : ''}
        </Countainer>
      </section>
      <aside>
        <Widgets />
      </aside>
    </div>
  );
};

export default CountryPage;
