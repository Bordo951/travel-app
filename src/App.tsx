import React from "react";
import CountryPage from "./pages/CountryPage";
import HomePage from "./pages/HomePage";

import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";

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
    <div>
      <GlobalStyle />
      <HomePage />
      <CountryPage />
    </div>
  );
};

export default App;
