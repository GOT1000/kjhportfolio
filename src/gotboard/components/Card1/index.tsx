import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { Controller, Scene } from 'react-scrollmagic'
import { Link as ScrollLink } from 'react-scroll'
// components
// styles
import { FlexItem, Flex } from 'styles/index'
import * as colors from 'styles/colors'
import * as sizes from 'styles/sizes'
import { mobile, mobile2 } from 'styles/media'
import rem from 'styles/rem'
import { gradientBG, moreBtnFloat } from 'styles/animations'

// libs
import { scrollTo } from 'lib/scroll'
import { getEntireHeight } from 'lib/const'


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const BgWrapper = styled.div`
    width: 100%;
    height: 110%;
    top: -10%;
    position: absolute;
`

const Bg = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    background: linear-gradient(270deg, ${colors.CARD1_BACKGROUND_1}, ${colors.CARD1_BACKGROUND_2}, ${colors.CARD1_BACKGROUND_3});
    background-size: 600% 600%;
    animation: ${gradientBG} 10s ease infinite;
    opacity: 0;
    transform: scale(0.95);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);

    ${BgWrapper}.visible & {
      opacity: 1;
      transform: scale(1);
      transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);
    }
`

const Title = styled.h1`
    font-size: ${rem(65)};
    max-width: ${rem(800)};
    width: 100%;
    margin: 0 auto;
    color: white;
    opacity: 0;
    transform: translateY(50px);

    ${mobile(css`
      font-size: ${rem(55)};
    `)}
    ${mobile2(css`
      font-size: ${rem(45)};
    `)}
  `

const SmallTitle = styled.h1`
    font-size: ${rem(36)};
    margin: ${rem(20)} auto 0;
    padding-left: ${rem(5)};
    opacity: 0;
    max-width: ${rem(800)};
    width: 100%;
    color: white;
    transform: translateY(50px);

    ${mobile(css`
      font-size: ${rem(28)};
    `)}
`

const Content = styled.div`
    width: ${rem(1024)};
    max-width: 100%;
    line-height: 1.2;
    margin: 0 auto;
    padding: 0 ${rem(20)};
    box-sizing: border-box;
    display: block;
    transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1) .3s ,transform 2s cubic-bezier(0.19, 1, 0.22, 1) .3s;

    font-family: NanumSquare;
    font-weight: 300;
    word-break: keep-all;

    text-align: left;

    &.visible ${Title} {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1) .3s,transform 2s cubic-bezier(0.19, 1, 0.22, 1) .3s;
    }

    &.visible ${SmallTitle} {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1) 0.6s,transform 2s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    }

    ${mobile(css`
      padding: 0 ${rem(10)};
    `)};
`

const TitleWrapper = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: space-between;
    flex-direction: column;
`

const MoreBtn = styled.div`
    width: ${rem(25)};
    cursor: pointer;
    margin: 0 auto;

    .btn {
      width: 100%;
      height: ${rem(25)};      
      color: white;
      border: solid #eee;
      border-width: 0 ${rem(3)} ${rem(3)} 0;
      display: block;
      padding: ${rem(15)};
      animation: ${moreBtnFloat} 2s ease-in-out infinite;
      animation-delay: .75s;

      transform: rotate(45deg);

      ${mobile(css`
        padding: ${rem(10)};
      `)}
    }

    &:hover {
      opacity: 0.7;
    }
`

const BtnContent = styled.div`
    position: absolute;
    bottom: ${rem(30)};

    width: 100%;
    height: ${rem(35)};

    opacity: 0;
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1);

    ${BgWrapper}.visible & {
      opacity: 1;
      transition: opacity 1.5s cubic-bezier(0.19, 1, 0.22, 1) .5s;
    }
`

function Card1(props) {

  const [containerHeight, setContainerHeight] = useState(100);

  const loadContainerHeight = (document) => {
    setContainerHeight(getEntireHeight(document));
  }

  useEffect(() => {
    loadContainerHeight(document);
  })

  return (
    <Wrapper id={'card1'}>
        <Controller>
          <Scene 
            duration={'110%'} 
            triggerElement={'#card1'}
            triggerHook={'onLeave'}
            classToggle={'visible'}
            offset={'-300px'}
          >
            <BgWrapper>
              <Bg />
              <BtnContent>
                <MoreBtn  onClick={() => scrollTo('card2')}>
                  <div className={'btn'}/>
                </MoreBtn>
              </BtnContent>
            </BgWrapper>
          </Scene>
          <Scene
            duration={containerHeight} 
            triggerElement={'#card1'}
            classToggle={'visible'}
          >
            <Content>
              <Title>안녕하세요<br/>김진혁의 포트폴리오입니다.</Title>
              <SmallTitle>Web Full Stack Developer</SmallTitle>
            </Content>
          </Scene>
        </Controller>
      </Wrapper>
  )
}

export default Card1
