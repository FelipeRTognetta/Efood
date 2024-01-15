import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

import { FooterDiv, Social, Socials, Text } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <FooterDiv>
    <Link to="/">
      <img src={logo} alt="Efood" />
    </Link>
    <Socials>
      <Social href="https://www.instagram.com/">
        <img src={instagram} alt="Instagram" />
      </Social>
      <Social href="https://www.facebook.com/">
        <img src={facebook} alt="Facebook" />
      </Social>
      <Social href="https://twitter.com/">
        <img src={twitter} alt="Twitter" />
      </Social>
    </Socials>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterDiv>
)

export default Footer
