import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './globalStyle';
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import { ReserveContextProvider } from './context/ReserveContext';
import { AuthContextProvider } from './context/AuthContext';
import SnackbarProvider from "react-simple-snackbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ReserveContextProvider>
        <SnackbarProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </SnackbarProvider>
      </ReserveContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);