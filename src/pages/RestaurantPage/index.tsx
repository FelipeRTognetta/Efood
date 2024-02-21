import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import FoodList from '../../components/FoodList'
import { useGetRestaurantQuery } from '../../services/api'
import RestaurantBanner from '../../components/RestaurantBanner'
import LoadingIcon from '../../components/LoadingIcon'

type RestaurantParams = {
  id: string
}

const RestaurantPage = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  const [menu, setMenu] = useState<FoodItem[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log('Dados do restaurante: ', res)
        setMenu(res.cardapio)
      })
      .catch((error) => {
        console.error('Erro ao carregar dados do restaurante:', error)
      })
  }, [id])

  if (restaurant) {
    return (
      <>
        <RestaurantBanner
          background={restaurant.capa}
          couisine={restaurant.tipo}
          title={restaurant.titulo}
        />
        <FoodList menu={menu} />
      </>
    )
  }
  return <LoadingIcon />
}

export default RestaurantPage
