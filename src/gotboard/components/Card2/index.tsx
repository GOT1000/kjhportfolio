import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'

// components
import { FlexItem } from 'styles/index'
// styles
import * as colors from 'styles/colors'
import * as sizes from 'styles/sizes'
import { mobile } from 'styles/media'
import { progressbar } from 'styles/animations' 
import rem from 'styles/rem'
// consts
import { MY_STATUS, getEntireHeight } from 'lib/const'
import { checkPropTypes } from 'prop-types';


const Wrapper = styled.div`
  background-color: ${colors.CARD2_BACKGROUND};

  width: 100%;
  padding: ${rem(120)} ${rem(20)} ${rem(20)} ${rem(20)};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  font-family: 'NanumSquare';
`

const Title = styled.div`
`

const TitleWrapper = styled.div`
  width: 100%;
  opacity: 0;
  transform: translateX(50px);
  transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);

  &.visible {
    opacity: 1;
    transform: translateX(0);
    transition: opacity .5s cubic-bezier(0.19, 1, 0.22, 1), transform .8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  ${Title} {
    font-size: ${rem(36)};
  }
`

const ProfileWrapper = styled.div`
  margin: 0 auto;
  width: 100%;

  padding: ${rem(60)};

  opacity: 0;
  transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1);

  &.visible {
    opacity: 1;
    transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1);
  }

  ${mobile(css`
    padding: ${rem(30)} 0;
  `)}
`

const Profile = styled.div`
  width: ${rem(210)};
  height: ${rem(210)};

  margin: 0 auto;

  border-radius: 50%;

  ${mobile(css`
    width: ${rem(150)};
    height: ${rem(150)};
  `)};

  ${sizes.setImgBackground(css`
    background-image: url("/static/assets/nike.png");
  `)}
`

const DetailTitle = styled.div``

const Detail = styled.div`
  font-family: 'NanumGothic';
`

const DetailWrapper = styled.div`
  ${DetailTitle} {
    margin-top: ${rem(30)};
    font-size: ${rem(32)};

    ${mobile(css`
      font-size: ${rem(28)};
    `)}
  }

  ${Detail} {
    margin-top: ${rem(45)};
    font-size: ${rem(18)};

    ${mobile(css`
      font-size: ${rem(15)};
    `)}
  }
`

const Bar = styled.div` 
`

const Status = styled.div`
    display: flex;
    &:not(:first-child) {
      margin-top: ${rem(10)};
    }
  `

  const StatusTitle = styled.div`
    width: ${rem(120)};
    padding: ${rem(6)} 0;
    font-size: ${rem(18)};
    text-align: left;

    ${mobile(css`
      width: ${rem(100)};
      padding: ${rem(7.5)} 0;
      font-size: ${rem(14)};
    `)}
    }
  `

const StatusWrapper = styled.div`
  height: ${rem(400)};
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: ${rem(700)};
  width: 100%;
  margin: 0 auto;

  ${mobile(css`
    padding: 0;
  `)}

  ${Title} {
    font-size: ${rem(36)};
    padding: ${rem(20)} 0 ${rem(30)};
  }

  ${Title}, ${Status} {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1), transform 2s cubic-bezier(0.19, 1, 0.22, 1);
  }


  &.visible ${Title}, &.visible ${Status} {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1), transform 2s cubic-bezier(0.19, 1, 0.22, 1);
  }

  ${Title}, &.visible ${Status} {
    transition-delay: .25s;
  }
`

const StatusBar = styled.div`
    width: 100%;
    background-color: ${colors.STATUS_BAR_BACKGROUND};
    height: ${rem(30)};
    border-radius: ${rem(15)};

    transition-delay: .4s;

    display: flex;

    ${Bar} {
      width: 0;
      background-color: ${colors.STATUS_BAR_COLOR};
      height: 100%;
      border-radius: ${rem(15)};
      border-color: ${colors.STATUS_BAR_COLOR};
      
      ${props => 
        css`
          ${StatusWrapper} & {
            transition: width .2s ${props.duration}, background-color 2s ease-in-out;
          }
          ${StatusWrapper}.visible & {
              background-color: ${colors.STATUS_BAR_COLOR2};
              width: ${props => props.status + '%'};
              transition: width .6s cubic-bezier(.02,.47,.58,.86) ${props.duration}, background-color 2s ease-in-out;
          }
        `
      }
    }
`

function Card2(props) {
  const [containerHeight, setContainerHeight] = useState(100);

  const loadContainerHeight = (document) => {
    setContainerHeight(getEntireHeight(document));
  }


  const StatusBars = (...props) => {
    return MY_STATUS.map((item, index) => {
      return (
        <Status key={index}>
          <StatusTitle>{item.title}</StatusTitle>
          <StatusBar status={item.status} duration={item.duration}>
            <Bar></Bar>
          </StatusBar>
        </Status>
      );
    })
  }

  useEffect(() => {
    loadContainerHeight(document);
  })

  return (
    <Wrapper id={'card2'}>
      <Controller>
        <div id={'card2_title_wrapper'}></div>
        <Scene
          duration={containerHeight} 
          triggerElement={'#card2_title_wrapper'}
          triggerHook={0.8}
          classToggle={'visible'}
          offset={100}
        >
          <TitleWrapper>
            <Title>저에 대해 소개합니다.</Title>
          </TitleWrapper>
        </Scene>
        <div id={'card2_profile_wrapper'}></div>
        <Scene
            duration={containerHeight} 
            triggerElement={'#card2_profile_wrapper'}
            triggerHook={0.55}
            classToggle={'visible'}
          >
            <ProfileWrapper>
              <Profile src={'/static/assets/nike.png'} />
              <DetailWrapper>
                <DetailTitle>
                  김진혁
                </DetailTitle>
                <Detail>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Detail>
              </DetailWrapper>
            </ProfileWrapper>
        </Scene>
        <div id={'card2_status_wrapper'}></div>
        <Scene
          duration={containerHeight} 
          triggerElement={'#card2_status_wrapper'}
          triggerHook={0.55}
          classToggle={'visible'}
        >
            <StatusWrapper>
              <Title>
                제 개발 스택은 이렇습니다.
              </Title>
              {StatusBars()}
            </StatusWrapper>
        </Scene>
      </Controller>
    </Wrapper>
    
  )
}

export default Card2
