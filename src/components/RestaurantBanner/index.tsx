import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const RestaurantBanner = ({ capa, tipo, titulo }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Banner>
      <ImagemBg style={{ backgroundImage: `url(${bannerImg})` }}>
        <BannerInfos className="container">
          <h3>
            <BannerInfo to="/">Restaurantes</BannerInfo>
          </h3>

          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <p onClick={openCart}>
            {items.length} <span>produto(s)</span> no carrinho
          </p>
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
}

export default RestaurantBanner
