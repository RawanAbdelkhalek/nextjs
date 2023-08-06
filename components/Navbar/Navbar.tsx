import { NavbarStyle } from "./NavbarStyle";
import NavbarButton from "../NavButton/NavButton";
import React from 'react'

function Navbar() {
  return (
    <NavbarStyle>
      <NavbarButton page="Home" src="/icons8-home-48.png"/>
      <NavbarButton page="Liked" src="/icons8-heart-50.png"/>
    </NavbarStyle>
  )
}

export default Navbar