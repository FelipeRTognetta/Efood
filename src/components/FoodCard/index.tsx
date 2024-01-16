import { Card, Button } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
  onClickCard?: () => void
}

const FoodCard = ({ foto, nome, descricao, onClickCard }: Props) => {
  return (
    <Card>
      <img src={foto} alt={nome} />
      <h5>{nome}</h5>
      <p>{descricao}</p>
      <Button onClick={onClickCard}>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default FoodCard
