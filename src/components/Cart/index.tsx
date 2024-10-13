import {
  Row,
  Card,
  Action,
  Overlay,
  Sidebar,
  CartItem,
  CardTotal,
  InputGroup,
  CartContainer
} from './styles'
import { Button } from '../Food/styles'

import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../../utils/formatPrice'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const Cart = () => {
  const [isPaymentStep, setIsPaymentStep] = useState(false)
  const [showCartStepForm, setShowCartStepForm] = useState('cart')
  const [purchase, { isSuccess, data, reset }] = usePurchaseMutation()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    setShowCartStepForm('cart')
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const clearCart = () => {
    dispatch(clear())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, curr) => {
      return (acc += curr.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      dueMonth: '',
      dueYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O nome precisa ter pelo menos 9 caracteres')
        .max(9, 'O nome precisa ter pelo menos 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      cardOwner: Yup.string().when((values, schema) =>
        isPaymentStep
          ? schema.required('Nome do titular é obrigatório')
          : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        isPaymentStep
          ? schema.required('Número do cartão é obrigatório')
          : schema
      ),
      cardCode: Yup.number().when((values, schema) =>
        isPaymentStep
          ? schema.min(3, 'Minimo 3 caracteres').required('CVV é obrigatório')
          : schema
      ),
      dueMonth: Yup.string().when((values, schema) =>
        isPaymentStep ? schema.required('Mês é obrigatório') : schema
      ),
      dueYear: Yup.string().when((values, schema) =>
        isPaymentStep ? schema.required('Ano é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          address: {
            city: values.city,
            number: Number(values.number),
            zipCode: values.cep,
            complement: values.complement,
            description: values.address
          },
          receiver: values.receiver
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: 1,
              year: 2024
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })

  const validatePayment = () => {
    if (form.isValid) {
      setShowCartStepForm('payment')
      setIsPaymentStep(true)
    }
  }

  const submitForm = () => {
    form.handleSubmit()
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <CartContainer className={isOpen ? 'visible' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {isSuccess ? (
          <>
            <Card>
              <h3>Pedido realizado - {data.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </Card>
            <Action>
              <Button
                type="button"
                onClick={() => {
                  reset()
                  clearCart()
                  form.resetForm()
                  setIsPaymentStep(false)
                  navigate('/')
                  closeCart()
                }}
              >
                Concluir
              </Button>
            </Action>
          </>
        ) : (
          <>
            {showCartStepForm === 'cart' && (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.foto} alt="" />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>{formatPrice(item.preco)}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} />
                    </CartItem>
                  ))}
                </ul>
                <CardTotal>
                  Valor total: <span>{formatPrice(getTotalPrice())}</span>
                </CardTotal>
                <Button onClick={() => setShowCartStepForm('delivery')}>
                  Continuar com a entrega
                </Button>
              </>
            )}
            <form onSubmit={form.handleSubmit}>
              {showCartStepForm === 'delivery' && (
                <>
                  <Card>
                    <h3>Entrega</h3>
                    <Row>
                      <InputGroup>
                        <label htmlFor="receiver">Quem irá receber</label>
                        <input
                          type="text"
                          id="receiver"
                          name="receiver"
                          onBlur={form.handleBlur}
                          value={form.values.receiver}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage('receiver', form.errors.receiver)}
                        </small>
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="address">Endereço</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          onBlur={form.handleBlur}
                          value={form.values.address}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage('address', form.errors.address)}
                        </small>
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="city">Cidade</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          onBlur={form.handleBlur}
                          value={form.values.city}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage('city', form.errors.city)}
                        </small>
                      </InputGroup>
                      <InputGroup size="50">
                        <label htmlFor="cep">CEP</label>
                        <input
                          type="text"
                          id="cep"
                          name="cep"
                          onBlur={form.handleBlur}
                          value={form.values.cep}
                          onChange={form.handleChange}
                        />
                        <small>{getErrorMessage('cep', form.errors.cep)}</small>
                      </InputGroup>
                      <InputGroup size="50">
                        <label htmlFor="number">Número</label>
                        <input
                          type="text"
                          id="number"
                          name="number"
                          onBlur={form.handleBlur}
                          value={form.values.number}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage('number', form.errors.number)}
                        </small>
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="complement">
                          Complemento (opcional)
                        </label>
                        <input
                          type="text"
                          id="complement"
                          name="complement"
                          onBlur={form.handleBlur}
                          value={form.values.complement}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage(
                            'complement',
                            form.errors.complement
                          )}
                        </small>
                      </InputGroup>
                    </Row>
                  </Card>
                  <Action>
                    <Button
                      type="button"
                      disabled={!form.dirty}
                      onClick={() => validatePayment()}
                    >
                      Continuar com o pagamento
                    </Button>
                    <Button onClick={() => setShowCartStepForm('cart')}>
                      Voltar para o carrinho
                    </Button>
                  </Action>
                </>
              )}

              {showCartStepForm === 'payment' && (
                <>
                  <Card>
                    <h3>
                      Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
                    </h3>
                    <Row>
                      <InputGroup>
                        <label htmlFor="cardOwner">Nome no cartão</label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          onBlur={form.handleBlur}
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage('cardOwner', form.errors.cardOwner)}
                        </small>
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          onBlur={form.handleBlur}
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
                      </InputGroup>
                      <InputGroup size="30">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="number"
                          id="cardCode"
                          maxLength={3}
                          name="cardCode"
                          onBlur={form.handleBlur}
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage('cardCode', form.errors.cardCode)}
                        </small>
                      </InputGroup>
                      <InputGroup size="50">
                        <label htmlFor="dueMonth">Mês de vencimento</label>
                        <input
                          type="text"
                          id="dueMonth"
                          name="dueMonth"
                          onBlur={form.handleBlur}
                          value={form.values.dueMonth}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage('dueMonth', form.errors.dueMonth)}
                        </small>
                      </InputGroup>
                      <InputGroup size="50">
                        <label htmlFor="dueYear">Ano de vencimento</label>
                        <input
                          type="text"
                          id="dueYear"
                          name="dueYear"
                          onBlur={form.handleBlur}
                          value={form.values.dueYear}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getErrorMessage('dueYear', form.errors.dueYear)}
                        </small>
                      </InputGroup>
                    </Row>
                  </Card>
                  <Action>
                    <Button type="submit" onClick={() => submitForm()}>
                      Finalizar pagamento
                    </Button>
                    <Button
                      onClick={() => {
                        setShowCartStepForm('delivery')
                        setIsPaymentStep(false)
                      }}
                    >
                      Voltar para edição de endereço
                    </Button>
                  </Action>
                </>
              )}
            </form>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
