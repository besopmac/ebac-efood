import { Route, Routes } from 'react-router-dom'
import Restaurante from './pages/Restaurante'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Restaurante />} />
  </Routes>
)

export default Rotas
