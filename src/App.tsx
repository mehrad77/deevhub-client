import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';
import {
  ThemeWrapper,
  AuthenticationProvider,
  ApolloProvider,
} from './providers';
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');
  body {
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${theme('colors.black')};
    text-decoration: none;
  }

  a:hover {
    text-decoration:none; 
    cursor:pointer;  
  }
`;

const App = () => {
  return (
    <AuthenticationProvider>
      <ApolloProvider>
        <ThemeWrapper>
          <div className="App">
            <GlobalStyle />

            <Routes />
          </div>
        </ThemeWrapper>
      </ApolloProvider>
    </AuthenticationProvider>
  );
};

export default App;
