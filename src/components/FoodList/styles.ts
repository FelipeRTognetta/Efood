import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`

export const Card = styled.li`
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.offWhite};

  .img-container {
    width: 304px;
    height: 168px;
`
export const FoodImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const FoodTitle = styled.h5`
  font-weight: 900;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const FoodDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
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

  .modal-img-container {
    width: 280px;
    height: 280px;
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
  object-fit: cover;
`
