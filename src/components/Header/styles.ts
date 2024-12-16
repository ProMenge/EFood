import styled from 'styled-components'
import { colors } from '../../styles'
import { StyledLink } from '../Restaurant/styles'

export const HeaderBar = styled.header`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 180px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o container */
  box-sizing: border-box;
  padding: 0 16px;

  .header-container {
    display: flex;
    justify-content: space-between; /* Alinha as extremidades */
    align-items: center;
    max-width: 1030px; /* Mesmo valor dos cards de pizza */
    width: 100%;
  }

  ${StyledLink} {
    font-weight: 900;
    line-height: 21px;
    font-size: 18px;
  }
`

export const CartButton = styled.button`
  font-weight: 900;
  line-height: 21px;
  font-size: 18px;
  background: none;
  border: none;
  color: ${colors.lightRed};
  cursor: pointer;
`

export const EfoodLogo = styled.img`
  width: 125px;
  height: 57.5px;
  position: relative;
  margin-left: 90px;
`
