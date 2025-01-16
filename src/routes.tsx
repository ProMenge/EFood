import { Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero/index'
import RestaurantPage from './pages/RestaurantPage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/restaurant/:id" element={<RestaurantPage />} />
  </Routes>
)

export default Rotas
