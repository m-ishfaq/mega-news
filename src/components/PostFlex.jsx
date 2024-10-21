import React from 'react'
import PostY from './PostY'

const PostFlex = ({data}) => {
  return (
    <div id='popular'>
        {
            data.map((i, index) => (
              <PostY key={index} title={i.title} img={i.image} writer={{ "name" : i.writer.name, "image" : i.writer.avatar }} date={i.date} desc={i.desc} link={i.link} />
            ))
        }
    </div>
  )
}

export default PostFlex