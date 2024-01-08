import hioki from '../../assets/images/hioki.png'
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

const Restaurant = () => (
  <Card>
    <img src={hioki} alt="Hioki Sushi" />
    <Infos>
      <Tag>Japonesa</Tag>
      <Tag>Destaque da semana</Tag>
    </Infos>
    <CardHeader>
      <h3>Hioki Sushi </h3>
      <Rating>
        <p>4.9</p>
        <img src={star} alt="stars" />
      </Rating>
    </CardHeader>
    <Description>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </Description>
    <Button href="#">Saiba mais</Button>
  </Card>
)

export default Restaurant
