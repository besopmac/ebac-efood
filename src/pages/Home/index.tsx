import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

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

  return <Loader />
}

export default Home
