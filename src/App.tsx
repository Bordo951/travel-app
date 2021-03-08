import React from 'react';
import Header from './components/Header';
import CountryPage from './components/CountryPage';

import styled, { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Montserrat-Regular',sans-serif;
    font-size: 16px;
  }
  h1,h2,h3,h4,h5,h6 {
    line-height: 1.75;
  }
`
const Countainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <div>
      <Countainer >
        <GlobalStyle />
        <Header />
        <CountryPage />
      </Countainer>
    </div>
  )
}

export default App;
