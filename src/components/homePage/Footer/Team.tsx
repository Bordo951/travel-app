import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getFooterLocalization } from "../../../redux/localizationSlice";

const TeamBox = styled.div`
  margin-right: 50px;
  h3 {
    margin-bottom: 25px;
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 24px;
    color: #fff;
  }
  img {
    width: 100%;
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 5px;
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
      color: #bebebe;
    }
  }
  img {
    width: 25px;
    margin-right: 5px;
  }

  @media (max-width: 992px) {
    h3 {
      margin: 15px;
      text-align: center;
    }
    ul {
      max-width: 200px;
      margin: 0 auto;
    }
  }
`;

const Team: React.FC = () => {
  const localization = useSelector(getFooterLocalization);
  return (
    <TeamBox>
      <h3>{localization.team.title}</h3>
      <ul>
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
      </ul>
    </TeamBox>
  );
};

export default Team;
