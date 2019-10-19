import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { scrollTo } from 'lib/scroll';
import rem from 'styles/rem';
import { NAV_HEIGHT } from 'styles/sizes';
import { BORDER_GREY, WHITE } from 'styles/colors';
import { mobile } from 'styles/media';
import * as sizes from 'styles/sizes';
import * as colors from 'styles/colors';
import NavBtn from './NavBtn';
import Logo from './Logo';


const Wrapper = styled.div`
  display: none;
  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(NAV_HEIGHT)};
  `)};
`;



const MenuBtn = styled.div`
    display: flex;
    position: relative;
    margin: ${rem((sizes.NAV_HEIGHT_NUM - sizes.TOGGLE_BTN_HEIGHT_NUM))} 0;
    height: ${rem(sizes.TOGGLE_BTN_HEIGHT)};
    width: ${rem(sizes.TOGGLE_BTN_WIDTH)};
    cursor: pointer;
    z-index: 3;
    transition: opacity .25s ease;

    &:hover {
        opacity: .7;
    }

    ${props => 
      props.isMobileMenuToggle ?
      css`
        .top {
          transform: translateY(${rem(9)}) translateX(0) rotate(45deg);
          background: ${colors.WHITE};
        }
        .middle {
            opacity: 0;
            background: ${colors.WHITE};
        }
        .bottom {
            transform: translateY(${rem(-9)}) translateX(0) rotate(-45deg);
            background: ${colors.WHITE};
        }
      ` : css``
    }

    span {
        width: 100%;
        height: 2px;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .35s ease;
        cursor: pointer;

        &:nth-of-type(2) {
            top: ${rem(9)};
        }
        &:nth-of-type(3) {
            top: ${rem(18)}
        }

        ${props => props.transparent ?
          css`
            position: absolute;
            background: ${colors.NAV_ITEM_COLOR};
          ` : 
          css`
            background: ${colors.NAV_ITEM_COLOR2};
          `
        }
    }
`


const MobileNavbar = (props) => {
  const { isMobileMenuToggle, onMobileMenuToggle, transparent } = props;


  return (
    <Wrapper>
      <div style={{marginLeft: rem(10)}}>
        <Logo/>
      </div>
      <div>
        <NavBtn onClick={onMobileMenuToggle}>
            <MenuBtn isMobileMenuToggle={isMobileMenuToggle} transparent={transparent}>
                <span className={'top'}/>
                <span className={'middle'}/>
                <span className={'bottom'}/>
            </MenuBtn>
        </NavBtn>
      </div>
    </Wrapper>
  );
};


export default MobileNavbar;