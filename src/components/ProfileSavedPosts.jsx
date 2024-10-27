import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import ProfileTemplate from './ProfileTemplate'
import Pagination from './Pagination'
import ProfilePostsGrid from './ProfilePostsGrid'
import data from '../assets/data.json'

const ProfileSavedPosts = () => {
  return (
    <VStack id="profile">
      <Breadcrumbs current={'Saved Posts'} />
      <ProfileTemplate img={data.images.profile.avatar} name={data.images.profile.username} />
      <ProfilePostsGrid />
      <Pagination />
    </VStack>
  )
}

export default ProfileSavedPosts