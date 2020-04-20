import React from 'react'
import styled from 'styled-components'
import cart from '../../img/icons/cart.png'

const Button = styled.button`
width: 5.8rem;
height: 1.8rem;
border: 1.4px solid gray;
background-color: white;
display: flex;
flex-direction: row;
justify-content: flex-center;
font-size: .7rem;
color: gray;
transition: .5s;
&:hover {
    border: 1.4px solid black; 
    color: black;
}
`
const Icon = styled.span`
display: block;
width: 1rem;
height: 1rem;
background-image: url(${({img}) => img});
background-size: contain;
background-repeat: no-repeat;
margin-top: 2px;
`
function ToCartBtn({click, id}) {
    return (
        <Button className="ml-auto mr-3 p-0 pl-1" id={id} onClick={click}>
            Do koszyka
            <Icon className="ml-auto mr-1" img={cart}/>
        </Button>
    )
}

export default ToCartBtn
