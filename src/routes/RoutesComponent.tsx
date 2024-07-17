import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { TitlePage } from '../components/TitlePage';
import { Search } from '../pages/Search';
import { Movies } from '../pages/Movies';
import { Series } from '../pages/Series';

export function RoutesComponent(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='cadastro' element={<Cadastro />} />
        <Route path='search' element={<Search />} />
        <Route path='movies' element={<Movies />} />
        <Route path='series' element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
    
}