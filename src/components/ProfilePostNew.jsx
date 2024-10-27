import { VStack } from '@chakra-ui/react'
import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import ProfileTemplate from './ProfileTemplate'
import ProfilePostForm from './ProfilePostForm'
import data from '../assets/data.json'

const ProfilePostNew = () => {
  return (
    <VStack id="profile">
      <Breadcrumbs current={'Create Post'} />
      <ProfileTemplate img={data.images.profile.avatar} name={data.images.profile.username} />
      <ProfilePostForm />
    </VStack>
  )
}

export default ProfilePostNew