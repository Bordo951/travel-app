import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LogoFooter from "../components/homePage/Footer/LogoFooter";
import Team from "../components/homePage/Footer/Team";
import { getFooterLocalization } from "../redux/localizationSlice";

const FooterWrapper = styled.footer`
  // background-color: #054B6D;
  // border-top: 1px solid #e6e6e6;
  
  background-image: url('/images/world-footer.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const AboutCourse = styled.div`
  font-family: "Montserrat-Regular", sans-serif;
  font-size: 16px;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  
  @media (max-width: 992px) {
    font-size: 14px;
  }
`;
const Container = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 5px;

  @media (max-width: 1200px) {
    max-width: 900px;
  }

  @media (max-width: 992px) {
    max-width: 700px;
    justify-content: space-around;
  }
`;

const Footer: React.FC = () => {
  const localization = useSelector(getFooterLocalization);
  return (
    <FooterWrapper>
        <Team />
      <Container>
        <LogoFooter />
        <AboutCourse className="copyright">&copy; 2021Q1 The Rolling Scopes School, {localization.copyright}</AboutCourse>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
