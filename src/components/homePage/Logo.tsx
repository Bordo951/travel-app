import React from 'react';
import styled from "styled-components";

const LogoWrapper = styled.div`
  width: 180px;
  transition: transform .5s;  
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

const Logo: React.FC = () => {
    return (
        <LogoWrapper>
            <a href='/'>
                <img src='./images/logo.png' alt="logo"/>
            </a>
        </LogoWrapper>
    )
}

export default Logo;
