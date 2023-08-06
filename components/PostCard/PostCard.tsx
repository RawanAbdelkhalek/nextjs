import React from 'react';
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


function PostCard({ name, profile_src, src, product_name, likes,description, 
    tags, comments_count, producer_name } : any) {

    let tagText = "";
    for(let i=0; i<tags.length; i++){
            tagText += ('#'+tags[i]+" ");
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