import { Box, Button, FormControl, FormLabel, Grid, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import { FaAlignLeft, FaCode, FaImage, FaRegSave } from "react-icons/fa";
import { IoIosLink, IoMdColorFilter } from "react-icons/io";
import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const ProfileEdit = () => {
  return (
    <VStack id='contact'>
      <Breadcrumbs current={'Profile Edit'} />
      <VStack id='form'>
        <Grid id='firstRow'>
          <SimpleInput type={'text'} name="First Name" />
          <SimpleInput type={'text'} name="Last Name" />
          <SimpleInput type={'text'} name="User Name" />
          <SimpleInput type={'password'} name="Old Password" />
          <SimpleInput type={'password'} name="Password" />
          <SimpleInput type={'email'} name="Email" />
        </Grid> 
        <BannerUpload name={'Add Banner'} />
        <HStack id='secondRow'>
          <TextAreaInput name={'Explanation'} />
          <FileInput name={'Add Image'} />
        </HStack>
        <Button p={'0'} variant={'ghost'} id='sendBtn'>
          <FaRegSave size={'20'} enableBackground='black'/> <span>Save</span>
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
      <FaImage size={'7vmax'} color='#d5d5d5' height={'50%'}/>
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

const BannerUpload = ({name}) => (
    <FormControl id='BannerUpload'>
        <FormLabel>{name}</FormLabel>
        <HStack id="banner">
            <FaImage size={'8vmax'} color='#d5d5d5' height={'50%'}/>
            <VStack>
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
        </HStack>
    </FormControl>
)
  
const EditorButton = ({Svg, name}) => (
    <Box id="toolbarBtn">
        <Svg />
        <Text >{name}</Text>
    </Box>
)

export default ProfileEdit