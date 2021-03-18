import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPlaces } from "../../redux/countrySlice";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import { Rate } from "./Rate";
import { Voters } from "./Voters";
import { getUserName } from "../../redux/authSlice";
import { getCountryPageLocalization } from "../../redux/localizationSlice";

const PhotoGalleryInner = styled.div<{ overImage: boolean }>`
  margin-bottom: 60px;
  border: 1px solid #e0e0e0;
  color: #272727;
  @media (max-width: 400px) {
    width: 90%;
    margin: 0 auto;
  }
  .image-gallery-content .image-gallery-slides {
    height: 500px;
    width: calc(100% + 1px);
    @media (max-width: 1199.98px) {
      height: 470px;
    }
    @media (max-width: 700px) {
      height: 400px;
    }
    @media (max-width: 575.98px) {
      height: 300px;
    }
    @media (max-width: 400px) {
      height: 200px;
    }
  }
  .image-gallery-content.fullscreen .image-gallery-slides {
    height: 100%;
  }
  .image-gallery-description {
    width: 85%;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.6s ease;
    ${(props) => (props.overImage ? "opacity: 0.9;" : "opacity: 0;")}
    bottom: 20%;
    display: inline-block;
    background: rgba(255, 255, 255, 0.9);
    color: #000;
    line-height: 1.5;
  }
  .image-gallery-icon {
    color: rgba(223, 89, 0, 0.6);
    &:hover {
      color: #df5900;
    }
  }
  .image-gallery-thumbnail {
    cursor: pointer;
    @media (max-width: 400px) {
      display: none;
    }
  }
  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover {
    border-color: #df5900;
  }
`;

const PhotoGalleryDescr = styled.p`
  padding: 15px;
  font-family: "Montserrat-Medium";
  line-height: 1.5;
  &::first-letter {
    padding-left: 30px;
  }
`;

const Button = styled.button`
  margin-left: 3px;
  padding: 10px;
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
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

const PhotogalleryOfCountry: React.FC = () => {
  const places = useSelector(getPlaces);
  const userName = useSelector(getUserName);
  const localization = useSelector(getCountryPageLocalization);
  const [votersWindow, setVotersWindow] = useState(false);
  const [userVote, setUserVote] = useState(0);
  const [overImage, setOverImage] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    if (userName === "" || !places) return;
    let vote = 0;
    places[imageIndex].rating?.map((el) => {
      if (el.username === userName) {
        vote = el.rate;
      }
    });
    setUserVote(vote);
  }, [imageIndex, places, userName]);

  const photogalery2 = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];

  const photogalery = places
    ? places.map((place) => {
        return {
          original: place.photoUrl,
          originalTitle: place.name,
          originalAlt: place.name,
          originalLabel: place.name,
          thumbnail: place.photoUrl,
          description: place.name,
          // place.description
        };
      })
    : photogalery2;
  return (
    <PhotoGalleryInner overImage={overImage}>
      {places && (
        <>
          <ImageGallery
            items={photogalery}
            onMouseOver={() => setOverImage(true)}
            onMouseLeave={() => setOverImage(false)}
            thumbnailPosition="top"
            // onSlide={(index) => setImageIndex(index)}
            onBeforeSlide={(index) => setImageIndex(index)}
          />
          <Rate activeStars={userVote} placeId={places[imageIndex].placeId} />
          <Button onClick={() => setVotersWindow(true)}>{localization.places.showVoters}</Button>
          {votersWindow && (
            <Voters placeIndex={imageIndex} onClose={() => setVotersWindow(false)} />
          )}
          <PhotoGalleryDescr>{places ? places[imageIndex].description : ""}</PhotoGalleryDescr>
        </>
      )}
    </PhotoGalleryInner>
  );
};

export default PhotogalleryOfCountry;
