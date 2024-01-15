import { useEffect, useState } from 'react'
import { Restaurant } from '../Home'

import FoodList from '../../components/FoodList'
import RestaurantBanner from '../../components/RestaurantBanner'
import { useParams } from 'react-router-dom'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    <>
      {restaurant && (
        <RestaurantBanner
          capa={restaurant.capa}
          tipo={restaurant.tipo}
          titulo={restaurant.titulo}
        />
      )}
      <FoodList restaurants={restaurant} />
    </>
  )
}

export default RestaurantPage
