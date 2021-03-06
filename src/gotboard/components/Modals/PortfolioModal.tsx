import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import SwiperHandler from 'gotboard/components/SwiperHandler'
import rem from 'styles/rem'
import { mobile } from 'styles/media'
import { setImgBackground } from 'styles/sizes'
import { MY_PORTFOLIO } from 'lib/const'



const ShowPrevArrow = styled.div`
left: ${rem(15)};
z-index: 2;
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(135deg);
-webkit-transform: rotate(135deg);

:before {
    content: ''
}
`

const ShowNextArrow = styled.div`
right: ${rem(15)};
z-index: 2;
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);

:before {
    content: ''
}
`

const setting = {
infinite: false,
nextArrow: <ShowNextArrow />,
prevArrow: <ShowPrevArrow />
}

const Wrapper = styled.div`
display: flex;
position: relative;
flex-direction: column;
width: 100%;
height: 100%;

font-family: 'NanumSquare';
`

const SwiperContent = styled.div`
width: 100%;
height: 100%;

${setImgBackground(css`
    background-image: url("${props => props.background}");
`)}
`

const DetailWrapper = styled.div`
display: flex;
flex: 1;
border-top: 3px solid #1B242F;

position: relative;
padding: ${rem(35)} ${rem(20)} ${rem(90)} ${rem(20)};
`

const DetailBox = styled.div`
display: block;
position: relative;
width: 100%;
height: 100%;
`

const DetailTitle = styled.div`
height: ${rem(45)};
font-size: ${rem(36)};
font-weight: bold;
`

const DetailSmallTitle = styled.div`
font-size: ${rem(24)};
height: ${rem(44)};
color: #c0c0c0;
padding-bottom: ${rem(20)};
border-bottom: 1px solid rgba(0,0,0,0.1);
`

const DetailContentWrapper = styled.div`
display: block;
position: absolute;
top: 0;
width:100%;
height:100%;
padding-top: ${rem(119)};

font-family: 'NanumGothic';

.content {
    display: block;
    width: 100%;
    height: 100%;
    overflow: scroll;
    word-break: keep-all;
    font-size: ${rem(15)};
    line-height: ${rem(20)};
}
`

const BtnWrapper = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    padding: 0 ${rem(20)} ${rem(20)} ${rem(20)};
    bottom: 0;
    left: 0;
    justify-content: space-between;

    .first-side, .last-side {
        display: flex;
    }
`

const MoreBtn = styled.div`
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

const CloseBtn = styled.div`
display: block;
cursor: pointer;
padding: ${rem(15)} ${rem(20)};
width: ${rem(33)};
height: ${rem(33)};

:before, :after {
    position: absolute;
    content: ' ';
    height: ${rem(33)};
    width: 2px;
    background-color: #333;
}

:before {
    transform: rotate(45deg);
    bottom: ${rem(25)};
}
:after {
    transform: rotate(-45deg);
    bottom: ${rem(25)};
}
`

function PortfolioModal({ portfolio, ...props }) {

    const swiperHeight = rem(360);
    const swiperMobileHeight = rem(250);

    const customStyle = css`
        width: 100%;
        height: ${swiperHeight};
        background-color: #fff;

        ${mobile(css`
            height: ${swiperMobileHeight};
        `)}
    `

    const renderSwiperContents = () => {
        
        return (
            portfolio.images.map((item) => {
                return (
                    <SwiperContent background={item}>
                    </SwiperContent>
                )
            })
        )
    }

    const handleHref = (href) => {
        window.open(href);
    }

    return (
        <Wrapper>
            <SwiperHandler 
                    setting={setting} 
                    customStyle={customStyle} 
                    contents={renderSwiperContents()}
                />
            <DetailWrapper>
                <DetailBox>
                    <DetailTitle>{portfolio.title}</DetailTitle>
                    <DetailSmallTitle>{portfolio.smallTitle}</DetailSmallTitle>
                    <DetailContentWrapper>
                        <div className={'content'} dangerouslySetInnerHTML={{__html: portfolio.description}}/>
                    </DetailContentWrapper>
                </DetailBox>
            </DetailWrapper>
            <BtnWrapper>
                <div className={'first-side'}>
                    {portfolio.href_web ? <MoreBtn onClick={() => handleHref(portfolio.href_web)} imgSrc={'/static/assets/btn/btn_web.png'}/> : null}
                    {portfolio.href_apple? <MoreBtn onClick={() => handleHref(portfolio.href_web)} imgSrc={'/static/assets/btn/btn_apple.png'}/> : null}
                    {portfolio.href_android ? <MoreBtn onClick={() => handleHref(portfolio.href_web)} imgSrc={'/static/assets/btn/btn_android.png'}/> : null}
                </div>
                <div className={'last-side'}>
                    <CloseBtn onClick={() => props.hideModal()} />
                </div>
            </BtnWrapper>
        </Wrapper>
        
    )
}

export default PortfolioModal;