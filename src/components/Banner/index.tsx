import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/banner.png'
import { ImagemBg, Text } from './styles'

const Banner = () => (
  <ImagemBg style={{ backgroundImage: `url(${bannerImg})` }}>
    <img src={logo} alt="Efood" />
    <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
  </ImagemBg>
)

export default Banner
