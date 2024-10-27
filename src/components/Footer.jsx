import { Button, Flex, Grid, HStack, Image, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoIosMail } from 'react-icons/io'
import { CiInstagram, CiTwitter } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import data from '../assets/data.json'

const Footer = () => {
  return (
    <footer>
        <div>
          <HStack id='leftFooter'>
            <VStack id='fAbout'>
              <Heading title={'Mega News'}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin
              </p>
              <Heading title={'Newsletters'} />
              <HStack borderRadius={'4px'} id='newsletter'>
                <Input placeholder='Write Your Email...' type='email' border={'none'} outline={'none'} focusBorderColor='none'/>
                <Button p={'0'} variant={'ghost'}>
                  <IoIosMail size={'20'} enableBackground='black'/>
                </Button>
              </HStack>
            </VStack>

            <VStack id='catSocial'>
              <Heading title={'Categories'}/>
              <VStack id='cat'>
                <Link to={'/culture'} >Culture</Link>
                <Link to={'/fashion'} >Fashion</Link>
                <Link to={'/featured'} >Featured</Link>
                <Link to={'/food'} >Food</Link>
                <Link to={'/healthy-living'} >Healthy Living</Link>
                <Link to={'/technology'} >Technology</Link>
              </VStack>
              <Heading title={'Socials'}/>
              <HStack id='social'>
                <a href='' target='blank'>
                  <CiInstagram />
                  <span>Instagram</span>
                </a>
                <a href='' target='blank'>
                  <CiTwitter />
                </a>
              </HStack>
            </VStack>

            <HStack id='footerBottom'>
              <HStack>
                <Link to={'/privacy-policy'}>Privacy Policy</Link>
                <span>|</span>
                <Link to={'/terms-and-conditions'}>Terms & Conditions</Link>
              </HStack>
              <HStack>
                <p>All Copyright &copy; 2022 Reserved</p>
              </HStack>
            </HStack>
          </HStack>

          <VStack id="comments">
            <Heading title={'New Comments'}/>
            <Comment key={0} link={'/single'} name="Ellsmartx" message="How Nice Does This 😍 Look I Feel It Should Be Delicious, Thank You" />
            <Comment key={1} link={'/single'} name="Cassia" message="Take A Rest, I'll Be Cheer Up You Again in 2 Next Game Go Go Go" />
            <Comment key={2} link={'/single'} name="Amanda" message="You Were Stunning Today, Jan! 🩷 Great Match 👍👍" />
            <Comment key={3} link={'/single'} name="Denis Simonassi" message="It Was A Great Match Today Janzi! You Did Great" />
          </VStack>

          <VStack id='galleryCon'>
            <Heading title={'Follow Us'}/>
            <Grid id="gallery">
              {
                data.images.gallery.map((i, index) => (
                  <Gallery img={i} key={index} link={'https://instagram.com'}/>
                ))
              }
            </Grid>
          </VStack>
        </div>
    </footer>
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

const Comment = ({name, message, link}) => (
  <Link to={link} id='comment'>
    <h4>{name}</h4>
    <p>{message}</p>
  </Link>
)

const Gallery = ({img, key, link}) => (
  <div>
    <Image src={img} alt={`${key} Image`} />
    <a href={link} target='blank' id='icon'>
      <CiInstagram size={'45'} />
    </a>
  </div>
)

export default Footer