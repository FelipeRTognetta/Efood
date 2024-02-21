import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'
import { Button } from '../../styles'
import close from '../../assets/images/close.png'

export type FoodListProps = {
  menu: FoodItem[]
}

export interface ModalState {
  isVisible: boolean
  selectedFood?: FoodItem
}

const FoodList = ({ menu }: FoodListProps) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    selectedFood: undefined
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const openModal = (foodItem: FoodItem) => {
    setModal({
      isVisible: true,
      selectedFood: foodItem
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 155) {
      return descricao.slice(0, 147) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    if (modal.selectedFood) {
      dispatch(add(modal.selectedFood))
      closeModal()
      dispatch(open())
    }
  }

  return (
    <>
      <S.List className="container">
        {menu.map((foodItem) => (
          <S.Card key={foodItem.id}>
            <S.FoodImg
              className="img-container"
              src={foodItem.foto}
              alt={foodItem.nome}
            />
            <S.FoodTitle>{foodItem.nome}</S.FoodTitle>
            <S.FoodDescription>
              {getDescricao(foodItem.descricao)}
            </S.FoodDescription>
            <Button
              onClick={() => {
                openModal(foodItem)
              }}
            >
              Adicionar ao carrinho
            </Button>
          </S.Card>
        ))}
      </S.List>

      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        {modal.selectedFood && (
          <S.ModalContent key={modal.selectedFood.id} className="container">
            <S.CloseB
              src={close}
              alt="Click to close"
              onClick={() => {
                closeModal()
              }}
            />
            <S.ModalImg
              className="modal-img-container"
              src={modal.selectedFood.foto}
              alt={modal.selectedFood.nome}
            />
            <div>
              <h3>{modal.selectedFood.nome}</h3>
              <p>{modal.selectedFood.descricao}</p>
              <p>Serve: de {modal.selectedFood.porcao}</p>
              <Button onClick={addToCart}>
                Adicionar ao carrinho - {parseToBrl(modal.selectedFood.preco)}
              </Button>
            </div>
          </S.ModalContent>
        )}

        <S.Overlay
          onClick={() => {
            closeModal()
          }}
        ></S.Overlay>
      </S.Modal>
    </>
  )
}

export default FoodList
