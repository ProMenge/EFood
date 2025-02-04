import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as S from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { usePurchaseMutation } from '../../services/api'
import { clear } from '../../redux/cart/slice'

import CartItem from '../CartItem'

type CartProps = {
  onClose: () => void
}

const Cart = ({ onClose }: CartProps) => {
  const { items } = useSelector((state: RootState) => state.cartReducer)
  const [currentStep, setCurrentStep] = useState<
    'items' | 'address' | 'payment' | 'confirmation'
  >('items') // Estado para etapas
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const totalPrice = items.reduce((sum, product) => sum + product.price, 0)

  // Funções para mudar de etapa
  const goToAddress = () => setCurrentStep('address')
  const goToPayment = () => setCurrentStep('payment')
  const goToConfirmation = () => setCurrentStep('confirmation')
  const goToItems = () => setCurrentStep('items')

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const addressValidationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'O Nome deve ter no mínimo 3 caracteres')
      .required('O campo é obrigatório'),
    address: Yup.string()
      .min(5, 'O endereço deve ter no mínimo 5 caracteres')
      .required('O campo é obrigatório'),
    city: Yup.string()
      .min(4, 'A cidade deve ter no minimo 4 caracteres')
      .required('O campo é obrigatório'),
    cep: Yup.string()
      .min(8, 'O CEP deve conter 8 caracteres')
      .required('O campo é obrigatório'),
    addressNumber: Yup.string()
      .min(1, 'O número de endereço deve conter no mínimo 1 caractere')
      .required('O campo é obrigatório'),
    complement: Yup.string()
      .min(5, 'O complemento deve ter no mínimo 5 caracteres')
      .notRequired()
  })

  const paymentValidationSchema = Yup.object({
    cardName: Yup.string()
      .min(3, 'O Nome deve ter no mínimo 3 caracteres')
      .required('O campo é obrigatório'),
    cardNumber: Yup.string()
      .min(12, 'O número deve conter no mínimo 12 caracteres')
      .required('O campo é obrigatório'),
    CVV: Yup.string()
      .min(3, 'O CVV deve ter 3 caracteres')
      .required('Campo obrigatório'),
    cardMonthExpiry: Yup.string()
      .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
      .required('Campo obrigatório'),

    cardYearExpiry: Yup.string()
      .length(4, 'O campo deve ter 4 caracteres')
      .required('Campo obrigatório')
      .test(
        'valid-year',
        'O ano deve ser maior ou igual a ' + new Date().getFullYear(),
        (value) => {
          if (!value) return false // Garante que o valor existe
          const currentYear = new Date().getFullYear()
          return Number(value) >= currentYear // Verifica se o ano é válido
        }
      )
  })

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      CVV: '',
      cardMonthExpiry: '',
      cardYearExpiry: ''
    },
    validationSchema:
      currentStep === 'address'
        ? addressValidationSchema
        : currentStep === 'payment'
          ? paymentValidationSchema
          : null, // Sem validação na etapa de itens ou confirmação
    validateOnMount: true, // Garante validação ao montar o formulário
    onSubmit: (values) => {
      if (currentStep === 'address') {
        goToPayment() // Avança para pagamento
      } else if (currentStep === 'payment') {
        purchase({
          delivery: {
            receiver: values.name,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.cep,
              number: values.addressNumber,
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.CVV),
              expires: {
                month: Number(values.cardMonthExpiry),
                year: Number(values.cardYearExpiry)
              }
            }
          },
          products: items.map((item) => ({
            id: item.id,
            price: item.price as number
          }))
        }).then(() => {
          goToConfirmation() // Só avança para a confirmação se a compra for bem-sucedida
        })
      }
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.CartContainer>
      {currentStep === 'items' && (
        <>
          {/* Tela de itens do carrinho */}
          <S.CartItemsContainer>
            {items.map((product) => (
              <CartItem
                image={product.image}
                name={product.title}
                price={product.price}
                key={product.id}
                id={product.id}
              />
            ))}
          </S.CartItemsContainer>

          {/* Exibir mensagem se o carrinho estiver vazio */}
          {items.length === 0 ? (
            <p className="empty-text">
              O carrinho está vazio. Insira um produto para prosseguir com a
              compra.
            </p>
          ) : (
            <>
              <S.CartInfos>
                <p>Valor Total: </p>
                <p>R$: {totalPrice.toFixed(2)}</p>
              </S.CartInfos>

              <S.CartButton onClick={goToAddress}>
                Finalizar Compra
              </S.CartButton>
            </>
          )}

          <S.CartButton onClick={onClose}>Fechar</S.CartButton>
        </>
      )}

      {currentStep === 'address' && (
        <>
          {/* Formulário de endereço */}
          <h3>Entrega</h3>
          <S.CartForm>
            <label htmlFor="name">
              Quem irá receber:
              <S.CartInput
                type="text"
                id="name"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('name') ? 'error' : ' '}
              />
            </label>
            <label htmlFor="address">
              Endereço:
              <S.CartInput
                type="text"
                name="address"
                value={form.values.address}
                id="address"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('address') ? 'error' : ' '}
              />
            </label>
            <label htmlFor="city">
              Cidade:
              <S.CartInput
                type="text"
                name="city"
                id="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ' '}
              />
            </label>
            <div>
              <label htmlFor="cep">
                CEP:
                <S.CartInputMask
                  type="text"
                  id="cep"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cep') ? 'error' : ' '}
                  mask="99999-999"
                />
              </label>{' '}
              <label htmlFor="addressNumber">
                Número:
                <S.CartInput
                  type="text"
                  name="addressNumber"
                  id="addressNumber"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('addressNumber') ? 'error' : ' '
                  }
                />
              </label>
            </div>
            <label htmlFor="complement">
              Complemento (opcional):
              <S.CartInput type="text" name="complement" id="complement" />
            </label>
            <S.CartButton
              type="button"
              onClick={() => {
                form.validateForm().then((errors) => {
                  if (Object.keys(errors).length === 0) {
                    goToPayment() // Avança para a próxima etapa apenas se não houver erros
                  } else {
                    form.setTouched({
                      name: true,
                      address: true,
                      city: true,
                      cep: true,
                      addressNumber: true,
                      complement: true
                    })
                  }
                })
              }}
            >
              Continuar para Pagamento
            </S.CartButton>
          </S.CartForm>
          <S.CartButton onClick={goToItems}>
            Voltar para o carrinho
          </S.CartButton>
        </>
      )}

      {currentStep === 'payment' && (
        <>
          {/* Formulário de método de pagamento */}
          <h3>Pagamento - Valor a pagar R$: {totalPrice.toFixed(2)} </h3>
          <S.CartForm onSubmit={form.handleSubmit}>
            <label htmlFor="cardName">
              Nome no cartão:
              <S.CartInput
                type="text"
                name="cardName"
                id="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </label>

            <S.CardNumberDiv>
              <label htmlFor="cardNumber">
                Número do Cartão:
                <S.CartInputMask
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  mask="9999 9999 9999 9999"
                />
              </label>

              <label htmlFor="CVV">
                CVV:
                <S.CartInputMask
                  type="password"
                  name="CVV"
                  id="CVV"
                  value={form.values.CVV}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('CVV') ? 'error' : ''}
                  mask="999"
                />
              </label>
            </S.CardNumberDiv>

            <div>
              <label htmlFor="cardMonthExpiry">
                Mês de vencimento:
                <S.CartInputMask
                  type="text"
                  name="cardMonthExpiry"
                  id="cardMonthExpiry"
                  value={form.values.cardMonthExpiry}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('cardMonthExpiry') ? 'error' : ''
                  }
                  mask="99"
                />
              </label>

              <label htmlFor="cardYearExpiry">
                Ano de vencimento:
                <S.CartInputMask
                  type="text"
                  name="cardYearExpiry"
                  id="cardYearExpiry"
                  value={form.values.cardYearExpiry}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('cardYearExpiry') ? 'error' : ''
                  }
                  mask="9999"
                />
              </label>
            </div>

            {/* Botão de confirmar pagamento */}
            <S.CartButton
              type="button"
              disabled={isLoading}
              onClick={() => {
                form.validateForm().then((errors) => {
                  if (Object.keys(errors).length === 0) {
                    form.handleSubmit() // Dispara o submit
                  } else {
                    form.setTouched({
                      cardName: true,
                      cardNumber: true,
                      CVV: true,
                      cardMonthExpiry: true,
                      cardYearExpiry: true
                    })
                  }
                })
              }}
            >
              {isLoading ? 'Confirmando Pagamento...' : 'Confirmar Pagamento'}
            </S.CartButton>
          </S.CartForm>

          <S.CartButton onClick={goToAddress}>
            Voltar para a edição de endereço
          </S.CartButton>
        </>
      )}

      {/* Tela de confirmação apenas se data for true e isLoading for false */}
      {isSuccess && data && (
        <>
          <h3>Compra Confirmada! - ID - {data.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.CartButton onClick={onClose}>Concluir</S.CartButton>
        </>
      )}
    </S.CartContainer>
  )
}

export default Cart
