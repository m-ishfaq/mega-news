import { Box, Button, Flex, FormControl, FormLabel, Grid, HStack, Image, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@chakra-ui/icons'
import data from '../assets/data.json'
import { FaPlus, FaRegBookmark, FaRegCalendar, FaRegComment } from 'react-icons/fa'
import { CiFolderOn } from 'react-icons/ci'
import { IoIosSend, IoIosShareAlt } from 'react-icons/io'
import { Angry, Better, Good, Happy, Neutral } from '../assets/Icons'
import PostFlex from './PostFlex'

const Single = () => {
  return (
    <VStack id='single'>
      <Breadcrumbs parent={'Abstract'} current={'How to Spend the Perfect Day on Croatia\'s Most Magical Island'} />
      <Grid id="wrapper">
        <VStack id='main-content'>
          <VStack id='info'>
            <h2>{data.single.title}</h2>
            <Image src={data.single.thumbnail} alt={data.single.title} />
          </VStack>
          <Stats />
          <VStack id='secondRow'> 
            <h2>{data.single.first_sub_heading}</h2>
            <p>
              Upon arrival, your senses will be rewarded with the pleasant scent of lemongrass oil used to clean the natural wood found throughout the room, creating a relaxing atmosphere within the space.
            </p>
            <p>
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.
            </p>
            <Image src={data.single.image} alt={data.single.first_sub_heading} />
          </VStack>
          <VStack id='secondRow' marginTop={'0'} paddingTop={'0'}>  
            <h2>{data.single.second_sub_heading}</h2>
            <p>
              When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats. Snorkeling equipment is available as well, so you can experience the ever-changing undersea environment.
            </p>
            <p>
              Not only do visitors to a bed and breakfast get a unique perspective on the place they are visiting, they have options for special packages not available in other hotel settings. Bed and breakfasts can partner easily with local businesses for a smoothly organized and highly personalized vacation experience. The Fife and Drum Inn offers options such as the Historic Triangle Package that includes three nights at the Inn, breakfasts, and admissions to historic Williamsburg, Jamestown, and Yorktown. Bed and breakfasts also lend themselves to romance.
            </p>
            <p>
              Part of the charm of a bed and breakfast is the uniqueness; art, décor, and food are integrated to create a complete experience. For example, the Fife and Drum retains the colonial feel of the area in all its guest rooms. Special features include antique furnishings, elegant four poster beds in some guest rooms, as well folk art and artifacts from the restoration period of the historic area available for guests to enjoy.
            </p>
          </VStack>

          <VStack id='comments'>
            <Heading title={'Comments'} />
            {
              data.single.comments.map((i, index) => (
                <Comment key={index} name={i.name} date={i.date} text={i.text} avatar={i.avatar} isReplied={i.reply.length == 0} replies={i.reply} />
              ))
            }
          </VStack>
          <VStack id='addComment'>
            <Heading title={'Add Comment'} />
            <VStack id='form'>
              <HStack>
                <VStack>
                  <SimpleInput name={'Name'} type={'text'} />
                  <SimpleInput name={'Website'} type={'text'} />
                  <SimpleInput name={'Email'} type={'email'} />
                </VStack>
                <TextAreaInput name={'Comment'} />
              </HStack>

              <HStack id='formBottom'>
                <HStack>
                  <p>Rate The Usefulness Of This Article</p>
                  <ul>
                    <li>
                      <Angry />
                    </li>
                    <li>
                      <Neutral />
                    </li>
                    <li>
                      <Better />
                    </li>
                    <li>
                      <Good />
                    </li>
                    <li>
                      <Happy />
                    </li>
                  </ul>
                </HStack>   
                <Button p={'0'} variant={'ghost'} id='sendBtn'>
                  <FaRegComment size={'20'} enableBackground='black'/> <span>Send Comment</span>
                </Button>               
              </HStack>
            </VStack>
          </VStack>
        </VStack>
        <VStack id='sidebar'>
          <HStack id="actionBtn">
            <ActionButton name={'Share'} Svg={IoIosSend} type='editor' />
            <ActionButton name={'Save'} Svg={FaRegBookmark} type='editor' />
            <ActionButton name={'Comment'} Svg={FaRegComment} type='editor' />
          </HStack>
          <Editor name={data.single.writer.name} img={data.single.writer.avatar} posts={data.single.writer.total_posts} />
          <Tag tags={data.tags} />
          <TopPosts top={data.single.top} />
          <Ad img={data.single.advertise[0]} />
          <Ad img={data.single.advertise[1]} />
        </VStack>
      </Grid>
      <Heading title={'Related Posts'}/>
      <PostFlex data={data.posts.popular} />
    </VStack>    
  )
}

const Breadcrumbs = ({parent, current}) => {
    return (
      <HStack id='breadcrumbs'>
        <Link to={'/'}>Home</Link>
        <ChevronRightIcon />
        <Link to={`/category?${parent.toLowerCase()}`}>{parent}</Link>
        <ChevronRightIcon />
        <Link>{current}</Link>
      </HStack>
    )
}

const Stats = () => (
  <Box id='stats'>
    <MenuItem name={'July 14, 2024'} Svg={FaRegCalendar} number={''}/>
    <MenuItem name={'Comments'} Svg={FaRegComment} number={': 35'}/>
    <MenuItem name={'Category'} Svg={CiFolderOn} number={': Abstract'}/>
  </Box>
)

const ActionButton = ({Svg, name, type}) => (
  <Box id="toolbarBtn" data-type={type}>
    <Svg />
    <Text >{name}</Text>
  </Box>
)

const MenuItem = ({Svg, name, number}) => (
  <Box id='writerMenuItem'>
    <Svg size={'15'}/>
    <h4>{name}</h4>
    <h4>{number}</h4>
  </Box>
) 

const Heading = ({title}) => {
  return (
    <Flex id="heading">
      <h3>
        {title}
      </h3>
    </Flex>
  )
}

const Comment = ({name, date, avatar, text, isReplied, replies}) => {
  if(isReplied) {
    return (
      <VStack id='comment'>
        <HStack id='compiler'>
          <Image src={avatar} alt={name} />
          <VStack>
            <h4>{name}</h4>
            <p>
              <FaRegCalendar size={10} /> 
              <span>{date}</span>
            </p>
          </VStack>
        </HStack>
        <p>
          {text}
        </p>
        <Box id='replyBtn'>
          <IoIosShareAlt />
          <span>
            Reply
          </span>
        </Box>
      </VStack>
    )
  } else {
    return (
      <VStack id='repliedComment'>
        <VStack id='comment'>
          <HStack id='compiler'>
            <Image src={avatar} alt={name} />
            <VStack>
              <h4>{name}</h4>
              <p>
                <FaRegCalendar size={10} /> 
                <span>{date}</span>
              </p>
            </VStack>
          </HStack>
          <p>
            {text}
          </p>
          <Box id='replyBtn'>
            <IoIosShareAlt />
            <span>
              Reply
            </span>
          </Box>
        </VStack>
        {
          replies.map((i, index) => (
            <VStack key={index} id='reply'>
              <HStack id='compiler'>
                <Image src={i.avatar} alt={i.name} />
                <VStack>
                  <h4>{i.name}</h4>
                  <p>
                    <FaRegCalendar size={10} /> 
                    <span>{i.date}</span>
                  </p>
                </VStack>
              </HStack>
              <p>
                {i.text}
              </p>
            </VStack>
          ))
        }
      </VStack>
    )
  }
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
    <Textarea rows="8" size={'xl'} placeholder="Write Something..." />
  </FormControl>
)

const Editor = ({name, img, posts}) => (
  <HStack id='editor'>
    <Image src={img} alt={name} />
    <VStack>
      <Link to={'/writer'}>{name}</Link>
      <Box id='followBtn'>
        <FaPlus size={'12'} />
        <span>Follow</span>
      </Box>
    </VStack>
    <span>
      {posts} Posts
    </span>
  </HStack>
)

const Tag = ({tags}) => (
  <VStack id='tags'>
    <Heading title={'Tags'} />
    <HStack id='list'>
      {
        tags.map((i, index) => (
          <Link key={index} to={`/tags?${i.name.toLowerCase().replace(/\s+/g, '-')}`} >{i.name}</Link>
        ))
      }
    </HStack>
  </VStack>
)

const TopPosts = ({top}) => (
  <VStack id='topPost'>
    <Heading title={'Top Posts'} />
    <VStack id='list'>
      {
        top.map((i, index) => (
          <HStack id='top'>
            <Image src={i} alt={'Top Post'} />
            <VStack>
              <Link to={'/single'}>How We Built The First Real Self Driving Car</Link>
              <Link to={`/category?technology`}>Technology</Link>
            </VStack>
          </HStack>
        ))
      }
    </VStack>
  </VStack>
)

const Ad = ({img}) => (
  <Box
    id='ad'
    backgroundImage={img}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    width="100%"
    height="160px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius={'10px'}
  >
    <Link to={'/contact'}>Contact To Advertise You Brand Here</Link>
  </Box>
)

export default Single