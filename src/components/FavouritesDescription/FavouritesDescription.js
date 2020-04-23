import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
height: 13rem;
padding: 0;
display: flex;
flex-direction: row;
padding: 1.5rem 0 0 0;
`

const Image = styled.span`
display: block;
height: 10rem;
width: 24%;
background-image: url(${({shoes}) => shoes});
background-size: cover;
`
const Details = styled.div`
margin-left: .8rem;
display: flex;
flex-direction: column;
div {
    display: flex;
    flex-direction: row;
    p {
        font-size: 1rem;
        font-weight: 300;
        margin-right: 30px;
        &:after {
            content: '';
            position: absolute;
            width: 7px;
            height: 7px;
            background-color: black;
            border-radius: 50%;
            margin-left: 10px;
            margin-top: 10px;
            opacity: .7;
        }
    }
    p:nth-child(2) {
        color: darkgreen;
        font-weight: 400;
        &:after {
            display: none;
        }
    }
}
`

const Price = styled.p`
margin-top: -10px;
`
const Delete = styled.button`
    margin-top: .8rem;
    border: none;
    background-color: white;
    cursor: pointer;
    width: 3rem;
`

export function FavouritesDescription({img, name, id, deleteClick, price}) {
    return (
        <Description className="col-md-8 col-12">
                        <Image shoes={img}/>
                        <Details>
                            <h5>{name}</h5>
                            <div>
                                <p>Meskie</p>
                                <p>Dostepne</p>
                            </div>
                            <Price>Cena: {price} zl</Price>
                            <Delete onClick={deleteClick.bind(this, id)}>Usun</Delete>
                        </Details>
                    </Description>
    )
}


