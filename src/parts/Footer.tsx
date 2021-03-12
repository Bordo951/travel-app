import React from 'react';
import styled from "styled-components";
import LogoFooter from "../components/homePage/Footer/LogoFooter";
import Team from "../components/homePage/Footer/Team";

const FooterWrapper = styled.footer`
  background-color: #DF5900;
  border-top: 1px solid #e6e6e6;
`;

const AboutCourse = styled.div`
  font-family: "Montserrat-Regular", sans-serif;
  font-size: 16px;
  color: #fff;  
  text-align: center;
  background-color: #000;
  padding: 10px 35px;
`;
const Container = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  padding: 20px 15px;  
  
  @media (max-width: 1200px) {
    max-width: 900px;
  }
  
  @media (max-width: 992px) {
    max-width: 700px;
    flex-direction: column;
  }
  
  @media (max-width: 768px) {
    max-width: 500px;
  }
  
  @media (max-width: 576px) {
    max-width: 400px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
    
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const About = styled.div`
  max-width: 400px;  
  margin-right: 50px;
  h3 {
    margin-bottom: 25px;
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 24px;
    color: #fff;
  }   
  p {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    color: #fff;
    text-indent: 1.5em;
    text-align: justify;
  } 
  
  @media (max-width: 1200px) {
    max-width: 300px;
  }
  
  @media (max-width: 992px) {
    flex-direction: column;
    
    h3 {
        margin: 15px;
        text-align: center;
    }
  }
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <Container>
                <LogoFooter/>
                <Content>
                    <About>
                        <h3>About App</h3>
                        <p>
                            TravelApp is an application for virtual travel around the world. For those who find it painful to be at home during the quarantine, our application comes, allowing you to virtually go to almost any place in the world.
                        </p>
                    </About>
                    <Team/>
                </Content>
            </Container>
            <AboutCourse>
                &copy; 2021Q1 The Rolling Scopes School, All Rights Reserved
            </AboutCourse>
        </FooterWrapper>
    )
}

export default Footer;
