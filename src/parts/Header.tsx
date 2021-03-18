import React from "react";
import styled from "styled-components";
import Localization from "../components/homePage/Header/Localization";
import LogoHeader from "../components/homePage/Header/LogoHeader";
import Autorization from "../components/homePage/Header/Autorization";
import Location from "../components/homePage/Header/Location";

const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 50px;
  background-color: #054b6d;
  position: relative;
  z-index: 110;
  
  @media (max-width: 992px) {
    padding: 5px 15px;
  }

  @media (max-width: 576px) {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
  }
`;
const HeaderContentWrapper = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        justify-content: flex-end;
    }
    
    @media (max-width: 576px) {
        flex-wrap: wrap;
        flex-wrap: wrap-reverse;
        width: calc(100% - 120px);
    }
`;

const Header: React.FC = () => {
  return (
    <header>
      <HeaderContentContainer>
        <LogoHeader />
        <HeaderContentWrapper>
            <Location />
            <Localization />
            <Autorization />
        </HeaderContentWrapper>
      </HeaderContentContainer>
    </header>
  );
};

export default Header;
