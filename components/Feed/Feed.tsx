'use client'
import React, {useEffect} from 'react'
import { FeedContainerStyle } from './FeedStyle'
import PostCard from '../PostCard/PostCard';
import data from "../../public/data.json";
import { usePostStore } from '@/public/store';


function Feed() {

  useEffect(()=>{
    const tmp = localStorage.getItem('posts');
    let existingArray = tmp ? JSON.parse(tmp) : [];
    localStorage.setItem("posts", JSON.stringify(existingArray));
  },[]);

  const setPost = usePostStore((state) => state.setPost);
  setPost(data);

  return (
    <FeedContainerStyle>
      {data.map((item: any, index : number) => (
        <PostCard key={index} index={index}/>
      ))}
    </FeedContainerStyle>
    
  )
}

export default Feed