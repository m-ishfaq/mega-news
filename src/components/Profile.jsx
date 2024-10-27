import { Box, Flex, Grid, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import data from '../assets/data.json'
import ProfileTemplate from './ProfileTemplate'
import { Angry, Better, Good, Happy, Neutral } from '../assets/Icons'
import '../styles/statics.scss'
import ProfilePostsGrid from './ProfilePostsGrid'

const Profile = () => {
  return (
    <VStack id="profile">
      <Breadcrumbs current={'Profile'} />
      <ProfileTemplate img={data.images.profile.avatar} name={data.images.profile.username} />
      <HStack id='postAnalytics'>
        <VStack id='viewsChart'>
          <Heading title={'Post Views'} />
          <Image src={data.images.profile.viewsChart} alt='Posts Views Analytics' />
        </VStack>
        <VStack id='satisfaction'>
          <Heading title={'Satisfaction Score'} />
          <ScoreGrid />
        </VStack>
      </HStack>
      <Heading title={'Your Posts'} />
      <ProfilePostsGrid />
    </VStack>
  )
}

const Heading = ({title}) => {
  return (
    <Flex id="heading">
      <h3>
        {title}
      </h3>
    </Flex>
  )
}

const ScoreGrid = () => (
  <Grid id='satisfactionScore'>
    <ScoreCard date={'August 2022'} Svg={Angry} points={'20'} nature={'angry'} />
    <ScoreCard date={'September 2022'} Svg={Happy} points={'20'} nature={'happy'} />
    <ScoreCard date={'October 2022'} Svg={Better} points={'20'} nature={'better'} />
    <ScoreCard date={'May 2022'} Svg={Better} points={'20'} nature={'better'} />
    <ScoreCard date={'June 2022'} Svg={Neutral} points={'20'} nature={'neutral'} />
    <ScoreCard date={'July 2022'} Svg={Good} points={'20'} nature={'good'} />
    <ScoreCard date={'February 2022'} Svg={Good} points={'20'} nature={'good'} />
    <ScoreCard date={'March 2022'} Svg={Angry} points={'20'} nature={'angry'} />
    <ScoreCard date={'April 2022'} Svg={Happy} points={'20'} nature={'happy'} />
  </Grid>
)

const ScoreCard = ({date, Svg, points, nature}) => (
  <Box id='scoreCard' data-nature={nature}>
    <h5>{date}</h5>
    <Svg />
    <Text >{points} Points</Text>
  </Box>
)

export default Profile