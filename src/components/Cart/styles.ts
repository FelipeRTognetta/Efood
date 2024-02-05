import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 32px 8px;
  width: 360px;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.offWhite};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 40px;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${colors.offWhite};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;

  .img-container {
    width: 80px;
    height: 80px;
  }
`
export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-right: 8px;
`

export const ItemName = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`
export const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: 400;
`

export const Delete = styled.img`
  bottom: 8px;
  right: 8px;
  position: absolute;
  cursor: pointer;
`
