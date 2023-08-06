import React from 'react'
import { FeedContainerStyle } from './FeedStyle'
import PostCard from '../PostCard/PostCard';

function Feed() {
  return (

    <FeedContainerStyle>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
    </FeedContainerStyle>
    
  )
}

export default Feed