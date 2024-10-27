import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import { Flex, HStack, Image, VStack } from '@chakra-ui/react'
import { IoIosMail, IoIosPhonePortrait, IoMdTime } from 'react-icons/io'
import data from '../assets/data.json'
import { FaFax } from 'react-icons/fa'
import { BiTargetLock } from 'react-icons/bi'

const About = () => {
  return (
    <VStack id='about'>
        <Breadcrumbs current={'About Us'} />
        <VStack id='explanation'>
            <h3>We pay attention to your needs and do the best design.</h3>
            <HStack>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat.
                </p>
                <Image src={data.images.about.top} />
            </HStack>
        </VStack>

        <HStack id='information'>
            <a href='https://maps.app.goo.gl/' target='blank'>
                <Image src={data.images.about.map} />
            </a>
            
            <VStack>
                <Heading title='Mega New Information' />
                <VStack>
                    <InfoItem key={"Email"} blank={'blank'} name={"Email"} value={'management@mega.news'} type={"mailto:"} Svg={IoIosMail}/>
                    <InfoItem key={"Phone"} blank={''} name={"Phone"} value={'+1(234) 567-890'} type={'tel:'} Svg={IoIosPhonePortrait}/>
                    <InfoItem key={"Fax"} blank={''} name={"Fax"} value={'+1(234) 567-890'} type={'tel:'} Svg={FaFax}/>
                    <InfoItem key={"Address"} blank={'blank'} name={"Address"} value={'1234 Foxrun St.New Lenox, IL 123456'} type={'https://maps.app.goo.gl/'} Svg={BiTargetLock}/>
                    <p>
                        <IoMdTime />
                        <span>
                            Responding 24 Hours A Day, 7 Days A Week
                        </span>
                    </p>
                </VStack>
            </VStack>
        </HStack>

        <VStack id="team">
            <Heading title={'Mega News Team'} />
            <HStack id='personas'>
                {
                    data.images.about.team.map((i, index) => (
                        <Member key={index} name={i.name} designation={i.designation} img={i.image} />
                    ))
                }
            </HStack>
        </VStack>
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

const InfoItem = ({name, value, Svg, type, blank}) => (
    <p>
        <Svg />
        <span>
            <span>{name} : </span><a href={`${type}${value}`} target={blank}>{value}</a>
        </span>
    </p>
)

const Member = ({name, designation, img}) => (
    <VStack id='member'>
        <Image src={img} />
        <p>{designation}</p>
        <h4>{name}</h4>
    </VStack>
)

export default About