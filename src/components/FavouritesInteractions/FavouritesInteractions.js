import React, { useEffect } from 'react'
import styled from 'styled-components'
import cart from '../../img/icons/cartBlack.png'
import FormColors from '../Form/FormColors'

import { v4 as uuidv4 } from 'uuid';



const Interactions = styled.div`
height: 100%;
justify-content: space-between;
p {
    height: 0.2rem;
}
`
const SizeRow = styled.label`
width: 12rem;
margin-top: 1rem;
display: flex;
justify-content: space-between;
p {
    font-size: .8rem;
    font-weight: 400;
    letter-spacing: .8px;
}
span {
    border: 1.4px solid black;
    width: 1.8rem;
    height: 1.8rem;
    text-align: center;
}
`

const Button = styled.button`
width: 14rem;
height: 3.6rem;
background-color: black;
border: none;
display: flex;
flex-direction: row;
justify-content: space-between;
p {
    color: white;;
    font-size: 1rem;
    letter-spacing: 1px;
    margin: -2px 0 0 .6rem;
}
span {
    display: block;
    width: 1.5rem;
    height: 1.3rem;
    background-image: url(${cart});
    background-size:  cover;
    margin-right: .6rem;
}
`

export function FavouritesInteractions({sizes, colors, id, addToCart}) {
    useEffect(() => {

    }, [])

    return (
        <Interactions className="col-md-4 col-12 row">
            <FormColors 
                colors={colors} 
                id={id}
                text={"Dostepne kolory"}/>
            <SizeRow>
              <p>Rozmiary</p>
              {sizes.map(size => (
                  <span key={uuidv4()}>{size}</span>
              ))}
            </SizeRow>
            <Button onClick={addToCart} id={id}>
                <p>Dodaj do koszyka</p>
                <span  />
            </Button>
        </ Interactions>
    )
}
