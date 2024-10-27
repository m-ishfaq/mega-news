import { Box, Flex, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaUserPen } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import data from '../assets/data.json'
import Breadcrumbs from './Breadcrumbs'
import Pagination from './Pagination'
import ProfilePostsGrid from './ProfilePostsGrid'
import { FaPlus, FaRegNewspaper, FaRegStar, FaRegUser } from 'react-icons/fa'

const Writer = () => {
    return (
        <VStack id="profile">
            <Breadcrumbs current={'Writer'} />
            <Template img={data.images.writer.avatar} name={data.images.writer.username} />
            <Heading title={'Latest Posts'} />
            <ProfilePostsGrid />
            <Pagination />
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

const MenuItem = ({Svg, name, number}) => (
    <Box id='writerMenuItem'>
        <Svg size={'15'}/>
        <h4>{name} :</h4>
        <h4>{number}</h4>
    </Box>
)  

const Template = ({img, name}) => (
    <VStack id="banner">
        <Image src={data.images.profile.banner} alt='Profile Banner' />
        <HStack id='header' >
        <HStack id='bio'>
            <Image src={img} alt={name} />
            <h1>{name}</h1>
        </HStack> 
        <Box id='menu'>
            <MenuItem name={'Rate'} Svg={FaRegStar} number={4.2}/>
            <MenuItem name={'Follower'} Svg={FaRegUser} number={'1.2K'}/>
            <MenuItem name={'Post'} Svg={FaRegNewspaper} number={29}/>
        </Box>
        <Box id='followBtn'>
            <FaPlus size={'9'} />
            <span>Follow</span>
        </Box>
        </HStack>
    </VStack>
)

export default Writer