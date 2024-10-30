import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Breadcrumbs = ({current}) => {
  return (
    <HStack id='breadcrumbs'>
      <Link to={'/'}>Home</Link>
      <ChevronRightIcon />
      <Link>{current}</Link>
    </HStack>
  )
}

export default Breadcrumbs