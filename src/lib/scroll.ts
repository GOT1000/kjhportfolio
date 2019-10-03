import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const scrollTo = (elementName) => {
    if (!elementName) {
        console.log('no element');
        return;
    }

    scroller.scrollTo(elementName, {
        duration: 1200,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
}
