import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/banner.png'
import * as S from './styles'

type Props = {
  background: string
  couisine: string
  title: string
}

const RestaurantBanner = ({ background, couisine, title }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Banner>
      <S.ImagemBg style={{ backgroundImage: `url(${bannerImg})` }}>
        <S.BannerInfos className="container">
          <h3>
            <S.BannerInfo to="/">Restaurantes</S.BannerInfo>
          </h3>

          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <p onClick={openCart}>
            {items.length} <span>produto(s)</span> no carrinho
          </p>
        </S.BannerInfos>
      </S.ImagemBg>
      <S.BannerImg style={{ backgroundImage: `url(${background})` }}>
        <S.BlackLayer>
          <S.Tags className="container">
            <h4>{couisine}</h4>
            <h2>{title}</h2>
          </S.Tags>
        </S.BlackLayer>
      </S.BannerImg>
    </S.Banner>
  )
}

export default RestaurantBanner
