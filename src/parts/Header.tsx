import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {getCountryName} from "../redux/countrySlice";
import Localization from "../components/homePage/Localization";
import Logo from "../components/homePage/Logo";
import Search from "../components/homePage/Search";

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    border-bottom: 1px solid rgba(255,255,255,0);
`;

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Search/>
            <Localization/>
        </HeaderWrapper>
    )
}

export default Header;
