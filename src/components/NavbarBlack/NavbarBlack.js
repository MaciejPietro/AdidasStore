import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'

const Wrapper = styled.nav`
width: 100vw;
height: 3.6rem;
box-sizing: border-box;
background-color: black;
@media (max-width: 575px) {
    height: 0;
}
`


function NavbarWhite() {
    return (
        <Wrapper>
            <Menu />
        </Wrapper>
    )
}

export default NavbarWhite
