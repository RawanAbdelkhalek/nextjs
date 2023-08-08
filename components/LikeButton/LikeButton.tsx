'use client'
import React, { useState, useEffect } from 'react';
import {LikeButtonStyle} from "./LikeButtonStyle"

interface Post {
  name: string;
  profile_src: string;
  src: string;
  product_name: string;
  likes: number;
  description: string;
  tags: string[];
  comments_count: number;
  producer_name: string;
}

interface LikeButtonProps {
  // liked: boolean;
  object: Post; 
}


function LikeButton({object} : LikeButtonProps) {

  const [likeState, setLikeState] = useState(false);
  // const [posts, setPosts] = useState<Post[]>([]);

  const toggle = () => {
    setLikeState(!likeState);
  }
  

  useEffect(() => {
    const tmp = localStorage.getItem('posts');
    const existingArray = tmp ? JSON.parse(tmp) : [];

    if (likeState) {
      existingArray.push(object);
      localStorage.setItem("posts", JSON.stringify(existingArray));
    }
    else{
      console.log(typeof(object))
      const newArray = existingArray.filter((item: object) => item == object);
      // console.log(newArray)
      localStorage.setItem("posts", JSON.stringify(newArray));
    }

  },[likeState])

// useEffect( () => {
//   localStorage.setItem("posts", JSON.stringify(posts));
// }, [posts])

  return (
    <LikeButtonStyle liked={likeState} onClick={toggle}/>
  )
}

export default LikeButton;