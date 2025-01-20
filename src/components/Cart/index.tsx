import { useState } from 'react'
import {
  CardNumberDiv,
  CartButton,
  CartContainer,
  CartForm,
  CartInfos,
  CartInput,
  CartItemsContainer
} from './styles'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'

import CartItem from '../CartItem'

type CartProps = {
  onClose: () => void
}

const Cart = ({ onClose }: CartProps) => {
  const { items } = useSelector((state: RootState) => state.cartReducer)
  const [currentStep, setCurrentStep] = useState<
    'items' | 'address' | 'payment' | 'confirmation'
  >('items') // Estado para etapas
  const totalPrice = items.reduce((sum, product) => sum + product.price, 0)

  // Funções para mudar de etapa
  const goToAddress = () => setCurrentStep('address')
  const goToPayment = () => setCurrentStep('payment')
  const goToConfirmation = () => setCurrentStep('confirmation')
  const goToItems = () => setCurrentStep('items')

  return (
    <CartContainer>
      {currentStep === 'items' && (
        <>
          {/* Tela de itens do carrinho */}
          <CartItemsContainer>
            {items.map((product) => (
              <CartItem
                image={product.image}
                name={product.title}
                price={product.price}
                key={product.id}
                id={product.id}
              />
            ))}
          </CartItemsContainer>
          <CartInfos>
            <p>Valor Total: </p>
            <p>R$: {totalPrice.toFixed(2)}</p>
          </CartInfos>
          <CartButton onClick={goToAddress}>Finalizar Compra</CartButton>
          <CartButton onClick={onClose}>Fechar</CartButton>
        </>
      )}

      {currentStep === 'address' && (
        <>
          {/* Formulário de endereço */}
          <h3>Entrega</h3>
          <CartForm>
            <label>
              Quem irá receber:
              <CartInput type="text" name="name" required />
            </label>
            <label>
              Endereço:
              <CartInput type="text" name="address" required />
            </label>
            <label>
              Cidade:
              <CartInput type="text" name="city" required />
            </label>
            <div>
              <label>
                CEP:
                <CartInput type="number" name="cep" required />
              </label>{' '}
              <label>
                Número:
                <CartInput type="number" name="number" required />
              </label>
            </div>
            <label>
              Complemento (opcional):
              <CartInput type="text" name="complement" />
            </label>
            <CartButton type="button" onClick={goToPayment}>
              Continuar para Pagamento
            </CartButton>
          </CartForm>
          <CartButton onClick={goToItems}>Voltar para o carrinho</CartButton>
        </>
      )}

      {currentStep === 'payment' && (
        <>
          {/* Formulário de método de pagamento */}
          <h3>Pagamento - Valor a pagar R$: {totalPrice.toFixed(2)} </h3>
          <CartForm>
            <label>
              Nome no cartão:
              <CartInput type="text" name="cardNumber" required />
            </label>
            <CardNumberDiv>
              <label>
                Número do Cartão:
                <CartInput type="text" name="cardName" required />
              </label>
              <label>
                CVV:
                <CartInput type="password" name="cardCVV" required />
              </label>
            </CardNumberDiv>
            <div>
              <label>
                Mês de vencimento:
                <CartInput type="number" name="cardMonthExpiry" required />
              </label>
              <label>
                Ano de vencimento:
                <CartInput type="number" name="cardYearExpiry" required />
              </label>
            </div>
            <CartButton type="button" onClick={goToConfirmation}>
              Confirmar Pagamento
            </CartButton>
          </CartForm>
          <CartButton onClick={goToAddress}>
            Voltar para a edição de endereço{' '}
          </CartButton>
        </>
      )}

      {currentStep === 'confirmation' && (
        <>
          {/* Mensagem de confirmação */}
          <h3>Compra Confirmada!</h3>
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
          <CartButton onClick={onClose}>Concluir</CartButton>
        </>
      )}
    </CartContainer>
  )
}

export default Cart
