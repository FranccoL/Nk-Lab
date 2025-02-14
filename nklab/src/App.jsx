import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Inicio from './pages/Inicio';
import Exames from './pages/Exames';
import Contato from './pages/Contato';
import Blog from './pages/Blog';






function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Inicio />} />
        <Route path="/exames" element={<Exames />}/>
        <Route path="/contato" element={<Contato />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<h1>Página não encontrada : </h1>} />
      </Routes>
    </Router>
  )
}

export default App