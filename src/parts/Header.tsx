import React from "react";
import styled from "styled-components";
import Localization from "../components/homePage/Header/Localization";
import LogoHeader from "../components/homePage/Header/LogoHeader";
import Autorization from "../components/homePage/Header/Autorization";

const HeaderContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 50px;
    background-color: #000;
    
    @media (max-width: 576px) {
        display: none;
        display: flex;
        flex-direction: column-reverse;
    }
`;

const Header: React.FC = () => {
    return (
        <header>
            <HeaderContentContainer>
                <LogoHeader/>
                <Localization/>
                <Autorization/>
            </HeaderContentContainer>
        </header>
    )
};

export default Header;
