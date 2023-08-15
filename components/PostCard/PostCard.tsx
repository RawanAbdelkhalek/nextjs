'use client'
import React from 'react';
import { usePostStore } from '@/public/store';
import LikeButton from "../LikeButton/LikeButton";
import { CardHeaderStyle, 
        ProfilePicStyle, 
        UsernameStyle,
        PostImgStyle, 
        ImgContainerStyle,
        CardContainer,
        ProductNameStyle,
        ModelNameStyle,
        LikeCountBoxStyle,
        LikeCountImg,
        LikeCountText,
        DescriptionTextStyle,
        InfoBoxStyle,
        TagStyle,
        ViewCommentStyle,} from './PostCardStyle';

interface PostCardProps {
    index : number;
}

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

function PostCard( {index} : PostCardProps) {
    
    const post = usePostStore((state) => state.post);
    //console.log(post[index])

    const tmp = localStorage.getItem('posts');
    const isLiked = tmp?.includes(JSON.stringify(post[index])) || false;

    const { name, profile_src, src, product_name, likes,description,tags, comments_count, producer_name } : any = post[index];

    let tagText = ""
    if(typeof(tags) != "undefined" && tags.length > 0){
        for(let i=0; i<tags.length; i++){
            tagText += ('#'+tags[i]+" ");
        }
    }
    
  return (
    <CardContainer>
        <CardHeaderStyle>
            <ProfilePicStyle
                src = {profile_src}
                alt = "profilePic"
            />
            <UsernameStyle>{name}</UsernameStyle>
        </CardHeaderStyle>

        <ImgContainerStyle>
            <PostImgStyle 
                src = {src}
                alt = "ProductPic"
            />
            <ProductNameStyle>{product_name}</ProductNameStyle>
            <ModelNameStyle>{producer_name}</ModelNameStyle>
            <LikeButton isLiked={isLiked} index={index}/>
        </ImgContainerStyle>

        <LikeCountBoxStyle>
            <LikeCountImg src="/heart.svg" alt="LikeCount" width="15px"/>
            <LikeCountText>{likes} Likes</LikeCountText>
        </LikeCountBoxStyle>

        <InfoBoxStyle>
        <DescriptionTextStyle>{description}</DescriptionTextStyle>
        <TagStyle>{tagText}</TagStyle>
        <ViewCommentStyle>View {comments_count} comments</ViewCommentStyle>
        </InfoBoxStyle>
    </CardContainer>
  )
}

export default PostCard