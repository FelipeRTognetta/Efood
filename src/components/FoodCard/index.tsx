import pizza from '../../assets/images/pizza.png'
import { Card, Button } from './styles'

const FoodCard = () => (
  <Card>
    <img src={pizza} alt="Pizza" />
    <h5>Pizza Marguerita</h5>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <Button>Adicionar ao carrinho</Button>
  </Card>
)

export default FoodCard
