'use client'
import Navbar from "../../components/Navbar/Navbar";
import PostCard from "@/components/PostCard/PostCard";
import { FeedContainerStyle } from "@/components/Feed/FeedStyle";
import {useEffect, useState} from 'react';
import { usePostStore } from "@/public/store";



export default function Home() {

  const [data, setData] = useState([]);
  console.log(data.length);

  useEffect(() => {
    const value = localStorage.getItem("posts");
    setData(value ? JSON.parse(value) : []);
  }, []);

  const setPost = usePostStore((state) => state.setPost);
  setPost(data);

  return (
  <div>
    <title>App</title>
    <Navbar></Navbar>
    <FeedContainerStyle>
      {data.map((item: any, index : number) => (
        <PostCard key={index} index={index}/>
      ))}
  </FeedContainerStyle>
  </div>
  )
}
