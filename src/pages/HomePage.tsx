import React from "react";
import СountriesBlock from "../components/homePage/Main/СountriesBlock";
import Search from "../components/homePage/Main/Search";
import styled from "styled-components";

// const MainBox = styled.main`
//     background-color: rgba(166,166,166, .5);
// `;

const SearchWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('/images/world-of-travel.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    h1 {
        font-family: "Montserrat-Bold", sans-serif;
        text-align: center;
        color: #fff;
        font-size: 4em;
        
        @media (max-width: 576px) {
            margin-bottom: 20px;
            line-height: 1;
        }
    }
    
    h2 {
        margin: 20px 0;
        font-family: "Montserrat-Medium", sans-serif;
        text-align: center;
        color: #fff;
        
        @media (max-width: 576px) {
            display: none;
        }
    }
    
    p {
        margin: 20px 0;
        font-family: "Montserrat-Medium", sans-serif;
        max-width: 800px;
        text-align: center;
        color: #fff;
        
        @media (max-width: 768px) {
            display: none;
        }
    }
    
    @media (max-width: 768px) {
            height: 65vh;
    }
    
    @media (max-width: 576px) {
            height: 45vh;
    }
`;

const HomePage: React.FC = () => {
    return (
        <main>
            <SearchWrapper>
                <h2>Open your eyes to online travel</h2>
                <h1>Travel App</h1>
                <p>TravelApp is an application for virtual travel around the world. For those who find it painful to be at home during the quarantine, our application comes, allowing you to virtually go to almost any place in the world.</p>
                <h2>Let's start! Where do you want to go?</h2>
                <Search />
            </SearchWrapper>
            <СountriesBlock />
        </main>
    )
};

export default HomePage;
