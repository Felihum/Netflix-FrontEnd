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

export function RoutesComponent(){
  //const authContext = useContext(AuthenticationContext);
  const authentication = async () => await localStorage.getItem("token");
  //const selectedProfile = useContext(SelectedProfileContext);
  const selectedProfile = async () => await localStorage.getItem("Profile");

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={authentication !== null ? (selectedProfile !== null ? <Home /> : <Perfis />) : <Login />} />
        <Route path='login' element={<Login />} />
        <Route path='cadastro' element={<Cadastro />} />
        <Route path='search' element={authentication !== null ? (selectedProfile !== null ? <Search /> : <Perfis />) : <Login />} />
        <Route path='movies' element={authentication !== null ? (selectedProfile !== null ? <Movies /> : <Perfis />) : <Login />} />
        <Route path='series' element={authentication !== null ? (selectedProfile !== null ? <Series /> : <Perfis />) : <Login />} />
        <Route path='change-profile' element={authentication !== null ? <Perfis /> : <Login />} />
        <Route path='add-profile' element={authentication !== null ? (selectedProfile !== null ? <AddProfile /> : <Perfis />) : <Login />} />
        <Route path='account' element={authentication !== null ? (selectedProfile !== null ? <Account /> : <Perfis />) : <Login />} />
        <Route path='edit-data' element={authentication !== null ? (selectedProfile !== null ? <EditAccount /> : <Perfis />) : <Login />} />
        <Route path='edit-subscription' element={authentication !== null ? (selectedProfile !== null ? <EditSubscription /> : <Perfis />) : <Login />} />
        <Route path='delete-account' element={authentication !== null ? (selectedProfile !== null ? <DeleteAccount /> : <Perfis />) : <Login />} />
        <Route path='edit-profile' element={authentication !== null ? (selectedProfile !== null ? <EditProfile /> : <Perfis />) : <Login />} />
        <Route path='edit-profile-form/:idProfile' element={authentication !== null ? (selectedProfile !== null ? <EditProfileForm /> : <Perfis />) : <Login />} />
        <Route path='title-page/:idTitle' element={authentication !== null ? (selectedProfile !== null ? <TitlePage /> : <Perfis />) : <Login />} />
      </Routes>
    </BrowserRouter>
  );
    
}