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
    background-color: #054B6D;
    
    @media (max-width: 992px) {
        padding: 5px 15px;
    }
    
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    @media (max-width: 576px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

const Header: React.FC = () => {
    return (
        <header>
            <HeaderContentContainer>
                <LogoHeader/>
                <Location/>
                <Localization/>
                <Autorization/>
            </HeaderContentContainer>
        </header>
    )
};

export default Header;
