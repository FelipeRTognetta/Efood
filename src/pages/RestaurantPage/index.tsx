import { useEffect, useState } from 'react'
import { Restaurant } from '../Home'

import FoodList, { FoodItem } from '../../components/FoodList'
import RestaurantBanner from '../../components/RestaurantBanner'
import { useParams } from 'react-router-dom'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [menu, setMenu] = useState<FoodItem[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log('Dados do restaurante: ', res)
        setRestaurant(res)
        setMenu(res.cardapio)
      })
      .catch((error) => {
        console.error('Erro ao carregar dados do restaurante:', error)
      })
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

      {restaurant && <FoodList menu={menu} />}
    </>
  )
}

export default RestaurantPage
