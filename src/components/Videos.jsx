import { Box, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import data from '../assets/data.json'
import { Link } from 'react-router-dom'
import Heading from './Heading'

const Videos = () => {
  return (
    <div style={{ background: "#F5F5F5", marginTop: "1.3vmax", paddingTop: "1px" }} id='videosContainer'>
        <Heading title={'Latest Videos'} link={'latest-videos'} />
        <div id="videos">
            <div>
                <HStack
                    backgroundImage={data.posts.video[0].image}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    width="45%"
                    height="350px"
                >
                    <Link to={data.posts.video[0].link}>
                        <PlayBtn />
                        <Box>
                            <h4>{data.posts.video[0].title}</h4>
                            <p>{data.posts.video[0].desc}</p>
                        </Box>
                    </Link>
                </HStack>

                <HStack>
                    {
                        data.posts.video.map((i, index) => (
                            index !== 0 && (<VideoItem key={index} title={i.title} image={i.image} link={i.link} desc={i.desc} />)
                        ))
                    }
                </HStack>
            </div>
        </div>
    </div>
  )
}

const PlayBtn = () => (<svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="60" fill="white" fill-opacity="0.75"/>
                    <path d="M75.8438 56.1562C77.1562 57 78 58.5 78 60C78 61.5938 77.1562 63.0938 75.8438 63.8438L48.8438 80.3438C47.4375 81.1875 45.6562 81.2812 44.25 80.4375C42.8438 79.6875 42 78.1875 42 76.5V43.5C42 41.9062 42.8438 40.4062 44.25 39.6562C45.6562 38.8125 47.4375 38.8125 48.8438 39.75L75.8438 56.1562Z" fill="#F81539"/>
                </svg>)

const VideoItem = ({title, image, link, desc}) => (
    <Link to={link}>
        <Image src={image} alt={title} />

        <VStack>
            <h4>{title}</h4>
            <p>{desc}</p>
        </VStack>
    </Link>
)

export default Videos