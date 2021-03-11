import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getCountryInfo } from "../../redux/countrySlice";

const InfoInner = styled.section`
  width: 83%;
`;

const InfoCountry: React.FC = () => {
  const countryInfo = useSelector(getCountryInfo);
  return (
    <InfoInner>
      <p>{countryInfo}</p>
    </InfoInner>
  );
};

export default InfoCountry;
