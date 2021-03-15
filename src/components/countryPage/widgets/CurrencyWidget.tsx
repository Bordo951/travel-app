import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCurrency, fetchExchangeData, getExchangeData } from "../../../redux/exchangeSlice";

const CurrencyInput = styled.input``;

const CurrencyWidget: React.FC = () => {
  const currency = useSelector(getCurrency);
  const exchange: any = useSelector(getExchangeData)?.convertedCurrency;
  const [inputCarrency, setInputCurrency] = useState<number>(1);
  const [currencyUSD, setCurrencyUSD] = useState<number>(0);
  const [currencyEUR, setCurrencyEUR] = useState<number>(0);
  const [currencyRUB, setCurrencyRUB] = useState<number>(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExchangeData());
  }, [dispatch, currency]);

  let countryCurrencyInEUR = 0;
  if (exchange) {
    for (let item in exchange) {
      if (item === currency) {
        countryCurrencyInEUR = 1 / exchange[item];
      }
    }
  }
  useEffect(() => {
    if (countryCurrencyInEUR > 0) {
      setCurrencyUSD(exchange?.USD * countryCurrencyInEUR);
      setCurrencyEUR(exchange?.EUR * countryCurrencyInEUR);
      setCurrencyRUB(exchange?.RUB * countryCurrencyInEUR);
    }
  }, [countryCurrencyInEUR]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (+(e.target as HTMLInputElement).value > 0) {
      setInputCurrency(+(e.target as HTMLInputElement).value);
      countryCurrencyInEUR *= +(e.target as HTMLInputElement).value;
      setCurrencyUSD(exchange?.USD * countryCurrencyInEUR);
      setCurrencyEUR(exchange?.EUR * countryCurrencyInEUR);
      setCurrencyRUB(exchange?.RUB * countryCurrencyInEUR);
    }
  };
  return (
    <div>
      <CurrencyInput value={inputCarrency} type="number" onChange={(e) => handleInput(e)} />
      <span>{currency}</span>
      <div>=</div>
      <div>USD: {currencyUSD}</div>
      <div>EUR: {currencyEUR}</div>
      <div>RUB: {currencyRUB}</div>
    </div>
  );
};

export default CurrencyWidget;
