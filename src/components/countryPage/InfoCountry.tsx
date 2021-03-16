import React from "react";
import { useSelector } from "react-redux";
import { getCountryInfo } from "../../redux/countrySlice";
import styled from "styled-components";

const InfoInner = styled.section`
  margin-bottom: 60px;
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
