import { Box, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaUserPen } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import data from '../assets/data.json'

const ProfileTemplate = ({img, name}) => {
  const location = useLocation();
  const current = location.pathname.split('/').filter(Boolean).pop()

  return (
    <VStack id="banner">
      <Image src={data.images.profile.banner} alt='Profile Banner' />
      <HStack id='header' >
        <HStack id='bio'>
          <Image src={img} alt={name} />
          <h1>{name}</h1>
        </HStack> 
        <Box id='menu'>
          <MenuItem name={'Posts'} link={''} active={current == 'profile' ? true : false} />
          <MenuItem name={'Create'} link={'/create-new'} active={current == 'video' || current == 'create-new' ? true : false} />
          <MenuItem name={'Saved'} link={'/saved-posts'} active={current == 'saved-posts' ? true : false} />
        </Box>
        <Box id='editBtn'>
          <FaUserPen />
          <Link to={'/profile/edit'}>Edit Profile</Link>
        </Box>
      </HStack>
    </VStack>
  )
}

const MenuItem = ({name, link, active}) => (
  <Link to={`/profile${link}`} id='menuItem' data-active={active}>
    {name}
  </Link>
)

export default ProfileTemplate