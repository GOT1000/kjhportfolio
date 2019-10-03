import React from 'react'
import GlobalStyle from './base'

// buttons
import Button from './ui/buttons/Button'
// inputs
import Input from './ui/inputs/Input'
// layouts
import Box from './ui/layouts/Box'
import GotboardContainer from './ui/layouts/GotboardContainer'
import Flex, { FlexItem } from 'styled-flex-component'
// thumbnails
// spinners
// etc
import Text from './ui/Text'


export {
  Box,
  Flex,
  FlexItem,
  Text,
  Input,
  Button,
  GotboardContainer,
}

export default Component => props => (
  <>
    <Component {...props} />
    <GlobalStyle />
  </>
)
