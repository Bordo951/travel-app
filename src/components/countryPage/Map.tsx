import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  YMaps,
  Map as CountryMap,
  Placemark,
  Polygon,
  FullscreenControl,
  TypeSelector,
  ZoomControl,
} from "react-yandex-maps";
import styled from "styled-components";
import { getCapitalCoordinates, getCapitalName, getIsoCode } from "../../redux/countrySlice";
import { getLanguage } from "../../redux/localizationSlice";

const MapInner = styled.div`
  margin-bottom: 100px;
`;

const Map: React.FC = () => {
  const capitalCoords = useSelector(getCapitalCoordinates);
  const isoCode = useSelector(getIsoCode);
  const capital = useSelector(getCapitalName);
  const language = useSelector(getLanguage);
  const [bordersGeo, setBordersGeo] = useState();
  const [mapLanguage, setMapLanguage] = useState<"ru_RU" | "en_RU">("en_RU");

  useEffect(() => {
    (async () => {
      if (isoCode) {
        const { data } = await axios(`/country-borders-geo/${isoCode}.json`);
        setBordersGeo(data.geometry.coordinates);
      }
    })();
  }, [isoCode]);

  useEffect(() => {
    const lang = language === "ru" ? "ru_RU" : "en_RU";
    setMapLanguage(lang);
  }, [language]);
  return (
    <MapInner>
      <YMaps
        key={mapLanguage}
        query={{
          coordorder: "longlat",
          lang: mapLanguage,
          apikey: "7d285ab0-d630-43ed-8836-e79941f61a01",
        }}
      >
        {capitalCoords && (
          <CountryMap
            defaultState={{ center: capitalCoords, zoom: 5 }}
            defaultOptions={{ minZoom: 3, nativeFullscreen: true }}
            width="100%"
            height="500px"
          >
            <Placemark
              geometry={capitalCoords}
              properties={{ iconContent: capital }}
              options={{ preset: "islands#nightStretchyIcon" }}
            />
            <Polygon
              geometry={bordersGeo}
              options={{
                fillColor: "rgba(216, 51, 73, 0.1)",
                strokeColor: "rgb(160, 25, 43)",
                strokeWidth: 1,
                strokeStyle: "solid",
              }}
            />
            <FullscreenControl />
            <TypeSelector />
            <ZoomControl />
          </CountryMap>
        )}
      </YMaps>
    </MapInner>
  );
};

export default Map;
