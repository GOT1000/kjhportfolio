import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import useMedia from 'use-media'

// components
import PortfolioModal from 'gotboard/components/Modals/PortfolioModal'
// contexts
// styles
import * as colors from 'styles/colors'
import * as sizes from 'styles/sizes'
import { mobile, notMobile, notMobile2 } from 'styles/media'
import rem from 'styles/rem'
import { themeRowFadeOut, themeRowFadeIn } from 'styles/animations'
// const
import { MY_PORTFOLIO, getEntireHeight } from 'lib/const'

const Wrapper = styled.div`
  background-color: ${colors.CARD3_BACKGROUND};

  width: 100%;
  padding: ${rem(120)} ${rem(20)} ${rem(80)} ${rem(20)};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  font-family: 'NanumSquare';
`

const Title = styled.div`
`

const TitleWrapper = styled.div`
  width: 100%;

  ${Title} {
    font-size: ${rem(36)};
    color: #fff;
  }

  opacity: 0;
  transform: translateX(-50px);
  transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);

  &.visible {
    opacity: 1;
    transform: translateX(0);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);
  }
`


const customModalWrapperStyle = css`
.rodal-dialog {
  width: 100%!important;
  height: 100vh!important;
  top: 0;
  border-radius: 0;
  padding: 0;
  overflow: hidden;

  ${notMobile(css`
    top: -6vh;
    padding-top: 3vh;
    max-width: ${rem(700)};
  `)}
}

.rodal-close {
  display: none;
}
`

const Thumbnail = styled.img.attrs((props) => ({
src: props.src || undefined,
}))`
  margin: auto;
  display: block;
  width: 100%;
  max-width: ${rem(525)};
`

const ThumbnailWrapper = styled.div.attrs((props) => ({
className: props.isOpen ? 'active' : '',
}))`
flex: 0 0 50%;
padding: ${rem(15)};

${mobile(css`
  max-width: ${rem(500)};
  width: 100%;
  padding: ${rem(20)} 0;
`)}   
`

const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${rem(850)};
  margin: ${rem(50)} auto ${rem(20)} auto;

  &.visible ${ThumbnailWrapper} {
    opacity: 1;
    transform: translateY(0);
    transition: opacity .55s cubic-bezier(0.19, 1, 0.22, 1),transform .55s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  ${ThumbnailWrapper} {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity .75s cubic-bezier(0.19, 1, 0.22, 1),transform .75s cubic-bezier(0.19, 1, 0.22, 1);
  }

  ${mobile(css`
    width: 100%;
    flex-direction: column;
    margin: ${rem(50)} auto 0;
    max-width: ${rem(450)};
  `)}

  ${notMobile2(css`
    &:hover ${ThumbnailWrapper}:hover {
      cursor: pointer;
      ${Thumbnail} {
        box-shadow: 0 0 20px rgba(0,0,0,0.25);
        ${themeRowFadeIn}
      }
    }
    
    &:hover ${ThumbnailWrapper} {
      ${Thumbnail} {
        ${themeRowFadeOut}
      }
    }
    
    &:not(:hover) ${ThumbnailWrapper} {
      ${Thumbnail} {
        transform: scale(1) translateZ(0);
        opacity: 1;
        transition: opacity .55s cubic-bezier(0.19, 1, 0.22, 1),transform .55s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  `)}
`

function Card3(props) {
  const { onShowModal, hideModal } = props;
  
  const renderModalBody = (item) => {
    return <PortfolioModal portfolio={item} hideModal={hideModal} />
  }
  const renderPortfolioList = () => {
    return MY_PORTFOLIO.map((item, i) => {
      return (
        <ThumbnailWrapper 
          onClick={() => onShowModal({item: renderModalBody(item), style: customModalWrapperStyle})}
          key={i}
        >
          <Thumbnail 
            className={'thumbnail'} 
            src={item.thumbnail}
          />
        </ThumbnailWrapper>
      )
    })
  }
  

  return (
    <Wrapper>
      <Controller>
        <div id={'card3_title_wrapper'}></div>
        <Scene
          duration={props.containerHeight} 
          triggerElement={'#card3_title_wrapper'}
          triggerHook={0.8}
          classToggle={'visible'}
          offset={100}
        >
          <TitleWrapper>
            <Title>참여한 프로젝트를 소개합니다.</Title>
          </TitleWrapper>
        </Scene>
        <div id={'card3_content'}></div>
        <Scene
          duration={props.containerHeight} 
          triggerElement={'#card3_content'}
          triggerHook={0.55}
          classToggle={'visible'}
        >
          <PortfolioWrapper>
            {renderPortfolioList()}
          </PortfolioWrapper>
        </Scene>
      </Controller>
    </Wrapper>
  )
}

export default Card3
