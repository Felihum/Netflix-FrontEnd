import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { TitlePage } from '../pages/TitlePage';
import { Search } from '../pages/Search';
import { Movies } from '../pages/Movies';
import { Series } from '../pages/Series';
import { Perfis } from '../pages/Perfis';
import { AddProfile } from '../pages/AddProfile';
import { Account } from '../pages/Account';
import { EditAccount } from '../pages/EditAccount';
import { EditSubscription } from '../pages/EditSubscription';
import { DeleteAccount } from '../pages/DeleteAccount';
import { EditProfile } from '../pages/EditProfile';
import { EditProfileForm } from '../pages/EditProfileForm';
import { useContext } from 'react';
import { AuthenticationContext, SelectedProfileContext } from '..';

export function RoutesComponent(){
  const authContext = useContext(AuthenticationContext);
  const selectedProfile = useContext(SelectedProfileContext);

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <Home /> : <Perfis />) : <Login />} />
        <Route path='login' element={<Login />} />
        <Route path='cadastro' element={<Cadastro />} />
        <Route path='search' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <Search /> : <Perfis />) : <Login />} />
        <Route path='movies' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <Movies /> : <Perfis />) : <Login />} />
        <Route path='series' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <Series /> : <Perfis />) : <Login />} />
        <Route path='change-profile' element={authContext?.isAuthenticated ? <Perfis /> : <Login />} />
        <Route path='add-profile' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <AddProfile /> : <Perfis />) : <Login />} />
        <Route path='account' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <Account /> : <Perfis />) : <Login />} />
        <Route path='edit-data' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <EditAccount /> : <Perfis />) : <Login />} />
        <Route path='edit-subscription' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <EditSubscription /> : <Perfis />) : <Login />} />
        <Route path='delete-account' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <DeleteAccount /> : <Perfis />) : <Login />} />
        <Route path='edit-profile' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <EditProfile /> : <Perfis />) : <Login />} />
        <Route path='edit-profile-form/:idProfile' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <EditProfileForm /> : <Perfis />) : <Login />} />
        <Route path='title-page/:idTitle' element={authContext?.isAuthenticated ? (selectedProfile?.selectedProfile ? <TitlePage /> : <Perfis />) : <Login />} />
      </Routes>
    </BrowserRouter>
  );
    
}