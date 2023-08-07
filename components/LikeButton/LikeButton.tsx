'use client'
import React, { useState, useEffect } from 'react';
import {LikeButtonStyle} from "./LikeButtonStyle"

// interface Post {
//   name: string;
//   profile_src: string;
//   src: string;
//   product_name: string;
//   likes: number;
//   description: string;
//   tags: string[];
//   comments_count: number;
//   producer_name: string;
// }

interface LikeButtonProps {
  liked: boolean;
  object: string; 
}


function LikeButton({liked, object} : LikeButtonProps) {

  const [likeState, setLikeState] = useState(false);
  const [posts, setPosts] = useState<string[]>([]);

  //console.log(object);
  //console.log(likeState);

  const toggle = () => {
    setLikeState(!likeState);
  }
  

  useEffect(() => {
    console.log("before: ", posts);
    const tmp = localStorage.getItem('posts');
    const existingArray = tmp ? JSON.parse(tmp) : [];

    if (likeState) {
      existingArray.push(object);
      localStorage.setItem("posts", JSON.stringify(existingArray));
    }
    else{
      const newArray = existingArray.filter(item => item !== object);
      localStorage.setItem("posts", JSON.stringify(newArray));
    }
    console.log("after: ", posts)

  },[likeState])

//     } else {
//       setPosts((prevPosts) => prevPosts.filter(post => post !== object));
//     }
//   }


//   useEffect(() => {
//     if (!likeState) {

//       console.log("before: ", posts);
//       const existingArray = JSON.parse(localStorage.getItem('posts')) || [];
//       console.log("after: ", posts);
//       console.log("obj: ", object)
//     } else {
//       setPosts((prevPosts) => prevPosts.filter(post => post !== object));
//     }
    
//     localStorage.setItem("posts", JSON.stringify(posts));
// }, [likeState, object, posts]);

useEffect( () => {
  localStorage.setItem("posts", JSON.stringify(posts));
}, [])



  return (
    <LikeButtonStyle liked={likeState} onClick={toggle}/>
  )
}

export default LikeButton;