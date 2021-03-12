import React from 'react';
import styled from "styled-components";

const LogoWrapper = styled.div`
  width: 180px;
  margin-right: 50px;
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
  
  @media (max-width: 992px) {
    margin-right: 0;
  }
`;

const LogoFooter: React.FC = () => {
    return (
        <LogoWrapper>
            <a href='/'>
                <img src='./images/logo.png' alt="logo"/>
            </a>
        </LogoWrapper>
    )
}

export default LogoFooter;
