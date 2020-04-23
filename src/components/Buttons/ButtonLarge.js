import React from 'react'
import styled from 'styled-components'
import Cart from '../../img/icons/cartBlack.png'


const Wrapper = styled.button`
width: 16rem;
height: 3.4rem;
background-color: black;
border: none;
display: flex;
justify-content: space-between;
color: white;
p {
    white-space: nowrap;
    margin-left: .5rem;
    font-weight: 300;
    letter-spacing: 1px;
}
`
const Icon = styled.span`
display: block;
width: 1.4rem;
height: 1.2rem;
background-color: black;
background-image: url(${({img}) => img});
background-position: center;
background-size: cover;
transition: .6s;
margin-left: -4rem;
`

function ButtonLarge({addToCart, submitPursue, text}) {
    return (
        <Wrapper className="mr-auto" onClick={text === "Zrealizuj zamowienie" ? submitPursue : addToCart}>
            <p className="mr-5 my-auto">{text}</p>
            <Icon className="mr-3 mt-1" img={Cart} />
        </Wrapper>
    )
}

export default ButtonLarge
