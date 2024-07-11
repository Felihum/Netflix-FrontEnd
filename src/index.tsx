import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RoutesComponent } from './routes/RoutesComponent';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './themes/Light';
import { createContext } from 'vm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 

root.render(
    <ThemeProvider theme={LightTheme}>
      <React.StrictMode>
        <RoutesComponent />
      </React.StrictMode>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
