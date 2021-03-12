import React from 'react';
import styled from "styled-components";

const AutorizationHeader = styled.div`
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
        color: #FFF;
                
        &:hover {
            color: #DF5900;
        }
    }  
`;
const SignUp = styled.div`
  a {
      background-color: transparent;
      box-shadow: inset 0 0 0 2px #DF5900;
      color: #DF5900;
      padding: 10px;
      border-radius: 5px;
      
      &:hover {
        color: #FFF;
        background-color: #DF5900;
      }
            
    }
`;

const Autorization: React.FC = () => {
    return (
        <AutorizationHeader>
            <LogIn>
                <a href="#">Log in</a>
            </LogIn>
            <SignUp>
                <a href="#">Sign Up</a>
            </SignUp>
        </AutorizationHeader>
    )
}

export default Autorization;
