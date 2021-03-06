import React from 'react';
import Header from './components/Header';
import CountryPage from './components/CountryPage';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 16px;
  }
  h1,h2,h3,h4,h5,h6 {
    line-height: 1.75;
  }
`

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <CountryPage />
    </div>
  )
}

export default App;
