import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import { Waypoint } from 'react-waypoint'

// contexts
// hooks
// components
import Navbar from 'gotboard/components/Nav/Navbar'
import Card1 from 'gotboard/components/Card1'
import Card2 from 'gotboard/components/Card2'
import Card3 from 'gotboard/components/Card3'
import Card4 from 'gotboard/components/Card4'
import Modal from 'common/Modal'
// styles


const NRouter = Router

NRouter.onRouteChangeStart = url => {
    console.log(`Loading: ${url}`)
    NProgress.start()
}
NRouter.onRouteChangeComplete = () => NProgress.done()
NRouter.onRouteChangeError = () => NProgress.done()

const WrapperContainer = styled.div`

`

const Wrapper = styled(Element).attrs((/* props */) => ({
    className: 'hero-header', // for integration tests
  }))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: white;
    box-sizing: border-box;
  `;

export default function() {
    const [ isMobileMenuToggle, setIsMobileMenuToggle ] = useState(false)
    const toggleMobileMenu = () => {
        setIsMobileMenuToggle(!isMobileMenuToggle)
    }

    const [isScrolled, setIsScrolled] = useState(false);
    const [IsModalOpen, setIsModalOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [modalStyle, setModalStyle] = useState(null);

    const showModal = (props) => {
        setModalItem(props.item);
        setModalStyle(props.style);
        setIsModalOpen(true);
    }

    const hideModal = () => {
        setModalItem(null);
        setIsModalOpen(false);
    }

    const handleScrolled = () => {
        setIsScrolled(true);
    }

    useEffect(() => {
        console.log(isScrolled);
    }, [isScrolled])

    return (
        <Container>
            <Head>
                <title>gotboard</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
                <link rel="stylesheet" type="text/css" href="/static/css/rodal.css" />
                <link rel="stylesheet" type="text/css" href="/static/css/slick.css" />
                <link rel="stylesheet" type="text/css" href="/static/css/slick-theme.css" />
            </Head>
            <div style={{ width: '100%' }}>
            </div>
            <WrapperContainer>
                <Waypoint 
                    onEnter={() => setIsScrolled(false)}
                    onLeave={() => setIsScrolled(true)}
                />
                <Navbar
                    isScrolled={isScrolled}
                    isMobileMenuToggle={isMobileMenuToggle}
                    onMobileMenuToggle={toggleMobileMenu}
                />
                <Wrapper name={'card1'}>
                    <Card1/>
                </Wrapper>
                <Wrapper name={'card2'}>
                    <Card2/>
                </Wrapper>
                <Wrapper name={'card3'}>
                    <Card3 
                        onShowModal={showModal}
                        hideModal={hideModal}
                    />
                </Wrapper>
                <Wrapper name={'card4'}>
                    <Card4/>
                </Wrapper>
            </WrapperContainer>
            <Modal
                IsModalOpen={IsModalOpen} 
                hideModal={hideModal}
                modalStyle={modalStyle}
                modalItem={modalItem}
            />
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`
