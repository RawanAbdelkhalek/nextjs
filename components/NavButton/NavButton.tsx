'use client'
import React, { useState } from 'react';
import { NavSectionStyle, IconStyle, TextStyle} from "./NavButtonStyle";
import { useRouter } from 'next/navigation';

function NavButton({page, src}: any) {

    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(page);
    
    const handleClick = () =>{
        console.log("Page Changed");
        if(currentPage == "Home") router.replace("/")
        else router.replace("/fav")
    }
  return (
    <NavSectionStyle onClick={handleClick}>
        <IconStyle
            src = {src}
            alt = {page}
        />
        <TextStyle>{page}</TextStyle>
      </NavSectionStyle>
  )
}

export default NavButton