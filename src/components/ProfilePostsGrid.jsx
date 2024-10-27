import React from 'react'
import data from '../assets/data.json'
import ProfilePost from './ProfilePost'
import { useLocation } from 'react-router-dom';
import PostY from './PostY';

const ProfilePostsGrid = () => {
  const location = useLocation();
  const current = location.pathname.split('/').filter(Boolean).pop()

  return (
    <div id="profilePostGrid">
      {
        current == 'profile'  ? data.posts.profile.your.map((i, index) => (
          <ProfilePost key={index} title={i.title} img={i.image} link={i.link} />
        )) : 
        data.posts.profile.saved.map((i, index) => (
          <PostY key={index} title={i.title} img={i.image} writer={{ "name" : i.writer.name, "image" : i.writer.avatar }} date={i.date} desc={i.desc} link={i.link} />
        ))
      }
    </div>
  )
}

export default ProfilePostsGrid