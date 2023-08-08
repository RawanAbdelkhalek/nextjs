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
  const [posts, setPosts] = useState<Post[]>([]);

  const toggle = () => {

    setLikeState(!likeState);
    
    const tmp = localStorage.getItem('posts');
    let existingArray = tmp ? JSON.parse(tmp) : [];
  
    if (!likeState) {
      existingArray.push(object);
      localStorage.setItem("posts", JSON.stringify(existingArray));
      setPosts(existingArray);
    }
    else{
      let newArray = existingArray.filter((item:string) => item.name !== object.name);;
      // for(let i=0; i<existingArray.length; i++){
      //   if(existingArray[i].name != object.name)
      //     newArray.push(existingArray[i]);
      // }
      localStorage.setItem("posts", JSON.stringify(newArray));
      setPosts(newArray);
    }
  }

  // useEffect(() => {
  //   const tmp = localStorage.getItem('posts');
  //   let existingArray = tmp ? JSON.parse(tmp) : [];

  //   if (likeState) {
  //     existingArray.push(object);
  //     localStorage.setItem("posts", JSON.stringify(existingArray));
  //   }
  //   else{
  //     let newArray = [];
  //     for(let i=0; i<existingArray.length; i++){
  //       if(existingArray[i] != object){
          
  //         if(existingArray[i].name != object.name )newArray.push(existingArray[i]);
  //       }
  //     }
  //     localStorage.setItem("posts", JSON.stringify(newArray));
  //   }

  // },[likeState, object])

  useEffect(()=>{
    const tmp = localStorage.getItem('posts');
    setPosts(tmp ? JSON.parse(tmp) : []);
  },[]);

  return (
    <LikeButtonStyle liked={likeState} onClick={toggle}/>
  )
}

export default LikeButton;