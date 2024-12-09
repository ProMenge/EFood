import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${colors.secondaryYellow};
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    max-width: 480px;
    text-align: center;
  }
`

export const EfoodLogo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`
export const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 32.5px;
  margin-bottom: 80px;
`
export const Logo = styled.img`
  width: 24px;
  height: 24px;
`
