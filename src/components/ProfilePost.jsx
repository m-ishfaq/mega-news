import { Box, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegEye, FaRegStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";

const ProfilePost = ({title, desc, img, link}) => {
  return (
    <HStack id="profilePost">
      <Link to={link} >
        <Image src={img} alt={title} />
        <Box>
          <h4>{title}</h4>
          <p>{desc}</p>
        </Box>
      </Link>

      <Box id='actionBtn'>
        <HStack id='infoZone'>
          <Box>
            <FaRegEye />
            <span>15K</span>
          </Box>
          <Box>
            <FaRegStar />
            <span>4.5</span>
          </Box>
        </HStack>
        <HStack id='dangerZone'>
          <Box>
            <FaRegEdit />
            <RiDeleteBin6Line />
          </Box>
        </HStack>
      </Box>
    </HStack>   
  )
}

export default ProfilePost