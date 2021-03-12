import React from "react";
import styled from "styled-components";
import Localization from "../components/homePage/Header/Localization";
import LogoHeader from "../components/homePage/Header/LogoHeader";
import Autorization from "../components/homePage/Header/Autorization";
import Search from "../components/homePage/Header/Search";

const HeaderContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 50px;
    background-color: #000;
`;
const SearchWrapper = styled.div`
    padding: 10px 0;
`;

const Header: React.FC = () => {
    return (
        <header>
            <HeaderContentContainer>
                <LogoHeader/>
                <Localization/>
                <Autorization/>
            </HeaderContentContainer>
            <SearchWrapper>
                <Search/>
            </SearchWrapper>
        </header>
    )
};

export default Header;
