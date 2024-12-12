import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightRed};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  width: 1024px;
`
export const ModalImage = styled.div`
  width: 280px;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 24px;
  flex-shrink: 0; /* Evita que o flexbox redimensione o ModalImage */
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
