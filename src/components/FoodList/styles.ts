import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../FoodCard/styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: none;

  &.visible {
    display: flex;
  }
`

export const ModalContent = styled.div`
  height: 344px;
  background-color: ${colors.pink};
  z-index: 1;
  display: flex;
  color: ${colors.white};
  padding: 32px;
  position: relative;

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 16px;
    line-height: 22px;
  }

  ${Button} {
    width: 220px;
  }
`

export const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  position: absolute;
`

export const CloseB = styled.img`
  top: 0;
  right: 0;
  position: absolute;
  margin: 8px;
  cursor: pointer;
`

export const ModalImg = styled.img`
  margin-right: 24px;
`
