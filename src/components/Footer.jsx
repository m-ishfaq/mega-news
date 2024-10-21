import { Flex, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Footer>
        <HStack>
            <VStack>
                <Heading title={'Mega News'}/>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin
                </article>
                <Heading title={'Newsletter'} />
            </VStack>

            <VStack>
                
            </VStack>
        </HStack>
    </Footer>
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

export default Footer