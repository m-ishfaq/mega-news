import { Box, Button, FormControl, FormLabel, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import { FaAlignLeft, FaCode, FaImage, FaRegFolder } from "react-icons/fa";
import { IoIosLink, IoIosSend, IoMdColorFilter } from "react-icons/io";
import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const Contact = () => {
  return (
    <VStack id='contact'>
      <Breadcrumbs current={'Contact Us'} />
      <VStack id='form'>
        <HStack id='firstRow'>
          <SimpleInput type={'text'} name="Subject" />
          <SimpleInput type={'text'} name="Name" />
          <SimpleInput type={'email'} name="Email" />
        </HStack>
        <HStack id='secondRow'>
          <TextAreaInput name={'Explanation'} />
          <FileInput name={'Add File'} />
        </HStack>
        <Button p={'0'} variant={'ghost'} id='sendBtn'>
          <IoIosSend size={'20'} enableBackground='black'/> <span>Send</span>
        </Button>
      </VStack>
    </VStack>
  )
}

const SimpleInput = ({type, name}) => (
  <FormControl id='inputSimple'>
    <FormLabel>{name}</FormLabel>
    <Input type={type} placeholder="" />
  </FormControl>
);

const TextAreaInput = ({name}) => (
  <FormControl id='textArea'>
    <FormLabel>{name}</FormLabel>
    <VStack id='textAreaBox'>
      <HStack>
        <EditorButton Svg={FaImage} name={"Image"} />
        <EditorButton Svg={IoMdColorFilter} name={"Color"} />
        <EditorButton Svg={FaCode} name={"Text"} />
        <EditorButton Svg={FaAlignLeft} name={"Align"} />
        <EditorButton Svg={IoIosLink} name={"Link"} />
      </HStack>
      <Textarea rows="7" size={'xl'} placeholder="Type..." />
    </VStack>
  </FormControl>
)

const FileInput = ({name}) => (
  <FormControl id='fileInput'>
    <FormLabel>{name}</FormLabel>
    <VStack id='fileInputBox'>
      <FaRegFolder size={'7vmax'} color='#d5d5d5' height={'50%'}/>
      <Text>Drop Images Here, Paste Or</Text>
      <Input type={'file'} required={true} css={{ 
        "&::file-selector-button": {
          border: 'none',
          width: 'calc(100% + 36px)',
          height: '100%',
          marginLeft: '-18px',
          color: '#1A202C',
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }
      }}/>

    </VStack>
  </FormControl>
)

const EditorButton = ({Svg, name}) => (
  <Box id="toolbarBtn">
    <Svg />
    <Text >{name}</Text>
  </Box>
)

export default Contact