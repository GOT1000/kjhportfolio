import React from 'react';
import styled from 'styled-components';
import { MENU_ITEMS } from 'lib/const';
import rem from 'styles/rem';
import { NAV_HEIGHT } from 'styles/sizes';
import LinkItem from './LinkItem';
import { scrollTo } from 'lib/scroll';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`;

const NavLink = styled.div`
  flex: 0 0 auto;
  display: inline-block;
  height: ${rem(NAV_HEIGHT)};
  line-height: ${rem(NAV_HEIGHT)};
  margin: 0 ${rem(12)};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: ${rem(0.4)};
  color: currentColor;
  text-decoration: none;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

const NavItems = () => {
  return MENU_ITEMS.map((item, i) => {
    return (
      <NavLink onClick={() => scrollTo(item.href)} key={i}>
        {item.title}
      </NavLink>
    )
  })
}

const NavLinks = () => (
  <Wrapper>
      {NavItems()}
  </Wrapper>
);

export default NavLinks;