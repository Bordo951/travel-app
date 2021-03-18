import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { placeVote } from "../../redux/countrySlice";

const Inner = styled.div`
  margin-top: 10px;
`;

const Star = styled.i.attrs(() => ({
  className: "fas fa-star",
}))<{ active?: boolean }>`
  font-size: 24px;
  color: ${(props) => (props.active ? "orange" : "gray")};
  cursor: pointer;
`;

const stars = Array(5).fill(null);

export const Rate: FC<{ placeId: string; activeStars: number }> = (props) => {
  const [activeStars, setActiveStars] = useState(0);
  useEffect(() => {
    setActiveStars(props.activeStars);
  }, [props.activeStars]);

  const dispatch = useDispatch();
  return (
    <Inner>
      {stars.map((el, i) => (
        <Star
          key={i}
          onMouseEnter={() => setActiveStars(i + 1)}
          onMouseLeave={() => setActiveStars(props.activeStars)}
          onClick={() => dispatch(placeVote(props.placeId, i + 1))}
          active={i < activeStars}
        />
      ))}
    </Inner>
  );
};

export default Rate;
