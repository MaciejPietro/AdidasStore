import React from 'react'
import styled from 'styled-components'
import arrowRight from '../../img/icons/arrowRight.png'


const Wrapper = styled.button`
width: 15rem;
height: 4rem;
background-color: black;
border: none;

p{ 
    color: white;
}
 &:after {
    content: '';
    position: absolute;
    margin-top: -3.2rem;
    margin-left: -7.1rem;
    width: 15rem;
    height: 4rem;
    border: 1px solid black;
    transition: 0.3s;
 }
 &: hover {
    &:after {
        margin-top: -3.4rem;
        margin-left: -7.5rem;
     } 
    span {
        margin-left: 4.1rem;
    }  
 }
`
const Icon = styled.span`
width: 2rem;
height: 1.6rem;
background-color: black;
background-image: url(${({img}) => img});
background-position: center;
background-size: cover;
position: absolute;
margin-top: -2.4rem;
margin-left: 3.8rem;
transition: .6s;
`

function Button() {
    return (
        <Wrapper >
            <p className="mr-5 mt-2">Zobacz kolekcje</p>
            <Icon img={arrowRight} />
        </Wrapper>
    )
}

export default Button
