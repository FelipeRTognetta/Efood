import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const { data: restaurant, isLoading } = useGetRestaurantsQuery()

  if (restaurant) {
    return (
      <>
        <Banner />
        <RestaurantList restaurants={restaurant} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
