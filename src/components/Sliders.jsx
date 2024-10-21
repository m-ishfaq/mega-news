import { Box, Grid, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import data from '../assets/data.json'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Sliders = () => {
  return (
    <Grid id="sliders">
        {
            data.sliders.single.map((i, index) => 
                <Single title={i.title} img={i.img} desc={i.desc} key={index}/>
            )   
        }
        <Carousel infiniteLoop interval={1000} showStatus={false} showThumbs={true} showArrows={true} >
            {
                data.sliders.big.map((i, index) => 
                    <Big title={i.title} img={i.img} desc={i.desc} key={index}/>
                )   
            }
        </Carousel>
    </Grid>
  )
}

const Single = ({title, img, desc}) => (
    <HStack>
        <Link to={'/single'}>
            <Image src={img} alt={title} />
            <Box>
                <h4>{title}</h4>
                <p>{desc}</p>
            </Box>
        </Link>
    </HStack>

)

const Big = ({title, img, desc}) => (
    <HStack>
        <Link to={'/single'}>
            <Image src={img} alt={title} />
            <Box id="carouselItemText">
                <h4>{title}</h4>
                <p>{desc}</p>
            </Box>
        </Link>
    </HStack>
)

export default Sliders