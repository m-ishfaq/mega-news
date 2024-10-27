import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Arrow } from '../assets/Icons'
import { IoIosArrowForward } from 'react-icons/io'

const Pagination = () => {
  return (
    <HStack id='pagination'>
        <span className='active'>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span className='going'>...</span>
        <span>9</span>
        <span className='next'><span>Next</span><IoIosArrowForward size={'13'}/></span>
    </HStack>
  )
}

export default Pagination