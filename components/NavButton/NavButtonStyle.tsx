'use client'
import styled from "styled-components";

export const NavSectionStyle = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    cursor: pointer;
    align-items: center;
    &:hover {
        background-color: gray;
    }
    
`
export const IconStyle = styled.img`
    width: 25px; 
    height: 25px;
    display: block;
    margin: auto;
    
`

export const TextStyle = styled.p`
    position: absolute;
    margin-left: 28%;
    @media (max-width: 700px) {
        display: none;
    }
`
