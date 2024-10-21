import React from 'react'
import data from '../assets/data.json'
import PostX from './PostX'

const PostGrid = () => {
  return (
    <div id="new">
        {
          data.posts.new.map((i, index) => (
            <PostX key={index} title={i.title} img={i.image} writer={{ "name" : i.writer.name, "image" : i.writer.avatar }} date={i.date} desc={i.desc} link={i.link} />
          ))
        }
    </div>
  )
}

export default PostGrid