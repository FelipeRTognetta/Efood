import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/banner.png'
import { ImagemBg, Text } from './styles'

const Banner = () => (
  <ImagemBg style={{ backgroundImage: `url(${bannerImg})` }}>
    <Link to="/">
      <img src={logo} alt="Efood" />
    </Link>
    <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
  </ImagemBg>
)

export default Banner
