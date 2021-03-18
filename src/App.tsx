import React, { useEffect } from "react";
import { Route, HashRouter, Redirect } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import HomePage from "./pages/HomePage";

import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./redux/localizationSlice";
import { SignUp } from "./pages/SingUp";
import { checkUser, getUserName } from "./redux/authSlice";
import { LogIn } from "./pages/LogIn";

import ScrollTop from "./components/ScrollTop";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat-Regular',sans-serif;
    font-size: 16px;
    overflow-y: scroll;
    
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
      // border-radius: 10px;
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      // border-radius: 10px;
      background-image: -webkit-gradient(linear,
                         left bottom,
                         left top,
                         color-stop(0.44, rgb(122,153,217)),
                         color-stop(0.72, rgb(73,125,189)),
                         color-stop(0.86, #054B6D));
    }
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
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  useEffect(() => {
    const lang = localStorage.getItem("TA-34-lang");
    if (lang === "ru" || lang === "en" || lang === "de") {
      dispatch(setLanguage(lang));
    }
    dispatch(checkUser());
  }, [dispatch]);
  return (
    <HashRouter>
      <ScrollTop />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/country/:id" component={CountryPage} />
        <Route path="/signup">{userName !== "" ? <Redirect to="/" /> : <SignUp />}</Route>
        <Route path="/login">{userName !== "" ? <Redirect to="/" /> : <LogIn />}</Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default App;
