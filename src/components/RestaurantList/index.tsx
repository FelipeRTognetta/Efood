import Restaurant from '../../models/Restaurant'
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
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
          infos={restaurant.infos}
          image={restaurant.image}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
