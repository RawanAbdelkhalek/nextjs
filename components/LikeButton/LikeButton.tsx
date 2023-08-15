'use client'
import React, { useState } from 'react';
import {LikeButtonStyle} from "./LikeButtonStyle"
import { usePostStore } from '@/public/store';


interface LikeButtonProps {
  isLiked: boolean;
  index: number; 
}


function LikeButton({index, isLiked} : LikeButtonProps) {

  const [likeState, setLikeState] = useState(isLiked);
  const post = usePostStore((state) => state.post);

  const toggle = () => {

    setLikeState(!likeState);
    
    const tmp = localStorage.getItem('posts');
    let existingArray = tmp ? JSON.parse(tmp) : [];
  
    if (!likeState) {
      existingArray.push(post[index]);
      localStorage.setItem("posts", JSON.stringify(existingArray));
    }
    else{
      let newArray = existingArray.filter((item: any) => JSON.stringify(item) !== JSON.stringify(post[index]));
      localStorage.setItem("posts", JSON.stringify(newArray));
    }
  }

  return (
    <LikeButtonStyle liked={likeState} onClick={toggle}/>
  )
}

export default LikeButton;