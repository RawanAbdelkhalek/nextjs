import React from 'react'
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


function PostCard() {
    /*
    {
        "name": "John Doe",
        "profile_src": "https://example.com/profiles/profile1.jpg",
        "src": "https://example.com/photos/photo1.jpg",
        "product_name": "Product A",
        "likes": 150,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ["tag1", "tag2", "tag3"],
        "comments_count": 2
    },
    */
  return (
    <CardContainer>
        <CardHeaderStyle>
            <ProfilePicStyle
                src = "https://funylife.in/wp-content/uploads/2023/04/58_Cute-Girl-Pic-WWW.FUNYLIFE.IN_-1-1024x1024.jpg"
                alt = "img"
            />
            <UsernameStyle>Rawan Abbelkhalek Nasr Elkhishen</UsernameStyle>
        </CardHeaderStyle>

        <ImgContainerStyle>
            <PostImgStyle 
                src="https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg"
                alt = "Hi"
            />
            <ProductNameStyle>Ipon Case world class</ProductNameStyle>
            <ModelNameStyle>ADE 140</ModelNameStyle>
        </ImgContainerStyle>

        <LikeCountBoxStyle>
            <LikeCountImg src="/heart.svg" alt="LikeCount" width="15px"/>
            <LikeCountText>32 Likes</LikeCountText>
        </LikeCountBoxStyle>

        <InfoBoxStyle>
        <DescriptionTextStyle>hahkj dkshla  jdskhal  dajlh</DescriptionTextStyle>
        <TagStyle>#hello #1jdld</TagStyle>
        <ViewCommentStyle>View 12 comments</ViewCommentStyle>
        </InfoBoxStyle>

       
    </CardContainer>
  )
}

export default PostCard