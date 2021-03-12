import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getUserName, logOut } from "../../../redux/authSlice";
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

const LogOut = styled.div`
  background-color: transparent;
  box-shadow: inset 0 0 0 2px #df5900;
  color: #df5900;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #df5900;
  }
`;

const UserName = styled.div`
  margin-right: 30px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  cursor: default;
`;

const Autorization: React.FC = () => {
  const localization = useSelector(getHeaderLocalization);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <AutorizationHeader>
      {userName === "" ? (
        <>
          <LogIn>
            <Link to="/login">{localization.login}</Link>
          </LogIn>
          <SignUp>
            <Link to="/signup">{localization.signup}</Link>
          </SignUp>
        </>
      ) : (
        <>
          <UserName>{userName}</UserName>
          <LogOut onClick={() => dispatch(logOut())}>{localization.logout}</LogOut>
        </>
      )}
    </AutorizationHeader>
  );
};

export default Autorization;
