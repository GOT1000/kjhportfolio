import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import Waypoint from 'gotboard/components/Waypoint'

// contexts
// hooks
// components
import Navbar from 'gotboard/components/Nav/Navbar'
import Card1 from 'gotboard/components/Card1'
import Card2 from 'gotboard/components/Card2'
import Card3 from 'gotboard/components/Card3'
import Card4 from 'gotboard/components/Card4'
import Modal from 'common/Modal'
import Overlay from 'gotboard/components/Nav/Overlay'
// styles
// utils
import { getEntireHeight } from 'lib/const'


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

const Container = styled.div`
  position: relative;
`

export default function() {
    const [ isMobileMenuToggle, setIsMobileMenuToggle ] = useState(false)
    const toggleMobileMenu = () => {
        setIsMobileMenuToggle(!isMobileMenuToggle)
    }

    const [scrollOffset, setScrollOffset] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [IsModalOpen, setIsModalOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [modalStyle, setModalStyle] = useState(null);
    const [containerHeight, setContainerHeight] = useState(0);

    const showModal = (props) => {
        setModalItem(props.item);
        setModalStyle(props.style);
        setIsModalOpen(true);
    }

    const hideModal = () => {
        setModalItem(null);
        setIsModalOpen(false);
    }

    const handleCollapse = () => {
        const container = document.getElementById('card2');
        let collapse = window.pageYOffset >= container.offsetTop;
        setIsCollapsed(collapse);
    }

    const loadContainerHeight = (document) => {
        setContainerHeight(getEntireHeight(document));
    }

    useEffect(() => {
        handleCollapse();
        loadContainerHeight(document);
        window.addEventListener('scroll', () => handleCollapse());
        window.addEventListener('resize', () => loadContainerHeight(document));
        return (() => {
            window.removeEventListener('scroll', () => handleCollapse())
            window.removeEventListener('resize', () => loadContainerHeight(document))
        })
    }, [])

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
            <WrapperContainer>
                <Navbar
                    isAbsolute={true}
                    isMobileMenuToggle={isMobileMenuToggle}
                    onMobileMenuToggle={toggleMobileMenu}
                />
                <Navbar
                    isCollapsed={isCollapsed}
                    isMobileMenuToggle={isMobileMenuToggle}
                    onMobileMenuToggle={toggleMobileMenu}
                />
                <Wrapper name={'card1'}>
                    <Card1 containerHeight={containerHeight}/>
                </Wrapper>
                <Wrapper name={'card2'}>
                    <Card2 
                        handleCollapse={handleCollapse}
                        containerHeight={containerHeight}
                    />
                </Wrapper>
                <Wrapper name={'card3'}>
                    <Card3 
                        onShowModal={showModal}
                        hideModal={hideModal}
                        containerHeight={containerHeight}
                    />
                </Wrapper>
                <Wrapper name={'card4'}>
                    <Card4
                        containerHeight={containerHeight}
                    />
                </Wrapper>
            </WrapperContainer>
            <Modal
                IsModalOpen={IsModalOpen} 
                hideModal={hideModal}
                modalStyle={modalStyle}
                modalItem={modalItem}
            />
            <Overlay 
                isMobileMenuToggle={isMobileMenuToggle}
                onMobileMenuToggle={toggleMobileMenu}
            />
        </Container>
    )
}

