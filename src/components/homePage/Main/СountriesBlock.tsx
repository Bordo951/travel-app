import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../../fonts/fonts.css";
import {
  fetchCountriesData,
  getFilteredCountries,
  getRequestStatus,
} from "../../../redux/countriesSlice";
import { getLanguage } from "../../../redux/localizationSlice";
import styled from "styled-components";
import "../../../css/preloader.css";
const GridContainer = styled.div`
  padding: 10px 0;
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
      text-shadow: 0 0 2px #fff, -1px -1px 0 rgb(40, 42, 34), -2px -2px 1px rgb(40, 42, 34),
        -2px -2px 2px rgb(40, 42, 34);
    }
  }

  a:before {
    opacity: 0;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(0, 0, 0, 0.7)),
      to(rgba(2, 1, 1, 0.05))
    );
    background: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.7), rgba(2, 1, 1, 0.05));
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(2, 1, 1, 0.05));
    transition: 0.7s;
  }

  a:hover:before {
    opacity: 1;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(0, 0, 0, 0.7)),
      to(rgba(2, 1, 1, 0.05))
    );
    background: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.7), rgba(2, 1, 1, 0.05));
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(2, 1, 1, 0.05));
    transition: 0.7s;
  }

  div[data-index="0"] {
    grid-area: 1 / 1 / span 2 / span 4;
  }

  div[data-index="1"] {
    grid-area: 1 / 5 / span 2 / span 4;
  }

  div[data-index="2"] {
    grid-area: 3 / 1 / span 2 / span 2;
  }

  div[data-index="3"] {
    grid-area: 3 / 3 / span 2 / span 4;
  }

  div[data-index="4"] {
    grid-area: 3 / 7 / span 2 / span 2;
  }

  div[data-index="5"] {
    grid-area: 5 / 1 / span 2 / span 3;
  }

  div[data-index="6"] {
    grid-area: 5 / 4 / span 2 / span 2;
  }

  div[data-index="7"] {
    grid-area: 5 / 6 / span 2 / span 3;
  }

  div[data-index="8"] {
    grid-area: 7 / 1 / span 2 / span 4;
  }

  div[data-index="9"] {
    grid-area: 7 / 5 / span 2 / span 4;
  }

  @media (max-width: 992px) {
    max-width: 95%;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);

    div[data-index="0"] {
      grid-area: 1 / 1 / span 2 / span 3;
    }

    div[data-index="1"] {
      grid-area: 1 / 4 / span 2 / span 3;
    }

    div[data-index="2"] {
      grid-area: 3 / 1 / span 2 / span 2;
    }

    div[data-index="3"] {
      grid-area: 3 / 3 / span 2 / span 2;
    }

    div[data-index="4"] {
      grid-area: 3 / 5 / span 2 / span 2;
    }

    div[data-index="5"] {
      grid-area: 5 / 1 / span 2 / span 3;
    }

    div[data-index="6"] {
      grid-area: 5 / 4 / span 2 / span 3;
    }

    div[data-index="7"] {
      grid-area: 7 / 1 / span 2 / span 2;
    }

    div[data-index="8"] {
      grid-area: 7 / 3 / span 2 / span 2;
    }

    div[data-index="9"] {
      grid-area: 7 / 5 / span 2 / span 2;
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 200px);

    div[data-index="0"] {
      grid-area: 1 / 1 / span 1 / span 1;
    }

    div[data-index="1"] {
      grid-area: 2 / 1 / span 1 / span 1;
    }

    div[data-index="2"] {
      grid-area: 3 / 1 / span 1 / span 1;
    }

    div[data-index="3"] {
      grid-area: 4 / 1 / span 1 / span 1;
    }

    div[data-index="4"] {
      grid-area: 5 / 1 / span 1 / span 1;
    }

    div[data-index="5"] {
      grid-area: 6 / 1 / span 1 / span 1;
    }

    div[data-index="6"] {
      grid-area: 7 / 1 / span 1 / span 1;
    }

    div[data-index="7"] {
      grid-area: 8 / 1 / span 1 / span 1;
    }

    div[data-index="8"] {
      grid-area: 9 / 1 / span 1 / span 1;
    }

    div[data-index="9"] {
      grid-area: 10 / 1 / span 1 / span 1;
    }
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

const EmptyContent = styled.div`
  padding: 50px;
  
  div {
    width: 100px;
    margin: 10px auto 30px;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    
    img {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
      
      -webkit-animation-name: globe-pulse;
      animation-name: globe-pulse;
      -webkit-animation-duration: 5s;
      animation-duration: 5s;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
    }
  }
  
  p {
     font-family: "Montserrat-Medium", sans-serif;
     font-size: 30px;
     text-align: center;
     color: #75757E;
     max-width: 50%;
     margin: 0 auto;
     text-align: center;
     
     @media (max-width: 992px) {
        max-width: 80%;
        font-size: 26px;
     }

     @media (max-width: 576px) {
        font-size: 20px;
     }
  }
    
  @-webkit-keyframes globe-pulse {
    25% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
    75% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
}
@keyframes globe-pulse {
  25% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  75% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
}  
`;

const СountriesBlock: React.FC = () => {
  const countries = useSelector(getFilteredCountries);
  const lang = useSelector(getLanguage);
  const requestStatus = useSelector(getRequestStatus);
  const dispatch = useDispatch();

  const emptyCountries = <EmptyContent>
        <div>
          <img src='/images/globe.svg' alt='globe'/>
        </div>
        <p>No results were found for your search. Please repeat your request.</p>
  </EmptyContent>;

  const countriesElements = countries.length
      ? countries.map((el, index) => (
          <div
              key={el.id}
              data-index={index}
              style={{ backgroundImage: "url(" + el.imageUrl + ")" }}
          >
            <NavLink to={`/country/${el.id}`}>
              <Country>{el.name}</Country>
              <Capital>{el.capital}</Capital>
            </NavLink>
          </div>
      ))
      : emptyCountries;

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [lang, dispatch]);

  return (
    <main>
      {requestStatus === "succeeded" ? (
          countries.length > 0? (
              <GridContainer>
                {countriesElements}
              </GridContainer>
              ) : (
                  <div>
                    {countriesElements}
                  </div>
              )
      ) : (
        <div className="loader-bg">
          <div className="loader"></div>
        </div>
      )}
    </main>
  );
};

export default СountriesBlock;
