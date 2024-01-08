import Restaurant from '../Restaurant'
import { List } from './styles'

const RestaurantList = () => (
  <div className="container">
    <List>
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
      <li>
        <Restaurant />
      </li>
    </List>
  </div>
)

export default RestaurantList
