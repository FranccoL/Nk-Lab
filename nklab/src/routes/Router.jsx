import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Exames from '../pages/Exames';
import SobreNos from '../pages/SobreNos';
import Contato from '../pages/Contato';
import ScrollTop from "../utils/ScrollTop";



export const Router = () => {
    return (
        <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/exames" element={<Exames />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    )
}