import React from 'react'
import styled from 'styled-components'
import Cart from '../../img/icons/cartBlack.png'


const Wrapper = styled.button`
width: 100%;
height: 3.4rem;
background-color: black;
border: none;
p{ 
    color: white;
}
 &:after {
    content: '';
    position: absolute;
    margin-top: -2.1rem;
    margin-left: -9.1rem;
    width: 20rem;
    height: 3.4rem;
    border: 1px solid black;
    transition: 0.3s;
    display: none;
 }
 &: hover {
    &:after {
        margin-top: -2.3rem;
        margin-left: -9.35rem;
     } 
 }
@media (max-width: 1167px) {
    p {
        font-size: 1.2vw;
    }
}
`
const Icon = styled.span`
width: 1.8rem;
height: 1.6rem;
background-color: black;
background-image: url(${({img}) => img});
background-position: center;
background-size: cover;
position: absolute;
margin-top: -1.3rem;
margin-left: 3.8rem;
transition: .6s;
`

function ButtonLarge({addToCart, submitPursue, text}) {
    return (
        <Wrapper className="mr-auto" onClick={text === "Zrealizuj zamowienie" ? submitPursue : addToCart}>
            <p className="mr-5 mt-0">{text}</p>
            <Icon img={Cart} />
        </Wrapper>
    )
}

export default ButtonLarge
