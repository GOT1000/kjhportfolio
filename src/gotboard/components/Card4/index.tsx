import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { Controller, Scene } from 'react-scrollmagic'

// components
// styles
import * as colors from 'styles/colors'
import * as sizes from 'styles/sizes'
import { mobile } from 'styles/media'
import rem from 'styles/rem'

// libs
import { getEntireHeight } from 'lib/const'


const Wrapper = styled.div`
  padding: ${rem(120)} ${rem(20)} ${rem(80)} ${rem(20)};
  height: 1000px;
  
  font-family: 'NanumSquare';
`

const Title = styled.div`

`

const Email = styled.div`
  margin-top: ${rem(15)};
`

const TitleWrapper = styled.div`
  width: 100%;

  ${Title} {
    font-size: ${rem(36)};

    opacity: 0;
    transform: translateY(50px);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1) .2s, transform .8s cubic-bezier(0.19, 1, 0.22, 1) .2s;
  }

  &.visible ${Title} {
    opacity: 1;
    transform: translateY(0);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  ${Email} {
    font-size: ${rem(20)};

    opacity: 0;
    transform: translateY(50px);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &.visible ${Email} {
    opacity: 1;
    transform: translateY(0);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1) .2s, transform .8s cubic-bezier(0.19, 1, 0.22, 1) .2s;
  }
`

const ContentWrapper = styled.div`

`

const SocialBtnWrapper = styled.div`
  padding: ${rem(50)} 0;
`

const NameWrapper = styled.div`

`

function Card4(props) {
  const [containerHeight, setContainerHeight] = useState(100);

  const loadContainerHeight = (document) => {
    setContainerHeight(getEntireHeight(document));
  }

  useEffect(() => {
    loadContainerHeight(document);
  })

  return (
    <Wrapper>
      <Controller>
        <div id={'card4_title_wrapper'}></div>
        <Scene
          duration={containerHeight} 
          triggerElement={'#card4_title_wrapper'}
          triggerHook={1}
          classToggle={'visible'}
        >
          <TitleWrapper>
            <Title>언제든지 연락주세요</Title>
            <Email>E-mail: jinhyg2103@gmail.com</Email>
          </TitleWrapper>
        </Scene>
        <ContentWrapper>
          <SocialBtnWrapper>

          </SocialBtnWrapper>
          <NameWrapper>
            김진혁 @2019
          </NameWrapper>
        </ContentWrapper>
      </Controller>
    </Wrapper>
    
  )
}

export default Card4
