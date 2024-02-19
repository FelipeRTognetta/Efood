import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ImagemBg = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  margin-bottom: 80px;
`

export const Text = styled.p`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  max-width: 540px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
    line-height: 38px;
`
