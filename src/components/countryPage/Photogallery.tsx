import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import "react-image-gallery/styles/css/image-gallery.css";
import { getPlaces } from "../../redux/countrySlice";
import styled from "styled-components";

const PhotoGalleryInner = styled.div<{ overImage: boolean }>`
  margin-bottom: 60px;
  width: 83%;
  .image-gallery-content .image-gallery-slides {
    height: 500px;
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
    bottom: 25%;
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
  }
  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover {
    border-color: #df5900;
  }
`;

const PhotogalleryOfCountry: React.FC = () => {
  const places = useSelector(getPlaces);
  const [overImage, setOverImage] = useState<boolean>(false);
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
          description: `${place.name} - ${place.description}`,
        };
      })
    : photogalery2;
  return (
    <PhotoGalleryInner overImage={overImage}>
      <ImageGallery
        items={photogalery}
        onMouseOver={() => setOverImage(true)}
        onMouseLeave={() => setOverImage(false)}
      />
    </PhotoGalleryInner>
  );
};

export default PhotogalleryOfCountry;
