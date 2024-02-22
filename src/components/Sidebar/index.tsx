import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { useOrderMutation } from '../../services/api'

import { Button } from '../../styles'
import * as S from './styles'
import trash from '../../assets/images/trash.svg'

const Sidebar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [currentScreen, setCurrentScreen] = useState('cart')
  const dispatch = useDispatch()
  const [order, { data, isSuccess, isLoading }] = useOrderMutation()
  const [isPayment, setIsPayment] = useState(false)

  const formDelivery = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      adressNumber: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'CEP inválido')
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('O campo é obrigatório'),
      adressNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: () => {
      showPayment()
    }
  })

  const formPayment = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Número inválido')
        .max(19, 'Número inválido')
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número inválido')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Número inválido')
        .matches(/^\d{3}$/, 'Número inválido')
        .required('O campo é obrigatório'),
      month: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Número inválido')
        .min(2, 'Número inválido')
        .max(2, 'Número inválido')
        .required('O campo é obrigatório'),
      year: Yup.string()
        .matches(/^\d{4}$/, 'Número inválido')
        .min(4, 'Número inválido')
        .max(4, 'Número inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
      order({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: formDelivery.values.receiver,
          address: {
            description: formDelivery.values.description,
            city: formDelivery.values.city,
            zipCode: formDelivery.values.zipCode,
            number: Number(formDelivery.values.adressNumber),
            complement: formDelivery.values.complement
          }
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
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.preco)
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
    setIsPayment(false)
  }

  const showPayment = () => {
    setCurrentScreen('payment')
    setIsPayment(true)
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const checkInputHasError = (fieldName: string) => {
    const formToCheck = isPayment ? formPayment : formDelivery
    const touched = fieldName in formToCheck.touched
    const invalid = fieldName in formToCheck.errors
    const hasError = touched && invalid

    return hasError
  }

  return (
    <S.SidebarContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />

      <S.Sidebar>
        {/* empty cart */}
        {!isSuccess && items.length <= 0 && (
          <>
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com o pedido.
            </p>
          </>
        )}

        {/* cart with items */}
        {!isSuccess && currentScreen === 'cart' && items.length > 0 && (
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
                    <S.ItemPrice>{parseToBrl(item.preco)}</S.ItemPrice>
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
              <p>{parseToBrl(getTotalPrice())}</p>
            </S.TotalPrice>
            <Button type="button" onClick={showDelivery}>
              Continuar com a entrega
            </Button>
          </div>
        )}
        {/* delivery form */}
        <form onSubmit={formDelivery.handleSubmit}>
          {!isSuccess && currentScreen === 'delivery' && (
            <div>
              <S.FormTitle>Entrega</S.FormTitle>

              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  id="receiver"
                  type="text"
                  name="receiver"
                  value={formDelivery.values.receiver}
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="description">Endereço</label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  value={formDelivery.values.description}
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  className={checkInputHasError('description') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formDelivery.values.city}
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.RowGroup>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={formDelivery.values.zipCode}
                    onChange={formDelivery.handleChange}
                    onBlur={formDelivery.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99999-999"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="adressNumber">Número</label>
                  <input
                    id="adressNumber"
                    type="number"
                    name="adressNumber"
                    value={formDelivery.values.adressNumber}
                    onChange={formDelivery.handleChange}
                    onBlur={formDelivery.handleBlur}
                    className={
                      checkInputHasError('adressNumber') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.RowGroup>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={formDelivery.values.complement}
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </S.InputGroup>

              <Button
                type="button"
                onClick={() => {
                  formDelivery.submitForm()
                }}
                marginTop="24px"
              >
                Continuar com o pagamento
              </Button>
              <Button type="button" onClick={showCart} marginTop="8px">
                Voltar para o carrinho
              </Button>
            </div>
          )}
        </form>

        {/* payment form */}
        <form onSubmit={formPayment.handleSubmit}>
          {!isSuccess && currentScreen === 'payment' && (
            <div>
              <S.FormTitle>
                Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}
              </S.FormTitle>

              <S.InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  id="cardName"
                  type="text"
                  name="cardName"
                  value={formPayment.values.cardName}
                  onChange={formPayment.handleChange}
                  onBlur={formPayment.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.RowGroup>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={formPayment.values.cardNumber}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    id="cardCode"
                    type="text"
                    name="cardCode"
                    value={formPayment.values.cardCode}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </S.InputGroup>
              </S.RowGroup>
              <S.RowGroup>
                <S.InputGroup>
                  <label htmlFor="month">Mês de vencimento</label>
                  <InputMask
                    id="month"
                    type="text"
                    name="month"
                    value={formPayment.values.month}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    className={checkInputHasError('month') ? 'error' : ''}
                    mask="99"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="year">Ano de vencimento</label>
                  <InputMask
                    id="year"
                    type="text"
                    name="year"
                    value={formPayment.values.year}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    className={checkInputHasError('year') ? 'error' : ''}
                    mask="9999"
                  />
                </S.InputGroup>
              </S.RowGroup>

              <Button
                type="submit"
                marginTop="24px"
                onClick={() => {
                  formPayment.submitForm()
                }}
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
              </Button>
              <Button type="button" onClick={showDelivery} marginTop="8px">
                Voltar para a edição de endereço
              </Button>
            </div>
          )}
        </form>

        {/* confirmation text */}
        {isSuccess && data && (
          <div>
            <S.FormTitle>Pedido realizado - {data.orderId}</S.FormTitle>
            <S.CartP>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </S.CartP>
            <S.CartP>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras
            </S.CartP>
            <S.CartP>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </S.CartP>
            <S.CartP>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.CartP>
            <Button
              type="button"
              marginTop="24px"
              onClick={() => window.location.reload()}
            >
              Concluir
            </Button>
          </div>
        )}
      </S.Sidebar>
    </S.SidebarContainer>
  )
}

export default Sidebar
