import { useEffect, useState } from 'react'
import { Restaurante } from '../../types/Restaurante'

import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header type="home" />
      <div className="container">
        <RestaurantList restaurantes={restaurantes} />
      </div>
    </>
  )
}

export default Home
