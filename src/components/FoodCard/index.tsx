import { Card, Button } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
}

const FoodCard = ({ foto, nome, descricao }: Props) => (
  <Card>
    <img src={foto} alt="Pizza" />
    <h5>{nome}</h5>
    <p>{descricao}</p>
    <Button>Adicionar ao carrinho</Button>
  </Card>
)

export default FoodCard
