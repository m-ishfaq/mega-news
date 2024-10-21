import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import data from '../assets/data.json'

const Tags = () => {
  return (
    <HStack id="tags">
      {
          data.tags.map((i, index) => (
              <Tag name={i.name} img={i.image} link={i.name} key={index}/>
          ))
      }
      {/* <Arrow size={'20'}/> */}
    </HStack>
  )
}

const Tag = ({name, img, link}) => (
  <Box>
    <Box       
      backgroundImage={img}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100%"
      height="80px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textDecoration="none"
      borderRadius={'10px'}
      _hover={{ opacity: 0.8 }}
    >
      <Link to={`/${link.toLowerCase()}-news`}>
        #{name}
      </Link>
    </Box>
  </Box>
)

export default Tags