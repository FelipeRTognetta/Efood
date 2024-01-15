import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/banner.png'
import {
  ImagemBg,
  Banner,
  BannerInfos,
  BannerImg,
  BlackLayer,
  Tags,
  BannerInfo
} from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const RestaurantBanner = ({ capa, tipo, titulo }: Props) => (
  <Banner>
    <ImagemBg style={{ backgroundImage: `url(${bannerImg})` }}>
      <BannerInfos className="container">
        <h3>
          <BannerInfo to="/">Restaurantes</BannerInfo>
        </h3>

        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <p>0 produto(s) no carrinho</p>
      </BannerInfos>
    </ImagemBg>
    <BannerImg style={{ backgroundImage: `url(${capa})` }}>
      <BlackLayer>
        <Tags className="container">
          <h4>{tipo}</h4>
          <h2>{titulo}</h2>
        </Tags>
      </BlackLayer>
    </BannerImg>
  </Banner>
)

export default RestaurantBanner
