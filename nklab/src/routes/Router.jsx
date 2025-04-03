import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Exames from '../pages/Exames';
import SobreNos from '../pages/SobreNos';
import BlogPrevia from '../pages/BlogPrevia';
import BlogPostCompleto from '../pages/BlogPostCompleto';
import ScrollTop from "../utils/ScrollTop";



export const Router = () => {
    return (
        <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/exames" element={<Exames />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/blog" element={<BlogPrevia />} />
          <Route path="/blog-completo/:id" element={<BlogPostCompleto  />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    )
}