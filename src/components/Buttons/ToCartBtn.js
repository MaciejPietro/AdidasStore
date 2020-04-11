import React from 'react'
import styled from 'styled-components'
import cart from '../../img/icons/cart.png'

const Button = styled.button`
width: 5.8rem;
height: 1.8rem;
border: 2px solid grey;
background-color: white;
display: flex;
flex-direction: row;
justify-content: flex-center;
font-size: .7rem;
`
const Icon = styled.span`
display: block;
width: 1.3rem;
height: 1.2rem;
background-image: url(${({img}) => img});
background-size: contain;
background-repeat: no-repeat;
`
function ToCartBtn() {
    return (
        <Button className="ml-auto mr-3 p-0 pl-1">
            Do koszyka
            <Icon className="ml-auto mr-1" img={cart}/>
        </Button>
    )
}

export default ToCartBtn
