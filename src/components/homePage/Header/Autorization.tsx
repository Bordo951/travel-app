import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getHeaderLocalization } from "../../../redux/localizationSlice";

const AutorizationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-family: "Montserrat-Medium", sans-serif;
    display: inline-block;
    width: 100%;
    -webkit-text-decoration: none;
    text-decoration: none;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    outline: none;
  }
`;
const LogIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    margin-right: 30px;
    color: #fff;

    &:hover {
      color: #df5900;
    }
  }
`;
const SignUp = styled.div`
  a {
    background-color: transparent;
    box-shadow: inset 0 0 0 2px #df5900;
    color: #df5900;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      color: #fff;
      background-color: #df5900;
    }
  }

  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

const Autorization: React.FC = () => {
  const localization = useSelector(getHeaderLocalization);
  return (
    <AutorizationHeader>
      <LogIn>
        <a href="#">{localization.login}</a>
      </LogIn>
      <SignUp>
        <a href="#">{localization.signup}</a>
      </SignUp>
    </AutorizationHeader>
  );
};

export default Autorization;
