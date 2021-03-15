import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCurrency, fetchExchangeData, getExchangeData } from "../../../redux/exchangeSlice";

const CurrencyInput = styled.input``;

const CurrencyWidget: React.FC = () => {
  const currency = useSelector(getCurrency);
  const exchange = useSelector(getExchangeData);
  let countryCurrency = exchange?.countryCurrency;

  const [inputCarrency, setInputCurrency] = useState<number>(1);
  const [currencyUSD, setCurrencyUSD] = useState<number>(0);
  const [currencyEUR, setCurrencyEUR] = useState<number>(0);
  const [currencyRUB, setCurrencyRUB] = useState<number>(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExchangeData());
  }, [dispatch, currency]);

  useEffect(() => {
    setCurrencyUSD(exchange ? exchange.currencyInUSD : 0);
    setCurrencyEUR(exchange ? exchange.currencyInEUR : 0);
    setCurrencyRUB(exchange ? exchange.currencyInRUB : 0);
  }, [exchange]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    let val = +(e.target as HTMLInputElement).value;

    if (val > -1 && countryCurrency && exchange) {
      setInputCurrency(val);

      // countryCurrency? countryCurrency = countryCurrency * +(e.target as HTMLInputElement).value): 0;
      setCurrencyUSD(exchange.currencyInUSD * val);
      setCurrencyEUR(exchange.currencyInEUR * val);
      setCurrencyRUB(exchange.currencyInRUB * val);
    }
  };
  return (
    <div>
      <CurrencyInput value={inputCarrency} type="number" onChange={(e) => handleInput(e)} />
      <span>{currency}</span>
      <div>=</div>
      <div>USD: {currencyUSD.toFixed(3)}</div>
      <div>EUR: {currencyEUR.toFixed(3)}</div>
      <div>RUB: {currencyRUB.toFixed(3)}</div>
    </div>
  );
};

export default CurrencyWidget;
