import styled from 'styled-components'
import { colors } from '../../styles'

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
  color: ${colors.darkRed};
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
