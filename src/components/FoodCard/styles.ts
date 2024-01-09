import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.li`
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.offWhite};

  h5 {
    font-weight: 900;
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }
`

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  background-color: ${colors.offWhite};
  color: ${colors.pink};
  padding: 4px;
  border: none;
  width: 100%;
  cursor: pointer;
`
