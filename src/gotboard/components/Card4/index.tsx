import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { Controller, Scene } from 'react-scrollmagic'

// components
// styles
import { setImgBackground } from 'styles/sizes'
import { mobile } from 'styles/media'
import rem from 'styles/rem'

// libs
import { getEntireHeight, MY_CONTACT } from 'lib/const'


const Wrapper = styled.div`
  padding: ${rem(120)} ${rem(20)} ${rem(80)} ${rem(20)};
  
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

const Contact = styled.div`
    width: ${rem(30)};
    height: ${rem(30)};
    cursor: pointer;

    &:not(:first-child) {
        margin-left: ${rem(20)};
    }

    transition: opacity .2s ease;

    &:hover {
        opacity: 0.6;
        transition: opacity .2s ease;
    }

    ${props => css`background-image: url("${props.imgSrc}");`}

    ${setImgBackground()}   
`

const ContactWrapper = styled.div`
  padding: ${rem(50)} 0;
  display: flex;
  justify-content: center;
`

const NameWrapper = styled.div`
`

const ContentWrapper = styled.div`
  ${ContactWrapper} {
    font-size: ${rem(36)};

    opacity: 0;
    transform: translateY(50px);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1) .2s, transform .8s cubic-bezier(0.19, 1, 0.22, 1) .2s;
  }

  &.visible ${ContactWrapper} {
    opacity: 1;
    transform: translateY(0);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  ${NameWrapper} {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1) .2s, transform .8s cubic-bezier(0.19, 1, 0.22, 1) .2s;
  }

  &.visible ${NameWrapper} {
    opacity: 1;
    transform: translateY(0);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);
  }
`


function Card4(props) {
  const [containerHeight, setContainerHeight] = useState(100);

  const loadContainerHeight = (document) => {
    setContainerHeight(getEntireHeight(document));
  }

  useEffect(() => {
    loadContainerHeight(document);
  })

  const getCurrentYear = () => {
    let d = new Date();
    return d.getFullYear();
  }

  const handleHref = (href) => {
    window.open(href)
  }

  const renderContact = () => {
    let contactList = MY_CONTACT;
    return MY_CONTACT.map((item) => {
      return (
        <Contact onClick={() => handleHref(item.href)} imgSrc={item.src}/>
      )
    })
  }

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
            <Title>감사합니다.</Title>
            <Email>E-mail: jinhyg2103@gmail.com</Email>
          </TitleWrapper>
        </Scene>
        <div id={'card4_content_wrapper'}></div>
        <Scene
          duration={containerHeight} 
          triggerElement={'#card4_content_wrapper'}
          triggerHook={0.8}
          classToggle={'visible'}
        >
          <ContentWrapper>
            <ContactWrapper>
              {renderContact()}
            </ContactWrapper>
            <NameWrapper>
              김진혁 @{getCurrentYear()}
            </NameWrapper>
          </ContentWrapper>
        </Scene>
      </Controller>
    </Wrapper>
    
  )
}

export default Card4
