import { useGetRestaurantsQuery } from '../../services/api'
import Banner from '../../components/Banner'
import RestaurantList from '../../components/RestaurantList'
import LoadingIcon from '../../components/LoadingIcon'

const Home = () => {
  const { data: restaurant } = useGetRestaurantsQuery()

  return (
    <>
      <Banner />
      {restaurant ? (
        <RestaurantList restaurants={restaurant} />
      ) : (
        <LoadingIcon />
      )}
    </>
  )
}

export default Home
