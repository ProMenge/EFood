import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalContainer = styled.div`
  display: flex;
  padding: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightRed};
`
export const ModalImage = styled.div`
  width: 280px;
  height: 280px;
`

export const ModalInfos = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`
export const ModalButton = styled.button`
  background-color: ${colors.lightYellow};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  border: none;
  color: ${colors.lightRed};
  height: 24px;
`
