import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'
import Sidebar from '../Sidebar/Sidebar'


const Wrapper = styled.nav`
width: 100vw;
height: 3.6rem;
box-sizing: border-box;
background-color: black;
@media (max-width: 575px) {
    display: none;
}
`

const NavbarBlack = () => {


    return (
        <>
            <Wrapper>
                <Menu direction={"row"} color={"white"}/>
            </Wrapper>
            <Sidebar />
        </>
    )
}

export default NavbarBlack
