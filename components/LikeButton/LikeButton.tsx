'use client'
import React, { useState } from 'react';
import {LikeButtonStyle} from "./LikeButtonStyle"


function LikeButton() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
      setLiked(!liked);
    };
  
    return (<LikeButtonStyle liked={liked} onClick={toggleLike} />)
}

export default LikeButton