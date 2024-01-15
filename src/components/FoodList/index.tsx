import FoodCard from '../FoodCard'
import { Button } from '../FoodCard/styles'
import { List, Modal, Overlay, ModalContent, CloseB, ModalImg } from './styles'

import close from '../../assets/images/close.png'
import { Restaurant } from '../../pages/Home'

type Props = {
  restaurants: Restaurant[]
}

const FoodList = ({ restaurants }: Props) => {
  // const formataPreco = (preco = 0) => {
  //   return new Intl.NumberFormat('pt-BR', {
  //     style: 'currency',
  //     currency: 'BRL'
  //   }).format(preco)
  // }

  return (
    <>
      <List className="container">
        {restaurants.map((restaurant) => (
          <FoodCard
            key={restaurant.cardapio.nome}
            foto={restaurant.cardapio.foto}
            nome={restaurant.cardapio.nome}
            descricao={restaurant.cardapio.descricao}
          />
        ))}
      </List>
      <Modal>
        <ModalContent className="container">
          <CloseB src={close} alt="Click to close" />
          <ModalImg src="//placehold.it/280x280" alt="pizza marguerita" />
          <div>
            <h3></h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <Button>Adicionar ao carrinho - 63,3 </Button>
          </div>
        </ModalContent>
        <Overlay></Overlay>
      </Modal>
    </>
  )
}

export default FoodList
