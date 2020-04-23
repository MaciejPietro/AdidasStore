import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'
import { useSelector } from 'react-redux'

const Wrapper = styled.nav`
visibility: ${({visible}) => visible ? "visible" : "hidden"};
width: 50vw;
height: 12rem;
background-color: white;
position: absolute;
top: 5rem;
right: 0;
z-index: 3;
border-bottom: 2px solid black;
border-left: 2px solid black;
border-top: 10px solid white;
transition: .6s;
transform: ${({visible}) => visible ? "translate(0, -5px)" : "translate(50vw, -5px)"};
`

function Sidebar() {
    const sidebar = useSelector(state => state.sidebar)

    return (
        <Wrapper className="sticky-top ml-auto" visible={sidebar}>
            <Menu direction={"column"} color={"black"}/>
        </Wrapper>
    )
}

export default Sidebar
