import { Link } from 'react-router-dom'

import star from '../../assets/images/star.svg'
import {
  Card,
  CardHeader,
  Rating,
  Description,
  Button,
  Tag,
  Infos
} from './styles'

type Props = {
  id: number
  title: string
  rating: number
  description: string
  destacado: boolean
  tipo: string
  image: string
}

const RestaurantCard = ({
  id,
  title,
  rating,
  description,
  destacado,
  tipo,
  image
}: Props) => {
  const destaque = () => {
    if (destacado) return <Tag>Destaque do dia</Tag>
  }

  return (
    <Card>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <Infos>
        {destaque()}
        <Tag>{tipo}</Tag>
      </Infos>
      <CardHeader>
        <h3>{title}</h3>
        <Rating>
          <p>{rating}</p>
          <img src={star} alt="stars" />
        </Rating>
      </CardHeader>
      <Description>{description}</Description>
      <Link to={`/restaurant/${id}`}>
        <Button>Saiba mais</Button>
      </Link>
    </Card>
  )
}

export default RestaurantCard
