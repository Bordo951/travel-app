import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryPageLocalization } from "../../../redux/localizationSlice";
import {
  getCurrency,
  fetchExchangeData,
  getExchangeData,
  getErrorMessage,
  getRequestStatus,
} from "../../../redux/exchangeSlice";
import styled from "styled-components";

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
const CurrencyInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
`;
const CurrencyInput = styled.input`
  border: 1px solid #df5900;
  border-radius: 4px;
  padding: 2px;
  width: 80px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const CurrencyWidget: React.FC = () => {
  const currency = useSelector(getCurrency);
  const exchange = useSelector(getExchangeData);
  let countryCurrency = exchange?.countryCurrency;
  const status = useSelector(getRequestStatus);
  const error = useSelector(getErrorMessage);
  const localization = useSelector(getCountryPageLocalization);

  const [inputCarrency, setInputCurrency] = useState<number | string>(1);
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
      val === 0 ? setInputCurrency("") : setInputCurrency(val);
      if (val > 999999999999) return;
      setCurrencyUSD(exchange.currencyInUSD * val);
      setCurrencyEUR(exchange.currencyInEUR * val);
      setCurrencyRUB(exchange.currencyInRUB * val);
    }
  };
  return (
    <div>
      {status === "loading" && <Message>Loading...</Message>}
      {status === "failed" && <Message>{error}</Message>}
      {status === "succeeded" && exchange !== null && (
        <CurrencyInner>
          <div>
            <div>{`${currency}:`}</div>
            <CurrencyInput value={inputCarrency} type="number" onChange={(e) => handleInput(e)} />
          </div>
          <div>
            <div>{`${localization.exchange.usd}: ${currencyUSD.toFixed(3)}`}</div>
            <div>{`${localization.exchange.eur}: ${currencyEUR.toFixed(3)}`}</div>
            <div>{`${localization.exchange.rub}: ${currencyRUB.toFixed(3)}`}</div>
          </div>
        </CurrencyInner>
      )}
    </div>
  );
};

export default CurrencyWidget;
