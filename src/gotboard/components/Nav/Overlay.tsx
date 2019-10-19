import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { scrollTo } from 'lib/scroll';
import rem from 'styles/rem';
import * as animations from 'styles/animations'

// utils
import { MENU_ITEMS } from 'lib/const'


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
    z-index: 1000;
    ${props =>
      props.isMobileMenuToggle
        ? css`
          opacity: .9;
          visibility: visible;
          height: 100vh;
    
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
  const { isMobileMenuToggle, onMobileMenuToggle } = props;

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
    <Overlay isMobileMenuToggle={isMobileMenuToggle}>
        <nav>
            <ul>
                {MobileNavItems()}
            </ul>
        </nav>
    </Overlay>
  );
};


export default MobileNavbar;