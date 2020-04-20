import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Nav = styled.div`
width: 100vw;
height: 3.6rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-size: 1rem;
text-transform: uppercase;
letter-spacing: .9px;
font-weight: 500;
a {
    height: 5rem;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    p {
        margin-top: .9rem;
        color: black;
    }
}
span {
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1.6px;
        background-color: rgba(0,0,0, .7);
    }
}
`
const ToShop = styled(Link)`

`
const ToCart = styled(Link)`

`
const LeftArrow = styled.span`
display: block;
width: 2rem;
height: 1.6px;
background-color: rgba(0,0,0, .7);
margin: 1.4rem;
&::before,
&::after {
    transform-origin: left;
}
&::before {
    transform: rotate(-30deg);
}
&::after {
    transform: rotate(30deg);
}
`

const RightArrow = styled.span`
display: block;
width: 2rem;
height: 1.6px;
background-color: rgba(0,0,0, .7);
margin: 1.4rem;
&::before,
&::after {
    transform-origin: right;
    margin-left: 1.2rem;
}
&::before {
    transform: rotate(30deg);
}
&::after {
    transform: rotate(-30deg);
}
`

function NavbarOptional() {


    return (

            <Nav>
                <Link to="/">
                    <LeftArrow/>
                    <p>Strona glowna</p>
                </Link>
                <Link to="/cart">
                    <p>Podsumowanie zakupow</p>
                    <RightArrow />
                </Link>
            </Nav>

    )
}

export default NavbarOptional
