import styled from 'styled-components'
import * as colors from 'styles/colors'

export default styled.div`
  font-size: ${props => {
    if (props.size_36) return '36px'
    if (props.size_28) return '28px'
    if (props.size_26) return '26px'
    if (props.size_24) return '24px'
    if (props.size_22) return '22px'
    if (props.size_20) return '20px'
    if (props.size_18) return '18px'
    if (props.size_16) return '16px'
    if (props.size_15) return '15px'
    if (props.size_14) return '14px'
    if (props.size_13) return '13px'
    if (props.size_12) return '12px'
    if (props.size_11) return '11px'
    if (props.size_10) return '10px'
    if (props.size_9) return '9px'
    if (props.size_8) return '8px'
  }};

  color: ${props => {
    if (props.c_ef8b38) return '#ef8b38'
    return colors.FONT
  }};
  font-weight: ${props => {
    if (props.light) return '300'
    if (props.bold) return 'bold'
    return 'normal'
  }};
  text-align: ${props => {
    if (props.center) return 'center'
    if (props.right) return 'right'
    return 'left'
  }};
`
