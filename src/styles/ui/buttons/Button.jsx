import styled from 'styled-components'
import * as colors from '../../colors'
import is from 'styled-is'

const Button = styled.button`
  width: 100%;
  border: none;
  height: 32px;
  background-color: ${({ backColor }) => backColor || colors.PRIMARY};
  border-radius: 25px;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${colors.WHITE};

  transition: background-color 0.3s;
  backface-visibility: hidden;

  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || colors.PRIMARY_LIGHT};
  }

  &:active {
    background-color: ${({ activeColor }) => activeColor || colors.PRIMARY_DARK};
  }

  &:disabled {
    background-color: ${colors.DISABLED_GREY};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  ${is('smaller')`
    height: 30px;
    min-width: 90px;
    border-radius: 15px;
    font-size: 10px;
  `}

  ${is('small')`
    min-width: 49px;
    height: 25px;
    font-size: 12px;
  `}

  ${is('big')`
    min-width: 300px;
    height: 50px;
    font-size: 14px;
  `}

  ${is('landingDark')`
    height: 54px;
    border-radius: 27px;
    background-color: #0a0b09;

    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color:  ${colors.CARTOOL};

    &:hover {
      color: ${colors.WHITE};
      background-color: ${colors.PRIMARY};
      border-color: ${colors.PRIMARY};
    }

    &:focus {
      border-color: ${colors.PRIMARY};
    }
  `}

  ${is('outlined')`
    color: ${colors.FONT};
    background-color: transparent;
    border: 1px solid ${colors.BUTTON_BORDER_GREY};
    font-weight: 400;

    &:hover {
      color: ${colors.WHITE};
      background-color: ${colors.PRIMARY};
      border-color: ${colors.PRIMARY};
    }

    &:focus {
      border-color: ${colors.PRIMARY};
    }
  `}

${is('PRIMARY')`
    background-color: ${colors.DEEP_BLUE};
    border-radius: 2px;

    &:hover {
      background-color: #164c70;
    }

    &:focus {
      background-color: #164c70;
    }
  `}

  ${is('sidebar')`
    width: 160px;
    min-height: 40px;
    font-size: 12px;
  `}


${is('PRIMARYOutlinedDarkGrey')`
    width: 91px;
    height: 24px;
    border-radius: 2px;
    color: ${colors.PRIMARY};
    background-color: transparent;
    border: 1px solid ${colors.PRIMARY};
    font-weight: 400;
    font-size: 12px;

    &:hover {
      color: ${colors.WHITE};
      background-color: ${colors.PRIMARY};
      border-color: ${colors.PRIMARY};
    }

    &:focus {
      border-color: ${colors.PRIMARY};
    }
  `}
`

export default Button
