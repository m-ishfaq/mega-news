import { Box, Flex, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import data from '../assets/data.json'

const Sports = () => {
  return (
    <Grid id="sports"
      backgroundImage={data.bg.sports}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100%"
      height="85vh"
    >
        <Box >
            <Image src={data.images.home.calendar} alt={'Calendar'}/>
            <Image src={data.images.home.club} alt={'Clubs'}/>
            <Image src={data.images.home.competition} alt={'Competition'}/>
        </Box>
    </Grid>
  )
}

export default Sports