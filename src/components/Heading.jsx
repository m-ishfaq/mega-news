import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Heading = ({title, link}) => {
  return (
    <Flex id="heading">
      <h3>
          {title}
      </h3>
      <Link to={`/${link}`}>
          <span>Show All</span>
          <ChevronRightIcon />
      </Link>
    </Flex>
  )
}

export default Heading