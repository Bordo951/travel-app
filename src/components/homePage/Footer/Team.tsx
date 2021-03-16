import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getFooterLocalization } from "../../../redux/localizationSlice";

const TeamBox = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  
  img {
    width: 100%;
  }
  li {
    margin: 0 10px;
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
  }
  a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    outline: none;
    text-decoration: none;
    display: inline-block;
    color: #fff;
    &:hover {
      color: #DE5900;
    }
  }
  img {
    width: 25px;
    margin-right: 5px;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Team: React.FC = () => {
  const localization = useSelector(getFooterLocalization);
  return (
      <TeamBox>
        <li>
          <a href="https://github.com/vhoreho" target="_blank" rel="noreferrer">
            <img src="./images/traveler1.svg" alt="traveler1" />
            {localization.team.members.vladislav}
          </a>
        </li>
        <li>
          <a href="https://github.com/khusanov-95" target="_blank" rel="noreferrer">
            <img src="./images/traveler2.svg" alt="traveler2" />
            {localization.team.members.farrukh}
          </a>
        </li>
        <li>
          <a href="https://github.com/Bordo951" target="_blank" rel="noreferrer">
            <img src="./images/traveler3.svg" alt="traveler3" />
            {localization.team.members.irina}
          </a>
        </li>
        <li>
          <a href="https://github.com/mahtishavaev" target="_blank" rel="noreferrer">
            <img src="./images/traveler4.svg" alt="traveler4" />
            {localization.team.members.mahti}
          </a>
        </li>
      </TeamBox>
  );
};

export default Team;
