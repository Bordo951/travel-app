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
              {el.name}
            </NavLink>
          </div>
        ))}
    </GridContainer>
  );
};

export default СountriesBlock;
