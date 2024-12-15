import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px;
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
  flex-shrink: 0;
`

export const ModalInfos = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;

  p {
    font-size: 14px;
    font-weight: 400;
  }
`
export const ModalButton = styled.button`
  background-color: ${colors.lightYellow};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  border: none;
  color: ${colors.lightRed};
  height: 24px;
  max-width: 218px;
  cursor: pointer;
`
export const ModalTitle = styled.h3`
  font-size: 18px;
  line-height: 21px;
  font-weight: 900px;
`

export const ModalDescription = styled.h3`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
`

export const ModalClose = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
`
