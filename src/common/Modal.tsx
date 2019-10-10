import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Rodal from 'rodal'
// components
// styles
import { mobile } from 'styles/media'

const StyledModal = styled(Rodal)`
  ${props => props.modalStyle}
`

function Modal(props) {
  const { IsModalOpen, hideModal, modalStyle = css`` , modalItem } = props;

  return (
    <StyledModal 
        visible={IsModalOpen} 
        onClose={hideModal}
        modalStyle={modalStyle}
    >
        {modalItem}
    </StyledModal>
  )
}

export default Modal
