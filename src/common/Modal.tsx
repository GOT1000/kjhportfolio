import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Rodal from 'rodal'
// components
// styles
import { mobile } from 'styles/media'



function Modal(props) {
  const { IsModalOpen, hideModal, modalStyle = css`` , modalItem } = props;

  const StyledModal = styled(Rodal)`
    ${modalStyle}
  `

  return (
    <StyledModal 
        visible={IsModalOpen} 
        onClose={hideModal}
    >
        {modalItem}
    </StyledModal>
  )
}

export default Modal
