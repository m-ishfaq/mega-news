import { Box, Flex, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfilePostsGrid from './ProfilePostsGrid'
import Breadcrumbs from './Breadcrumbs'
import Pagination from './Pagination'
import { Link, useLocation } from 'react-router-dom'
import data from '../assets/data.json'

const Category = () => {
    const location = useLocation();
    const current = location.search.split('?').filter(Boolean).pop();

    const [category, setCategory] = useState(current);

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
        setCategory(current);
    }, [location.search])


  return (
    <VStack id='category'>
      <Breadcrumbs current={'Category'} />
      <HStack id='banner'>
        <Box id='cat'>
            <CategoryItem name={'All'} link={''} active={category == undefined ? true : false} />
            {
                data.tags.map((i, index) => (
                    <CategoryItem key={index} name={i.name} link={`?${i.name.toLowerCase()}`} active={category == i.name.toLowerCase() ? true : false} />
                ))
            }
        </Box>
      </HStack>
      <Heading title={`Category : ${category == undefined ? 'All' : Capitalize(category)}`} />
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

const CategoryItem = ({name, link, active}) => (
    <Link to={`/category${link}`} id='catItem' data-active={active}>
      {name}
    </Link>
)

export default Category