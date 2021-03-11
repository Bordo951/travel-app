import React, { useState, useRef, useEffect } from "react";
import InfoCountry from "../components/countryPage/InfoCountry";
import Photogallery from "../components/countryPage/Photogallery";
import VideoCountry from "../components/countryPage/VideoCountry";
import Map from "../components/countryPage/Map";
import Widgets from "../components/countryPage/Widgets";
import { useSelector } from "react-redux";

import { animateScroll as scroll } from "react-scroll";

import styled from "styled-components";
import "../fonts/fonts.css";
import { useDispatch } from "react-redux";
import {
  fetchCountryData,
  getCapitalName,
  getCountryName,
  getImageUrl,
} from "../redux/countrySlice";
import { getCountryPageLocalization } from "../redux/localizationSlice";

const CountryPageIntro = styled.div<{ imageUrl: string | undefined }>`
  width: 100%;
  height: 60vh;
  background: #ccc no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  position: relative;
  ${(props) =>
    props.imageUrl ? `background-image: url(${props.imageUrl}) ;` : "background-color: #ccc"}
  &:after {
    content: "";
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
  font-family: "Montserrat-Bold", sans-serif;
  text-align: center;
  position: relative;
  z-index: 2;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1199.98px) {
    max-width: 992px;
  }

  @media (max-width: 991.98px) {
    max-width: 768px;
  }

  @media (max-width: 767.98px) {
    max-width: 576px;
  }

  @media (max-width: 575.98px) {
  }
`;
const CountryPageTabs = styled.div`
  background-color: #ececec;
  margin-bottom: 70px;
`;
const CountryPageTab = styled.button`
  color: #333333;
  font-family: "Montserrat-Medium", sans-serif;
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

const Content = styled.div`
  display: flex;
`;

const TabContent = styled.div`
  flex: 1;
`;

const CountryPage: React.FC = () => {
  const countryName = useSelector(getCountryName);
  const сapitalName = useSelector(getCapitalName);
  const imageUrl = useSelector(getImageUrl);
  const localization = useSelector(getCountryPageLocalization);
  const [tabTitle, setTabTitle] = useState<string>("info");
  const dispatch = useDispatch();

  const countryPageElem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchCountryData("604738f88a53d6c667d7fed9"));
  }, [dispatch]);

  const handleTab = (name: string) => {
    setTabTitle(name);
    if (countryPageElem.current) {
      let h = countryPageElem.current.offsetTop - window.scrollY;
      scroll.scrollMore(h);
    }
  };
  return (
    <div>
      <section>
        <CountryPageIntro imageUrl={imageUrl}>
          <Container>
            <CountryPageHeading>
              {countryName}
              <br />
              <small>{сapitalName}</small>
            </CountryPageHeading>
          </Container>
        </CountryPageIntro>
        <CountryPageTabs ref={countryPageElem}>
          <Container>
            <CountryPageTab
              onClick={() => handleTab("info")}
              className={tabTitle === "info" ? "active" : ""}
            >
              <i className="fas fa-info"></i>
              {localization.tabs.info}
            </CountryPageTab>
            <CountryPageTab
              onClick={() => handleTab("gallery")}
              className={tabTitle === "gallery" ? "active" : ""}
            >
              <i className="fas fa-image"></i>
              {localization.tabs.photo}
            </CountryPageTab>
            <CountryPageTab
              onClick={() => handleTab("video")}
              className={tabTitle === "video" ? "active" : ""}
            >
              <i className="fab fa-youtube"></i>
              {localization.tabs.video}
            </CountryPageTab>
            <CountryPageTab
              onClick={() => handleTab("map")}
              className={tabTitle === "map" ? "active" : ""}
            >
              <i className="fas fa-map-marker-alt"></i>
              {localization.tabs.map}
            </CountryPageTab>
          </Container>
        </CountryPageTabs>
        <Container>
          <Content>
            <TabContent>
              {tabTitle === "info" ? <InfoCountry /> : ""}
              {tabTitle === "gallery" ? <Photogallery /> : ""}
              {tabTitle === "video" ? <VideoCountry /> : ""}
              {tabTitle === "map" ? <Map /> : ""}
            </TabContent>
            <aside>
              <Widgets />
            </aside>
          </Content>
        </Container>
      </section>
    </div>
  );
};

export default CountryPage;
