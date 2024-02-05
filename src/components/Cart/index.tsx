import { useDispatch, useSelector } from 'react-redux'
import trash from '../../assets/images/trash.svg'
import { RootReducer } from '../../store'
import { Button } from '../FoodList/styles'
import {
  Overlay,
  CartContainer,
  Sidebar,
  TotalPrice,
  CartItem,
  Delete,
  ItemImg,
  ItemName,
  ItemPrice
} from './styles'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../FoodList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />

      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <ItemImg
                className="img-container"
                src={item.foto}
                alt={item.nome}
              />
              <div>
                <ItemName>{item.nome}</ItemName>
                <ItemPrice>{formataPreco(item.preco)}</ItemPrice>
              </div>
              <Delete onClick={() => removeItem(item.id)} src={trash} alt="" />
            </CartItem>
          ))}
        </ul>
        <TotalPrice>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </TotalPrice>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
