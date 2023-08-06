'use client'
import styled from "styled-components";

export const NavbarStyle = styled.nav`
    width: 100%;
    height: 50px;
    background-color: #E1569D;
    display: flex;
    z-index: 40;
    @media (max-width: 700px) {
        bottom: 0;
        position: fixed;
    }
`
