import { Link } from 'react-router-dom'

import star from '../../assets/images/star.svg'
import * as S from './styles'

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
    if (destacado) return <S.Tag>Destaque do dia</S.Tag>
  }

  return (
    <S.Card>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <S.Infos>
        {destaque()}
        <S.Tag>{tipo}</S.Tag>
      </S.Infos>
      <S.CardHeader>
        <h3>{title}</h3>
        <S.Rating>
          <p>{rating}</p>
          <img src={star} alt="stars" />
        </S.Rating>
      </S.CardHeader>
      <S.Description>{description}</S.Description>
      <Link to={`/restaurant/${id}`}>
        <S.Button>Saiba mais</S.Button>
      </Link>
    </S.Card>
  )
}

export default RestaurantCard
