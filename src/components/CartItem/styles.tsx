import styled from 'styled-components'
import { colors } from '../../styles'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  background-color: ${colors.lightYellow};
  color: ${colors.lightRed};
  height: 100px;
  width: 344px;
  margin-bottom: 16px;
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 8px;
`

export const CartItemInfo = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  max-height: 150px;
  height: 100%;
  margin-right: 24px;
  h3 {
    font-size: 14px;
    margin-bottom: 16px;
  }

  p {
    margin: 4px 0;
    font-size: 12px;
  }
`

export const CartRemove = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  background: none;
  margin-top: 70px;
  margin-left: 90px;
`
