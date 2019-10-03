import React from 'react'
import styled, { css } from 'styled-components'
import rem from 'styles/rem';
import { mobile } from 'styles/media';
import LinkItem from './LinkItem';


/* const LogoLink = styled(LinkItem).attrs(() => ({
    unstyled: true,
    href: '/',
    'aria-label': 'styled components',
  }))`
    display: inline-block;
    vertical-align: center;
    padding: 0 ${rem(10)};
`;

 */

const LogoLink = styled.div`
  font-size: ${rem(28)};
  cursor: default;

  ${mobile(css`
    font-size: ${rem(20)};
  `)}
`

function Logo(props) {
  return (
    <LogoLink>
        JH KIM
    </LogoLink>
  )
}

export default Logo
