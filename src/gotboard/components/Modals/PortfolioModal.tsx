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
    background-size: cover;
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
    height: 100%;
    overflow: scroll;
    font-size: ${rem(15)};
    line-height: ${rem(20)};
}
`

const BtnWrapper = styled.div`
display: flex;
position: absolute;
width: 100%;
padding: ${rem(20)};
bottom: 0;
left: 0;
justify-content: space-between;
`

const MoreBtn = styled.div`
display: block;
padding: ${rem(15)} ${rem(20)};
cursor: pointer;
background-color: transparent;
color: #1B242F;
font-size: ${rem(17)};

border: 1px solid #1B242F;

&:hover {
    opacity: .7;
}

&::before, &::after {
    content:"";
    width: 0;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background: #fff;
    transition-delay: 0s;
}        

span::before, span::after {
    content:"";
    width:2px;
    height:0;
    position: absolute;
    transition: all 0.2s linear;
    background: #fff;
    transition-delay: 0.2s;
} 

&:hover::before, &:hover::after {
    width: 100%;
}

&:hover span::before, &:hover span::after{
    height: 100%;
}

&::before {
    right: 0;
    top: 0;
}

&::after {
    left: 0;
    bottom: 0;
}

span::before {
    left: 0;
    top: 0;
}

span::after  {
    right: 0;
    bottom: 0;
}

&:hover::before, &:hover::after {
    transition-delay: 0.2s;
}

&:hover span::before, &:hover span::after{
    transition-delay: 0s;
}
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

    const swiperHeight = rem(400);
    const swiperMobileHeight = rem(250);

    const customStyle = css`
        width: 100%;
        height: ${swiperHeight};
        background-color: red;

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
                        <div className={'content'}>
                            {portfolio.description}
                        </div>
                    </DetailContentWrapper>
                </DetailBox>
            </DetailWrapper>
            {
                portfolio.href ? 
                <BtnWrapper>
                    <MoreBtn>
                        <span>보러가기</span>
                    </MoreBtn>
                    <CloseBtn onClick={() => props.hideModal()} />
                </BtnWrapper> : null
            }
        </Wrapper>
        
    )
}

export default PortfolioModal;