import React from "react";
import { useSelector } from "react-redux";
import { getvideoUrl } from "../../redux/countrySlice";
import styled from "styled-components";

const VideoCountryInner = styled.div`
  height: 500px;
  margin-bottom: 100px;
  color: #181818;
`;

const VideoOfCountry: React.FC = () => {
  const countryVideoId = useSelector(getvideoUrl)?.slice(32);
  return (
    <VideoCountryInner>
      <iframe
        title={`video: ${countryVideoId}`}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${countryVideoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoCountryInner>
  );
};

export default VideoOfCountry;
