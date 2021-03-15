import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../../fonts/fonts.css";
import { fetchCountriesData, getFilteredCountries } from "../../../redux/countriesSlice";
import { getLanguage } from "../../../redux/localizationSlice";
import styled from "styled-components";

const GridContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 100px);
  gap: 5px;
  
  div {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  a {
    position: relative;
    display: block;
    height: 98%;
    text-decoration: none;
    
    p {
      color: #fff;
      text-shadow: 0 0 2px #fff, 
        -1px -1px 0 rgb(40, 42, 34), 
        -2px -2px 1px rgb(40, 42, 34), 
        -2px -2px 2px rgb(40, 42, 34);
    }
  }
  
  a:before {
    opacity: 0;
    position: absolute;
    content: '';    
    width: 100%;
    height: 100%;
    background: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.7)),to(rgba(2,1,1,.05)));
    background: -o-linear-gradient(bottom,rgba(0,0,0,.7),rgba(2,1,1,.05));
    background: linear-gradient(0deg,rgba(0,0,0,.7),rgba(2,1,1,.05));
    transition: .7s;
  }
  
  a:hover:before {
    opacity: 1;
    background: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.7)),to(rgba(2,1,1,.05)));
    background: -o-linear-gradient(bottom,rgba(0,0,0,.7),rgba(2,1,1,.05));
    background: linear-gradient(0deg,rgba(0,0,0,.7),rgba(2,1,1,.05));
    transition: .7s;
  }
  
  div[data-index='0'] {
    grid-area: 1 / 1 / span 2 / span 4;
  }
  
  div[data-index='1'] {
    grid-area: 1 / 5 / span 2 / span 4;
  }
  
  div[data-index='2'] {
    grid-area: 3 / 1 / span 2 / span 2;
  }
  
  div[data-index='3'] {
    grid-area: 3 / 3 / span 2 / span 4; 
  }
  
  div[data-index='4'] {
    grid-area: 3 / 7 / span 2 / span 2;
  }
  
  div[data-index='5'] {
    grid-area: 5 / 1 / span 2 / span 3;
  }
  
  div[data-index='6'] {
    grid-area: 5 / 4 / span 2 / span 2;
  }
  
  div[data-index='7'] {
    grid-area: 5 / 6 / span 2 / span 3;
  }
  
  div[data-index='8'] {
    grid-area: 7 / 1 / span 2 / span 4;
  }
  
  div[data-index='9'] {
    grid-area: 7 / 5 / span 2 / span 4;
  }  
  
  @media (max-width: 992px) {
    max-width: 95%;
  }
`;

const Country = styled.p`
  margin: 5px 10px 0;  
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 26px;  
`;

const Capital = styled.p`
  margin: 0 10px;
  font-family: "Montserrat-Regular", sans-serif;
  font-size: 18px;
`;

const СountriesBlock: React.FC = () => {
  const countries = useSelector(getFilteredCountries);
  console.log(countries);
  const lang = useSelector(getLanguage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [lang, dispatch]);
  return (
    <GridContainer>
        {countries.map((el, index) => (
          <div key={el.id} data-index={index} style={{backgroundImage: "url(" + el.imageUrl + ")"}}>
            <NavLink to={`/country/${el.id}`}>
              <Country>{el.name}</Country>
              <Capital>{el.capital}</Capital>
            </NavLink>
          </div>
        ))}
    </GridContainer>
  );
};

export default СountriesBlock;
