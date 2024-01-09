import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterDiv = styled.footer`
  width: 100%;
  height: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: ${colors.offWhite};
  margin-top: 120px;
`
export const Social = styled.a`
  margin-right: 8px;
`
export const Socials = styled.div`
  margin-top: 32px;
  margin-bottom: 80px;
`

export const Text = styled.p`
  max-width: 480px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`
