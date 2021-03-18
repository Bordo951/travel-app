import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getPlaces } from "../../redux/countrySlice";
import { getCountryPageLocalization } from "../../redux/localizationSlice";
import VideoOfCountry from "./VideoCountry";

const VotersOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(34, 34, 34, 0.8);
  display: flex;
  z-index: 5;
`;

const VotersWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  margin: auto;
  padding: 20px;
`;

const VotersTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 36px;
`;

const Voter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const VoterName = styled.div`
  font-size: 24px;
`;

const Button = styled.button`
  padding: 18px;
  margin-top: 35px;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  outline: none;
  border: 2px solid #df5900;
  color: #df5900;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #df5900;
  }
`;

const Star = styled.i.attrs(() => ({
  className: "fas fa-star",
}))<{ active?: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.active ? "orange" : "gray")};
`;

const stars = Array(5).fill(null);

export const Stars: FC<{ activeStars: number }> = ({ activeStars }) => {
  return (
    <div>
      {stars.map((el, i) => (
        <Star key={i} active={i < activeStars} />
      ))}
    </div>
  );
};

type PropsType = {
  onClose: () => void;
  placeIndex: number;
};

export const Voters: FC<PropsType> = ({ onClose, placeIndex }) => {
  const places = useSelector(getPlaces);
  const localization = useSelector(getCountryPageLocalization);
  return (
    <VotersOverlay>
      <VotersWrapper>
        <VotersTitle>{localization.places.voters}</VotersTitle>
        {places && places[placeIndex] &&
          places[placeIndex].rating?.map((el, i) => (
            <Voter key={i}>
              <VoterName>{el.username}</VoterName>
              <Stars activeStars={el.rate} />
            </Voter>
          ))}
        <Button className="close-voter-button" onClick={onClose}>{localization.places.close}</Button>
      </VotersWrapper>
    </VotersOverlay>
  );
};

export default Voters;
