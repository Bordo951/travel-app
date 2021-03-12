import React, { useEffect } from "react";
import { Route, HashRouter } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import HomePage from "./pages/HomePage";

import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLanguage } from "./redux/localizationSlice";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat-Regular',sans-serif;
    font-size: 16px;
  }
  h1,h2,h3,h4,h5,h6 {
    line-height: 1.75;
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const lang = localStorage.getItem("TA-34-lang");
    if (lang === "ru" || lang === "en" || lang === "de") {
      dispatch(setLanguage(lang));
    }
  }, [dispatch]);
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/country/:id" component={CountryPage} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default App;
