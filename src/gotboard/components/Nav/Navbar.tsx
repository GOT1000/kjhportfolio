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
import * as animations from 'styles/animations';
// utils



const Wrapper = styled.div`
    position: fixed;

    ${props => props.isAbsolute ? (
            css`
                position: absolute;
                color: ${colors.NAV_ITEM_COLOR};
                background-color: transparent;
            `
        ) : (
            props.isCollapsed ? 
            css`
                background: #fff;
                color: ${colors.NAV_ITEM_COLOR2};
                border-bottom: ${rem(1)} solid ${colors.NAV_BORDER};

                transform-origin: 0% 0%;
                transform: translate(0, 0%);
                
                transition: transform 0.2s cubic-bezier(0.77,0.2,0.05,1.0); 
            ` : 
            css`
                transform-origin: 0% 0%;
                transform: translate(0, -100%);
                color: ${colors.NAV_ITEM_COLOR};
                background-color: transparent;
            `
        )}
    top: 0;
    left: 0;
    z-index: 3;

    font-size: ${rem(17)};
    font-family: 'NanumSquare';

    width: 100%;
    height: ${rem(sizes.NAV_HEIGHT)};

    padding: 0;
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
  const { isAbsolute, isCollapsed, isMobileMenuToggle, onMobileMenuToggle } = props

  return (
    <Wrapper isAbsolute={isAbsolute} isCollapsed={isCollapsed}>
        <NormalNavbar>
            <StartWrapper>
                <Logo/>
            </StartWrapper>
            <EndWrapper>
                <NavLinks/> 
            </EndWrapper>
        </NormalNavbar>
        <MobileNavbar
            transparent={!isCollapsed}
            isMobileMenuToggle={isMobileMenuToggle}
            onMobileMenuToggle={onMobileMenuToggle}
        />
    </Wrapper>
  )
}

export default Navbar
