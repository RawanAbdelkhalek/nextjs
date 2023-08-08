'use client'
import Navbar from "../../components/Navbar/Navbar";
import PostCard from "@/components/PostCard/PostCard";
import { FeedContainerStyle } from "@/components/Feed/FeedStyle";
import {useEffect, useState} from 'react';



export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const value = localStorage.getItem("posts");
    setData(value ? JSON.parse(value) : []);
  }, []);

  return (
  <div>
    <title>App</title>
    <Navbar></Navbar>
    <FeedContainerStyle>
      {data.map((item: any, index : any) => (
        <PostCard key={index} {...item}/>
      ))}
  </FeedContainerStyle>
  </div>
  )
}
