import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LogoWrapper = styled.div`
  width: 100px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  a {
    display: inline-block;
  }
  img {
    width: 100%;
  }
`;

const LogoHeader: React.FC = () => {
  return (
    <LogoWrapper>
      <NavLink exact to="/">
        <img src="./images/logo.png" alt="logo" />
      </NavLink>
    </LogoWrapper>
  );
};

export default LogoHeader;
