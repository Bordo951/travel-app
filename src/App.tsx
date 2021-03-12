import React from "react";
import {Route, HashRouter} from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import HomePage from "./pages/HomePage";

import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

import {Switch} from "react-router-dom";

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
`;

const App: React.FC = () => {
  return (
      <HashRouter>
          <GlobalStyle />
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/country/:id" component={CountryPage}/>
          </Switch>
          <Footer/>
      </HashRouter>
  );
};

export default App;
