import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  List,
  Modal,
  Overlay,
  ModalContent,
  CloseB,
  ModalImg,
  Button,
  Card,
  FoodTitle,
  FoodDescription,
  FoodImg
} from './styles'
import { add, open } from '../../store/reducers/cart'

import close from '../../assets/images/close.png'

export type FoodListProps = {
  menu: FoodItem[]
}

export interface FoodItem {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

export interface ModalState {
  isVisible: boolean
  selectedFood?: FoodItem
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
      <List className="container">
        {menu.map((foodItem) => (
          <Card key={foodItem.id}>
            <FoodImg
              className="img-container"
              src={foodItem.foto}
              alt={foodItem.nome}
            />
            <FoodTitle>{foodItem.nome}</FoodTitle>
            <FoodDescription>
              {getDescricao(foodItem.descricao)}
            </FoodDescription>
            <Button
              onClick={() => {
                openModal(foodItem)
              }}
            >
              Adicionar ao carrinho
            </Button>
          </Card>
        ))}
      </List>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        {modal.selectedFood && (
          <ModalContent key={modal.selectedFood.id} className="container">
            <CloseB
              src={close}
              alt="Click to close"
              onClick={() => {
                closeModal()
              }}
            />
            <ModalImg
              className="modal-img-container"
              src={modal.selectedFood.foto}
              alt={modal.selectedFood.nome}
            />
            <div>
              <h3>{modal.selectedFood.nome}</h3>
              <p>{modal.selectedFood.descricao}</p>
              <p>Serve: de {modal.selectedFood.porcao}</p>
              <Button onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(modal.selectedFood.preco)}
              </Button>
            </div>
          </ModalContent>
        )}

        <Overlay
          onClick={() => {
            closeModal()
          }}
        ></Overlay>
      </Modal>
    </>
  )
}

export default FoodList
