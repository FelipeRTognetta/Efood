import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/banner.png'
import trattoriaB from '../../assets/images/trattoria-banner.png'
import {
  ImagemBg,
  Banner,
  BannerInfos,
  BannerImg,
  BlackLayer,
  Tags
} from './styles'

const RestaurantBanner = () => (
  <Banner>
    <ImagemBg style={{ backgroundImage: `url(${bannerImg})` }}>
      <BannerInfos className="container">
        <h3>Restaurantes</h3>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <p>0 produto(s) no carrinho</p>
      </BannerInfos>
    </ImagemBg>
    <BannerImg style={{ backgroundImage: `url(${trattoriaB})` }}>
      <BlackLayer>
        <Tags className="container">
          <h4>Italiana</h4>
          <h2>La Dolce Vita Trattoria</h2>
        </Tags>
      </BlackLayer>
    </BannerImg>
  </Banner>
)

export default RestaurantBanner
