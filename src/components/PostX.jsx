import { Box, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaRegBookmark } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PostX = ({title, img, writer, date, desc, link}) => {
  return (
    <HStack id="postX">
      <Image src={img} alt={title} />

      <VStack>
        <Box>
          <Link to={link}>
            <h4>{title}</h4>
            <p>{desc}</p>
          </Link>
        </Box>

        <Box>
          <Image src={writer.image} />
          <Box>
            <Link to={'/writer'}>{writer.name}</Link>
            <p>{date}</p>
          </Box>
          <FaRegBookmark />
        </Box>
      </VStack>
    </HStack>    
  )
}

export default PostX