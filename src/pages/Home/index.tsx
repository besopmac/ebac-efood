import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Header type="home" />
        <div className="container">
          <RestaurantList restaurantes={restaurantes} />
        </div>
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
