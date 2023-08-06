'use client'
import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 10%;
    border-bottom: 1px solid grey;
`

export const CardHeaderStyle = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 50px;
`
export const ProfilePicStyle = styled.img`
    width: 7%;
    clip-path: circle();
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-left : 5% ;
    
`
export const UsernameStyle = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: small;
    width: 40%;
    color: #2E3B8A;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-left: 90px;
`
export const ImgContainerStyle = styled.div`
    position: relative;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
`
export const PostImgStyle = styled.img`
    width: 100%;
`
export const ProductNameStyle = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: Large;
    color: #eeeff7;
    position: absolute;
    bottom: 8%;
    left: 2%
`
export const ModelNameStyle = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: Large;
    color: #eeeff7;
    position: absolute;
    bottom: 3%;
    left: 2%
`

export const LikeCountBoxStyle = styled.div`
    position: relative;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    padding: 2%
`
export const LikeCountImg = styled.img`
    position: absolute;
    left: 5%;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`
export const LikeCountText = styled(UsernameStyle)`
    color: black;
    font-size: smaller;
    left: 5%;
    margin-left: 20px;
`

export const InfoBoxStyle = styled.div`
    position: relative;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    padding: 2%;
    top: 2%;
    bottom: 5%;
`
export const DescriptionTextStyle = styled(UsernameStyle)`
    color: #83858f;
    font-size: medium;
    font-weight: normal;
    margin-left: 0;
    left: 5%

`
export const TagStyle = styled(DescriptionTextStyle)`
    color: #334bc5;
    top: 130%
`

export const ViewCommentStyle = styled(TagStyle)`
    color: #83858f;
    top: 260%;

`
