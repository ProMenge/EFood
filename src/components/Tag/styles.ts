import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.lightRed};
  color: ${colors.lightYellow};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: 6px;
  display: inline-block;
`
