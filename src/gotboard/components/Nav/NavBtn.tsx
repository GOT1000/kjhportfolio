import styled from 'styled-components';

import rem from 'styles/rem';
import { NAV_HEIGHT } from 'styles/sizes';

const NavBtn = styled.div`
  background: ${p => (p.active ? 'rgba(0, 0, 0, 0.07)' : 'none')};
  cursor: pointer;
  flex: 0 0 auto;
  height: ${rem(NAV_HEIGHT)};
  padding: 0 ${rem(10)};
  text-align: center;
  vertical-align: middle;
  
  & + ${NavBtn} {
    padding-left: 0;
  }
`;

export default NavBtn;