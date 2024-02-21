import styled from 'styled-components'
import { Button, breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
export const SidebarContainer = styled.div`
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
  color: ${colors.offWhite};
  background-color: ${colors.pink};
  z-index: 1;
  padding: 32px 8px;
  width: 360px;
  overflow: auto;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    margin: 0 8px;
  }
}
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: ${colors.pink};

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

export const FormTitle = styled.h4`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${colors.offWhite};
    height: 32px;
    width: 100%;
    border: 1px solid ${colors.offWhite};
    padding: 8px;
    font-weight: 700;
    font-size: 14px;
    color: ${colors.gray};

    &.error {
      border: 2px solid #c70e0e;
    }
  }
`

export const RowGroup = styled.div`
  display: flex;
  gap: 34px;
`

export const CartP = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
`
