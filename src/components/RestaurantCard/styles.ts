import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.li`
  border: 1px solid ${colors.pink};
  background-color: ${colors.white};
  padding-bottom: 8px;
  position: relative;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin: 8px;
  line-height: 22px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px;
`

export const Button = styled.a`
  margin: 8px;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  background-color: ${colors.pink};
  color: ${colors.offWhite};
  text-decoration: none;
`

export const Tag = styled.div`
  background-color: ${colors.pink};
  color: ${colors.offWhite};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  display: inline-block;
  margin-left: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
