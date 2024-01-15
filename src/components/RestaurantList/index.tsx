import { Restaurant } from '../../pages/Home'
import RestaurantCard from '../RestaurantCard'
import { List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.titulo}
          rating={restaurant.avaliacao}
          description={restaurant.descricao}
          destacado={restaurant.destacado}
          tipo={restaurant.tipo}
          image={restaurant.capa}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
