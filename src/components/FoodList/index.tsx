import FoodCard from '../FoodCard'
import { Button } from '../FoodCard/styles'
import { List, Modal, Overlay, ModalContent, CloseB, ModalImg } from './styles'

import close from '../../assets/images/close.png'
import { useState } from 'react'

type Props = {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

export interface ModalState {
  isVisible: boolean
}

const FoodList = ({ id, foto, nome, descricao, preco, porcao }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <List className="container">
        <FoodCard
          onClickCard={() => {
            setModal({
              isVisible: true
            })
          }}
          key={id}
          foto={foto}
          nome={nome}
          descricao={descricao}
        />
      </List>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <CloseB
            src={close}
            alt="Click to close"
            onClick={() => {
              closeModal()
            }}
          />
          <ModalImg src={foto} alt={nome} />
          <div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>Serve: de {porcao}</p>
            <Button>Adicionar ao carrinho - {formataPreco(preco)}</Button>
          </div>
        </ModalContent>
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
