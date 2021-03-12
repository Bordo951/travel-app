import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../../fonts/fonts.css";
import { fetchCountriesData, getFilteredCountries } from "../../../redux/countriesSlice";
import { getLanguage } from "../../../redux/localizationSlice";

const СountriesBlock: React.FC = () => {
  const countries = useSelector(getFilteredCountries);
  const lang = useSelector(getLanguage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [lang, dispatch]);
  return (
    <div>
      <ul className="navigation">
        {countries.map((el) => (
          <li key={el.id} className="navigation__item">
            <NavLink className="navigation__link" to={`/country/${el.id}`}>
              {el.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default СountriesBlock;
