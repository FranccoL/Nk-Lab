import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Exames from '../pages/Exames';
import SobreNos from '../pages/SobreNos';
import BlogPrevia from '../pages/BlogPrevia';
import BlogPostCompleto from '../pages/BlogPostCompleto';
import BlogAdmin from '../pages/BlogAdmin';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import DashboardT from '../pages/DashboardT';

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/exames" element={<Exames />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/blog" element={<BlogPrevia />} />
          <Route path="/blog-completo/:id" element={<BlogPostCompleto  />} />
          <Route path="/blog-interno" element={<BlogAdmin />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/tutor-dashboard/:token" element={<DashboardT />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    )
}