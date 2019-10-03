import { css } from 'styled-components';
import rem from 'styles/rem'


export const HEADER_HEIGHT = '60px'
export const FOOTER_HEIGHT = '180px'
export const NAV_HEIGHT = '65px'
export const NAV_HEIGHT_NUM = 65
export const TOGGLE_BTN_HEIGHT = '25px'
export const TOGGLE_BTN_HEIGHT_NUM = 25
export const TOGGLE_BTN_WIDTH = '30px'
export const PLAYER_HEIGHT = FOOTER_HEIGHT
export const TAB_BAR_HEIGHT = FOOTER_HEIGHT
export const BREAK_POINT_DESKTOP = '1024px';
export const BREAK_POINT_TABLET = '768px';
export const BREAK_POINT_MOBILE = '360px';

export const HEADER_MIN_WIDTH = '1350px'

export const INPUT_FONT = '16px'
export const INPUT_PADDING = '130px 160px'

// 1080 + 200
export const GRID_WIDTH = '1280px'

export const SIDEBAR_NAV_WIDTH = '105px'
export const SIDEBAR_CONTENT_WIDTH = '605px'

export const setImgBackground = inner => css`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${inner}
`;