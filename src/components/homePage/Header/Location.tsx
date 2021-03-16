import React from "react";
import styled from "styled-components";

const LocationContainer = styled.div`
    display: block;
    
    a {
        display: block;
        font-family: "Montserrat-Medium",sans-serif;
        text-decoration: none;
        outline: none;
        color: #fff;
        transition: all 0.3s ease-in-out;
        
        &:hover {
            color: #df5900;
        }
    }
    
    img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    
    @media (max-width: 768px) {
        margin: 0 10px;
    }
    
    @media (max-width: 576px) {
        display: none;
    }
`;

const Location: React.FC = () => {
    return (
        <LocationContainer>
            <a href="https://www.google.com/maps/place/43%C2%B058'42.7%22N+15%C2%B023'00.1%22E/@43.9785278,15.3811835,620m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d43.9785278!4d15.3833722?hl=ru-RU" target='_blank' title='Location'>
                <img src='/images/pin.svg'/>
                Our location
            </a>
        </LocationContainer>
    );
};

export default Location;
