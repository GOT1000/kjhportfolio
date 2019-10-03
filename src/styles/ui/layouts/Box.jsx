import styled from 'styled-components'
import is from 'styled-is'

import * as colors from '../../colors'
import * as sizes from '../../sizes'

export default styled.div`
  padding: 40px;

  ${is('backGrey')`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: ${colors.CARTOOL_BACK_GREY};
    display: flex;
  `}
  ${is('login')`
    width: 410px;
    height: 320px;
    padding: 40px 55px;
  `}
  ${is('signup')`
    width: 277px;
    height: 300px;
    padding: 60px 30px;
  `}
  ${is('center')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
  ${is('modal')`
    padding: 60px 85px;

    .title {
      font-size: 26px;
      font-weight: 300;
      letter-spacing: -0.7px;
      text-align: center;
      color: #3c3c3d;
    }

    .sub-title {
      font-size: 16px;
      font-weight: 300;
      letter-spacing: -0.4px;
      text-align: center;
      color: #3c3c3d;
      margin: 0;
      padding-bottom: 21px;
      border-bottom: 1px solid #e2dfdf;
    }
  `}
`
