import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
width: 100vw;
height: 100vh;
`
const Nav = styled.div`
width: 100vw;
height: 5rem;
border: 2px solid blue;
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 1.2rem;
text-transform: uppercase;
letter-spacing: 1.2px;
div {
    height: 5rem;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    p {
        margin: auto 0;
    }
}
span {
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 1.2rem;
        height: 2.6px;
        background-color: grey;
        border-radius: 50%;
}
}
`
const ToShop = styled.div`
`
const ToCart = styled.div`
`
const LeftArrow = styled.span`
display: block;
width: 2.4rem;
height: 2.6px;
background-color: gray;
margin: auto 1rem;
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
width: 2.4rem;
height: 2.6px;
background-color: gray;
margin: auto 1rem;
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

function Item() {
    return (
        <Wrapper>
            <Nav>
                <ToShop>
                    <LeftArrow/>
                    <p>Strona glowna</p>
                </ToShop>
                <ToCart>
                    <p>Podsumowanie zakupow</p>
                    <RightArrow />
                </ToCart>
            </Nav>
        </Wrapper>
    )
}

export default Item
