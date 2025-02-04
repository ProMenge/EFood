import styled from 'styled-components'
import { colors } from '../../styles'
import InputMask from 'react-input-mask'

export const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 360px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  background-color: ${colors.lightRed};
  color: ${colors.lightYellow};
  padding: 32px 8px;

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;

    margin-bottom: 24px;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`

export const CartItemsContainer = styled.div`
  margin-bottom: 32px;
`
export const CartInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  p {
    font-size: 14px;
    font-weight: 700;
  }
`

export const CartButton = styled.button`
  width: 100%;
  background: ${colors.lightYellow};
  color: ${colors.lightRed};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  margin-bottom: 16px;

  &:hover {
    background: ${colors.secondaryYellow};
  }
`

export const CartForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      width: 155px;
    }
  }
`

export const CartInput = styled.input`
  border: none;
  background-color: ${colors.lightYellow};
  height: 32px;
  margin-top: 8px;
  border: 2px solid white;

  &.error {
    border-color: red;
  }
`

export const CartInputMask = styled(InputMask)`
  border: none;
  background-color: ${colors.lightYellow};
  height: 32px;
  margin-top: 8px;
  border: 2px solid white;

  &.error {
    border-color: red;
  }
`

export const CardNumberDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  label:first-of-type {
    width: 228px !important;
  }

  label {
    width: 88px !important;
  }
`
