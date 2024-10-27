import { Box, Button, FormControl, FormLabel, Grid, HStack, Image, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaAlignLeft, FaCode, FaImage, FaPlus, FaRegEye } from 'react-icons/fa6';
import { IoIosLink, IoIosSend, IoMdColorFilter } from 'react-icons/io';
import { CiVideoOn } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import data from '../assets/data.json'
import { Link, useLocation } from 'react-router-dom';

const ProfilePostForm = () => {
  const location = useLocation();
  const current = location.pathname.split('/').filter(Boolean).pop()

  return (
    <>
      <Box id='subMenu'>
        <MenuItem name={'Send Post'} link={'/create-new'} active={current == 'create-new' ? true : false} />
        <MenuItem name={'Send Video'} link={'/create-new/video'} active={current == 'video' ? true : false} />
      </Box>
      <Grid id="postForm"> 
        <VStack id='inputs'>
          <HStack>
            <SimpleInput type={'text'} name={'Title'} />
            <InputTags type={'text'} name={'Tags'} />
          </HStack>
          <TextAreaInput name={'Explanation'} />
          {
            current == 'video' && (<PostGallery name={'Image Gallery'} marginTop={'10'} />)
          }
        </VStack>

        <VStack id='media'>
          <FileInput name={current == 'create-new' ? 'Add Image' : 'Add Video'} Svg={current == 'create-new' ? FaImage : CiVideoOn} format={current == 'create-new' ? 'Image' : 'Video'} />
          <HStack id="actionBtn">
            <ActionButton name={'Draft'} Svg={IoSaveOutline} type='editor' />
            <ActionButton name={'Preview'} Svg={FaRegEye} type='editor' />
            <ActionButton name={'Publish'} Svg={IoIosSend} type='action' />
          </HStack>
        </VStack>
      </Grid>
    </>
  )
}

const MenuItem = ({name, link, active}) => (
  <Link to={`/profile${link}`} id='menuItem' data-active={active}>
    {name}
  </Link>
)  

const SimpleInput = ({type, name}) => (
    <FormControl id='inputSimple'>
      <FormLabel>{name}</FormLabel>
      <Input type={type} placeholder="" />
    </FormControl>
);

const InputTags = ({type, name}) => (
    <FormControl id='inputTag'>
        <FormLabel>{name}</FormLabel>
        <HStack borderRadius={'4px'} id='inputTag'>
            <Input type={type} placeholder="" />
            <Button p={'0'} variant={'ghost'}>
                <FaPlus size={'15'} enableBackground='black'/>
            </Button>
        </HStack>
    </FormControl>
)

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
        <Textarea rows="11" size={'xl'} placeholder="Type..." />
      </VStack>
    </FormControl>
)

const EditorButton = ({Svg, name}) => (
  <Box id="toolbarBtn">
    <Svg />
    <Text >{name}</Text>
  </Box>
)

const ActionButton = ({Svg, name, type}) => (
  <Box id="toolbarBtn" data-type={type}>
    <Svg />
    <Text >{name}</Text>
  </Box>
)

const FileInput = ({name, Svg, format}) => (
  <FormControl id='fileInput'>
    {
      name != '' && (<FormLabel>{name}</FormLabel>)
    }
    <VStack id='fileInputBox'>
      <Svg size={'7vmax'} color='#d5d5d5' height={'50%'}/>
      <Text>Drop {format} Here, Paste Or</Text>
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

const PostGallery = ({name}) => (
  <FormControl id='textArea'>
    <FormLabel>{name}</FormLabel>
    <HStack id='postGallery'>
      <FileInput name={''} Svg={FaImage} format={'Image'} />
      <Grid id='galleryGrid'> 
        <ImageFrame img={data.images.profile.post[0]}/>
        <ImageFrame img={data.images.profile.post[1]}/>
        <ImageFrame img={data.images.profile.post[2]}/>
        <ImageFrame img={data.images.profile.post[3]}/>
        <ImageFrame img={data.images.profile.post[3]}/>
        <ImageFrame img={data.images.profile.post[3]}/>
        <ImageFrame img={data.images.profile.post[3]}/>
        <ImageFrame img={data.images.profile.post[3]}/>
        <ImageFrame img={data.images.profile.post[3]}/>
        <ImageFrame img={data.images.profile.post[3]}/>
      </Grid>
    </HStack>
  </FormControl>
)

const ImageFrame = ({img}) => (
  <div>
    <Image src={img} alt={`Image`}/>
    <span id='icon'>
      <MdDeleteOutline size={'45'} />
    </span>
  </div>
)

export default ProfilePostForm