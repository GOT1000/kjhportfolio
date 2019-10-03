import React, { useState } from 'react';
import Swiper from 'react-slick';
import styled from 'styled-components';


function SwiperHandler(props){

    const { setting = {}, customStyle, contents = [] } = props;

    const SwiperItem = styled.div`
        ${customStyle}
    `

    const renderSwiperItem = () => {
        console.log(contents);
        return contents.map((item) => {
            return (
                <SwiperItem>{item}</SwiperItem>
            )
        })
    }

    return (
        <Swiper {...setting}>
            {renderSwiperItem()}
        </Swiper>
    )
}

export default SwiperHandler;