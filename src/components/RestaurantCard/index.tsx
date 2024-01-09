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
  title: string
  rating: string
  description: string
  infos: string[]
  image: string
}

const RestaurantCard = ({
  title,
  rating,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardHeader>
      <h3>{title}</h3>
      <Rating>
        <p>{rating}</p>
        <img src={star} alt="stars" />
      </Rating>
    </CardHeader>
    <Description>{description}</Description>
    <Link to="/restaurant">
      <Button>Saiba mais</Button>
    </Link>
  </Card>
)

export default RestaurantCard
