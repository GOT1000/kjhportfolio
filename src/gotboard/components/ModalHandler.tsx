import React, { useState } from 'react';
import Rodal from 'rodal';
import PortfolioModal from 'gotboard/components/Modals/PortfolioModal';

function ModalHandler(props){
    
    let childModal;

    if (props.type === 'Portfolio') {
        childModal = PortfolioModal;
    }

    return (
        {childModal}
    )
}

export default ModalHandler;