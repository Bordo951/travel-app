import React from 'react';
import styled from "styled-components";

const LogoWrapper = styled.div`
  width: 100px;
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

const LogoHeader: React.FC = () => {
    return (
        <LogoWrapper>
            <a href='/'>
                <img src='./images/logo-footer.png' alt="logo-header"/>
            </a>
        </LogoWrapper>
    )
}

export default LogoHeader;
