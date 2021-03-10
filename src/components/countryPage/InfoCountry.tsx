import React from "react";
import { useSelector } from "react-redux";
import { getCountryInfo } from "../../redux/countrySlice";

const InfoCountry: React.FC = () => {
  const countryInfo = useSelector(getCountryInfo);
  return (
    <section>
      <p>{countryInfo}</p>
    </section>
  );
};

export default InfoCountry;
