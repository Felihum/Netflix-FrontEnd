import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { TitlePage } from '../pages/TitlePage';

export function RoutesComponent(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='cadastro' element={<Cadastro />} />
        <Route path='title' element={<TitlePage />} />
      </Routes>
    </BrowserRouter>
  );
    
}