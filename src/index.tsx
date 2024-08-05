import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RoutesComponent } from './routes/RoutesComponent';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './themes/Light';
import { createContext } from 'react';
import { profileResponseType } from './controllers/ProfilesController';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 

export const AccountContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["/edit-data", () => {}]);
export const ProfileContext = createContext<[profileResponseType, React.Dispatch<React.SetStateAction<profileResponseType>>]>([{id: 0, image: "", name: "", type: "", idUser: 0}, () => {}]);

const App = () => {
  const [currentRoute, setCurrentRoute] = useState<string>("/edit-data");
  const [currentProfile, setCurrentProfile] = useState<profileResponseType>({id: 0, image: "", name: "", type: "", idUser: 0});

  return (
    <AccountContext.Provider value={[currentRoute, setCurrentRoute]}>
      <ProfileContext.Provider value={[currentProfile, setCurrentProfile]}>
        <ThemeProvider theme={LightTheme}>
          <React.StrictMode>
            <RoutesComponent />
          </React.StrictMode>
        </ThemeProvider>
      </ProfileContext.Provider>
    </AccountContext.Provider>
  );
};

root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
