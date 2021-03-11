import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {getCountryName} from "../redux/countrySlice";
import Localization from "../components/homePage/Localization";
import Logo from "../components/homePage/Logo";


const Header: React.FC = () => {
    return (
        <header>
            <Logo/>
            <div className="search"></div>
            <Localization/>
        </header>
    )
}

export default Header;
