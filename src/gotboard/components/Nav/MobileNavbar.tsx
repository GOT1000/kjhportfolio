import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { MENU_ITEMS } from 'lib/const';
import { scrollTo } from 'lib/scroll';
import rem from 'styles/rem';
import { NAV_HEIGHT } from 'styles/sizes';
import { BORDER_GREY, WHITE } from 'styles/colors';
import { mobile } from 'styles/media';
import * as sizes from 'styles/sizes';
import * as colors from 'styles/colors';
import * as animations from 'styles/animations';
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
const Overlay = styled.div`
    position: fixed;
    background-color: black;
    height: 0%;
    opacity: 0;
    visibility: hidden;    
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity .25s, visibility .25s, height .35s;
    overflow: hidden;
    ${props =>
      props.isMobileMenuToggle
        ? css`
          opacity: .9;
          visibility: visible;
          height: 100%;
    
          li {
            animation: ${animations.fadeInRight} .5s ease forwards;
            animation-delay: .35s;
    
            &:nth-of-type(2) {
              animation-delay: .4s;
            }
            &:nth-of-type(3) {
              animation-delay: .45s;
            }
            &:nth-of-type(4) {
              animation-delay: .50s;
            }
          }
          `
        : css`      
        `} 
    nav {
      position: relative;
      height: 70%;
      top: 50%;
      transform: translateY(-50%);
      font-size: ${rem(45)};
      font-weight: 400;
      text-align: center;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      display: inline-block;
      position: relative;
      height: 100%;

      li {
        display: block;
        height: 25%;
        height: calc(100% / 4);
        min-height: ${rem(50)};
        position: relative;
        opacity: 0;

        a {
          display: inline-block;
          position: relative;
          color: white;
          text-decoration: none;
          overflow: hidden;
          cursor: pointer;


          &:hover:after,
           &:focus:after,
           &:active:after {
             width: 100%;
           }
          
          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0%;
            transform: translateX(-50%);
            height: 3px;
            background: gray;
            transition: .35s;
          }
      }
    }
`

const MobileNavbar = (props) => {
  const { isMobileMenuToggle, onMobileMenuToggle, transparent } = props;

  const MobileNavItems = () => {
    return MENU_ITEMS.map((item, i) => {
      return (
        <li key={i} onClick={() => {
          onMobileMenuToggle();
          scrollTo(item.href);
        }}>
          <a>{item.title}</a>
        </li>
      )
    })
  }

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
      <Overlay isMobileMenuToggle={isMobileMenuToggle}>
        <nav>
          <ul>
            {MobileNavItems()}
          </ul>
        </nav>
      </Overlay>
    </Wrapper>
  );
};


export default MobileNavbar;