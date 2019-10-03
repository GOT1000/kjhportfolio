import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
// components
import NavLinks from './NavLinks';
import MobileNavbar from './MobileNavbar';
import Logo from './Logo';
// styles
import * as colors from 'styles/colors'
import * as sizes from 'styles/sizes'
import { mobile } from 'styles/media'
import rem from 'styles/rem'


const Wrapper = styled.div`
    position: fixed;
    left: 0;
    z-index: 3;

    font-size: ${rem(17)};
    font-family: 'NanumSquare';

    width: 100%;
    height: ${rem(sizes.NAV_HEIGHT)};

    transition: background 300ms ease-out;
    color: ${colors.NAV_ITEM_COLOR};
    padding: 0;

    ${props => props.transparent ? 
        css`
            background: transparent;
        ` : 
        css`
            background: #fff;
            color: ${colors.NAV_ITEM_COLOR2};
            border-bottom: ${rem(1)} solid ${colors.NAV_BORDER};
        `}
`
const StartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-size: ${rem(30)};
`
const EndWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const NormalNavbar = styled.div`
    display: flex;
    align-items: center;
    padding: 0 ${rem(15)};
    justify-content: space-between;
    ${StartWrapper}, ${EndWrapper} {
        ${mobile(css`
            display: none;
        `)}
    }
`

function Navbar(props) {
  const { isMobileMenuToggle, onMobileMenuToggle, transparent } = props
  return (
    <Wrapper transparent={transparent}>
        <NormalNavbar>
            <StartWrapper>
                <Logo/>
            </StartWrapper>
            <EndWrapper>
                <NavLinks/>
            </EndWrapper>
        </NormalNavbar>
        <MobileNavbar
            isMobileMenuToggle={isMobileMenuToggle}
            onMobileMenuToggle={onMobileMenuToggle}
            transparent={transparent}
        />
    </Wrapper>
    
  )
}

export default Navbar
