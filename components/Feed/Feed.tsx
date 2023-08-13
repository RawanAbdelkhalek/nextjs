'use client'
import React, {useEffect} from 'react'
import { FeedContainerStyle } from './FeedStyle'
import PostCard from '../PostCard/PostCard';
import data from "../../public/data.json";



function Feed() {

  useEffect(()=>{
    const tmp = localStorage.getItem('posts');
    let existingArray = tmp ? JSON.parse(tmp) : [];
    localStorage.setItem("posts", JSON.stringify(existingArray));
  },[]);

  return (
    <FeedContainerStyle>
      {data.map((item: any, index : any) => (
        <PostCard key={index} {...item}/>
      ))}
    </FeedContainerStyle>
    
  )
}

export default Feed