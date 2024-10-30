import React from 'react'
import Sliders from './Sliders'
import Heading from './Heading'
import PostFlex from './PostFlex'
import Sports from './Sports'
import PostGrid from './PostGrid'
import Videos from './Videos'
import data from '../assets/data.json'
import Weather from './Weather'
import TopTags from './TopTags'

const Home = () => {
  return (
    <>
      <TopTags />
      <Sliders />
      <Heading title={'Popular Posts'} link={'popular-posts'} />
      <PostFlex data={data.posts.popular}/>
      <Sports />
      <Heading title={'New Posts'} link={'new-posts'} />
      <PostGrid />
      <Videos />
      <Heading title={'Trendy Posts'} link={'trendy-posts'} />
      <PostFlex data={data.posts.trendy}/>
      <Weather bg={data.images.home.weather.chart} city={data.images.home.weather.city} />
      <Heading title={'Top Posts'} link={'top-posts'} />
      <PostFlex data={data.posts.top}/>
    </>
  )
}

export default Home