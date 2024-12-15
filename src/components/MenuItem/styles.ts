import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.lightRed};
  padding: 8px;
  position: relative;
  max-width: 320px;
`
export const ItemImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 167px;
  width: 304px;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 8px 0;

  h3 {
    font-size: 16px;
    font-weight: 900;
    line-height: 19px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const ItemButton = styled.button`
  width: 100%;
  background-color: ${colors.lightYellow};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  border: none;
  color: ${colors.lightRed};
  height: 24px;
  cursor: pointer;
`
