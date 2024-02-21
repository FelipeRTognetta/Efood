import { BarLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const LoadingIcon = () => (
  <Container>
    <BarLoader color={colors.pink} />
  </Container>
)

export default LoadingIcon
