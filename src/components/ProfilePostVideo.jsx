import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import { Box, VStack } from '@chakra-ui/react'
import ProfileTemplate from './ProfileTemplate'
import data from '../assets/data.json'
import { Link, useLocation } from 'react-router-dom'
import ProfilePostForm from './ProfilePostForm'

const ProfilePostVideo = () => {
  return (
    <VStack id="profile">
      <Breadcrumbs current={'Create Post'} />
      <ProfileTemplate img={data.images.profile.avatar} name={data.images.profile.username} />
      <ProfilePostForm />
    </VStack>
  )
}

export default ProfilePostVideo