import { Box, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { FaRegBookmark } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PostY = ({title, desc, writer, date, img, link}) => {
  return (
    <HStack id="postY">
      <Link to={link} >
        <Image src={img} alt={title} />
        <Box>
          <h4>{title}</h4>
          <p>{desc}</p>
        </Box>
      </Link>

      <Box>
        <Image src={writer.image} />
        <Box>
          <Link to={'/writer'}>{writer.name}</Link>
          <p>{date}</p>
        </Box>
        <FaRegBookmark />
      </Box>
    </HStack>    
  )
}

export default PostY