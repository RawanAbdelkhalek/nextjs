import React from 'react'
import { FeedContainerStyle } from './FeedStyle'
import PostCard from '../PostCard/PostCard';
import data from "../../public/data.json";

function Feed() {
  return (
    <FeedContainerStyle>
      {data.map((item: any, index : any) => (
        <PostCard key={index} {...item}/>
      ))}
    </FeedContainerStyle>
    
  )
}

export default Feed