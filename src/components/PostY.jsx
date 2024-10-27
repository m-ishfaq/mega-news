import { Box, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const PostY = ({title, desc, writer, date, img, link}) => {
  const location = useLocation();
  const current = location.pathname.split('/').filter(Boolean).pop()

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
        {
          current == 'saved-posts' ? <FaBookmark color='#F81539' /> : <FaRegBookmark />
        }
      </Box>
    </HStack>    
  )
}

export default PostY