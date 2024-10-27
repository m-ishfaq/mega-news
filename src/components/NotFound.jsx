import { VStack } from '@chakra-ui/react'
import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const NotFound = () => {
  return (
    <>
      <Breadcrumbs current={'Page Not Found (404)'} />
      <VStack id='notFound'>
        <h3>404</h3>
        <p>OOPS! Page You Are Looking For Doesn't Exist. Please Use Search For Help</p>
      </VStack>
    </>
  )
}

export default NotFound