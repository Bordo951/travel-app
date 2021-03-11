import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getLanguage } from "../../../redux/localizationSlice";
import { getTimezone } from "../../../redux/weatherSlice";

const Inner = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
`;

const DateRow = styled.p`
  margin: 10px 0;
`;

const WeekDay = styled.p`
  margin: 10px 0;
  text-transform: capitalize;
`;

const Time = styled.p`
  margin: 10px 0;
  letter-spacing: 0.8px;
`;

const dateConverter = (dateInMs: number, locale: "ru" | "en" | "de" = "en") => {
  const date = new Date(dateInMs);
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const weekdayOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    timeZone: "UTC",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return {
    date: date.toLocaleString(locale, dateOptions),
    weekday: date.toLocaleString(locale, weekdayOptions),
    time: date.toLocaleString(locale, timeOptions),
  };
};

type DateType = {
  date: string;
  weekday: string;
  time: string;
};

const DateAndTimeWidget: React.FC = () => {
  const timezone = useSelector(getTimezone);
  const language = useSelector(getLanguage);
  const [date, setDate] = useState<DateType | null>(null);

  useEffect(() => {
    if (timezone === undefined) return;
    const interval = setInterval(() => {
      const dateInMs = Date.now() + timezone * 1000;
      const formattedDate = dateConverter(dateInMs, language);
      setDate(formattedDate);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timezone, language]);

  return (
    <>
      {date !== null && (
        <Inner>
          <DateRow>{date.date}</DateRow>
          <WeekDay>{date.weekday}</WeekDay>
          <Time>{date.time}</Time>
        </Inner>
      )}
    </>
  );
};

export default DateAndTimeWidget;
