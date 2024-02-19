import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../FoodList'

import { Button } from '../FoodList/styles'
import * as S from './styles'
import trash from '../../assets/images/trash.svg'
import { useOrderMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [currentScreen, setCurrentScreen] = useState('cart')
  const dispatch = useDispatch()
  const [order, { isLoading, isError, data }] = useOrderMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      adressNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelomenos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter pelomenos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelomenos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'CEP inválido')
        .required('O campo é obrigatório'),
      adressNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelomenos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Número inválido')
        .max(19, 'Número inválido')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Número inválido')
        .required('O campo é obrigatório'),
      month: Yup.string()
        .min(2, 'Número inválido')
        .max(2, 'Número inválido')
        .required('O campo é obrigatório'),
      year: Yup.string()
        .min(4, 'Número inválido')
        .max(4, 'Número inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      order({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.adressNumber),
            complement: values.complement
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.month),
                year: Number(values.year)
              }
            }
          }
        }
      })
    }
  })

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

  const showCart = () => {
    setCurrentScreen('cart')
  }

  const showDelivery = () => {
    setCurrentScreen('delivery')
  }

  const showPayment = () => {
    setCurrentScreen('payment')
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const touched = fieldName in form.touched
    const invalid = fieldName in form.errors

    if (touched && invalid) return message
    return ''
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />

      <S.Sidebar>
        {/* cart */}
        {currentScreen === 'cart' && (
          <div>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <S.ItemImg
                    className="img-container"
                    src={item.foto}
                    alt={item.nome}
                  />
                  <div>
                    <S.ItemName>{item.nome}</S.ItemName>
                    <S.ItemPrice>{formataPreco(item.preco)}</S.ItemPrice>
                  </div>
                  <S.Delete
                    onClick={() => removeItem(item.id)}
                    src={trash}
                    alt=""
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.TotalPrice>
              <p>Valor total</p>
              <p>{formataPreco(getTotalPrice())}</p>
            </S.TotalPrice>
            <Button onClick={showDelivery}>Continuar com a entrega</Button>
          </div>
        )}

        <form onSubmit={form.handleSubmit}>
          {/* delivery form */}
          {currentScreen === 'delivery' && (
            <div>
              <S.FormTitle>Entrega</S.FormTitle>

              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  id="receiver"
                  type="text"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('receiver', form.errors.receiver)}
                </small>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="description">Endereço</label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('description', form.errors.description)}
                </small>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('city', form.errors.city)}</small>
              </S.InputGroup>
              <S.RowGroup>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('zipCode', form.errors.zipCode)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="adressNumber">Número</label>
                  <input
                    id="adressNumber"
                    type="number"
                    name="adressNumber"
                    value={form.values.adressNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('adressNumber', form.errors.adressNumber)}
                  </small>
                </S.InputGroup>
              </S.RowGroup>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('complement', form.errors.complement)}
                </small>
              </S.InputGroup>

              <Button onClick={showPayment} marginTop="24px">
                Continuar com o pagamento
              </Button>
              <Button onClick={showCart} marginTop="8px">
                Voltar para o carrinho
              </Button>
            </div>
          )}

          {/* payment form */}
          {currentScreen === 'payment' && (
            <div>
              <S.FormTitle>
                Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
              </S.FormTitle>

              <S.InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  id="cardName"
                  type="text"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardName', form.errors.cardName)}
                </small>
              </S.InputGroup>
              <S.RowGroup>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardNumber', form.errors.cardNumber)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    id="cardCode"
                    type="text"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardCode', form.errors.cardCode)}
                  </small>
                </S.InputGroup>
              </S.RowGroup>
              <S.RowGroup>
                <S.InputGroup>
                  <label htmlFor="month">Mês de vencimento</label>
                  <input
                    id="month"
                    type="text"
                    name="month"
                    value={form.values.month}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('month', form.errors.month)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="year">Ano de vencimento</label>
                  <input
                    id="year"
                    type="text"
                    name="year"
                    value={form.values.year}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('year', form.errors.year)}</small>
                </S.InputGroup>
              </S.RowGroup>

              <Button marginTop="24px">Finalizar pagamento</Button>
              <Button onClick={showDelivery} marginTop="8px">
                Voltar para a edição de endereço
              </Button>
            </div>
          )}
        </form>

        {/* confirmation text */}
        <div className="display-none">
          <S.FormTitle>Pedido realizado - ID</S.FormTitle>
          <S.CartP>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </S.CartP>
          <S.CartP>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras
          </S.CartP>
          <S.CartP>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </S.CartP>
          <S.CartP>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </S.CartP>
          <Button marginTop="24px">Concluir</Button>
        </div>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
