import { Route, Routes } from 'react-router-dom'

import Hero from './pages/Hero/index'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Hero />} />
  </Routes>
)

export default Rotas
