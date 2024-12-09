import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid ${colors.lightRed};
  overflow: hidden;
  width: 472px;
  height: auto; /* Ajuste para o conteúdo total */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px; /* Altura fixa para a imagem */
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Details = styled.div`
  padding: 8px; /* Adicione padding apenas na área de informações */

  ${TagContainer} {
    margin-top: 16px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`
export const MainDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .stars {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;

    p {
      margin-right: 8px;
    }
  }
`
