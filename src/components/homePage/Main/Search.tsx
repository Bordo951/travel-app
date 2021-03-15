import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterCountries, getSearchQuery } from "../../../redux/countriesSlice";
import { getHomePageLocalization } from "../../../redux/localizationSlice";

const FormBox = styled.form`
  position: relative;
  width: 80%;
  margin: 0 auto;
  //background: #57bd84;
  //border: 2px solid rgba(223, 89, 0, .5);
  border-radius: 9px;

  input,
  button {
    height: 45px;
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 1.2rem;
    border: 0;
    color: #2f2f2f;
  }

  input[type="search"] {
    outline: 0;
    width: 100%;
    background: #fff;
    //background: #f2be9a;
    border: 2px solid #df5900;
    padding: 0 1.6rem;
    border-radius: 9px;
    appearance: none;
    transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    z-index: 5;
    position: relative;
  }
  button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 6rem;
    font-weight: bold;
    color: #fff;
    background: #df5900;
    border-radius: 0 9px 9px 0;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }
  input:not(:placeholder-shown) {
    border-radius: 9px 0 0 9px;
    width: calc(100% - 6rem);
    + button {
      display: block;
    }
  }
  label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
  
  @media (max-width: 992px) {
    width: 95%;
  }
`;

const Search: React.FC = () => {
  const localization = useSelector(getHomePageLocalization);
  const searchQuery = useSelector(getSearchQuery);
  const dispatch = useDispatch();
  const handleSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(filterCountries(searchQuery));
  };

  return (
    <FormBox onSubmit={(event) => handleSubmitEvent(event)} role="search">
      <label htmlFor="search">Search for stuff</label>
      <input
        id="search"
        type="search"
        placeholder={localization.searchField.placeholder}
        autoFocus
        required
        autoComplete="off"
        value={searchQuery}
        onChange={(e) => dispatch(filterCountries(e.target.value))}
      />
      <button type="submit">{localization.searchBtn.text}</button>
    </FormBox>
  );
};

export default Search;
