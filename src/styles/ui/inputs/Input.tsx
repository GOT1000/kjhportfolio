import styled from 'styled-components'
import * as colors from '../../colors'

interface Props {
  containerStyles?: {}
  errorStyles?: {}
  error?: string | null
  [key: string]: any
}

function Input({ containerStyles, errorStyles, ...props }: Props) {
  return (
    <div style={containerStyles}>
      <StyledInput {...props} />
      {props.error && <Error style={errorStyles}>{props.error}</Error>}
    </div>
  )
}

const StyledInput = styled.input`
  font-size: 14px;

  width: 100%;
  height: 40px;

  border: 1px solid ${({ error }) => (error ? colors.ERROR : colors.PRIMARY)};
  outline: none;
  padding-left: 10px;
  margin-bottom: 5px;

  &:focus {
    border: 1px solid ${colors.PRIMARY};
  }

  ::placeholder {
    color: ${colors.PRIMARY};
  }
`

export const Error = styled.div`
  font-size: 11px;
  font-weight: 300;
  color: ${colors.WHITE};
  padding-left: 10px;
`

export default Input
