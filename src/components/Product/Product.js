import React, { useState } from 'react'
import styled from 'styled-components'
import hearth from '../../img/icons/favourite.png'
import hearthBlack from '../../img/icons/favouriteBlack.png'
import { products } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import ToCartBtn from '../Buttons/ToCartBtn'
import { addFavourite, removeFavourite } from '../../redux/actions/actions'

const Wrapper = styled.div`
width: 20rem;
height: 24rem;
opacity: ${({opacity}) => opacity};
@media (max-width: 720px) {
    margin: 0 auto;
}

`
const Picture = styled.div`
border: 1px solid grey;
width: 100%;
height: 76%;
background-image: url(${({img}) => img});
background-size: contain;
`

const HearthIcon = styled.span`
    content: '';
    display: block;
    position: relative;
    width: 36px;
    height: 36px;
    left: -12px;
    top: 12px;
    margin: 0 0 0 auto;
    background-image: url(${({hearth}) => hearth});
    background-size: contain;
`

const Row = styled.div`
width: 100%;
height: ${({isBig}) => isBig ? "10%" : "7%"};
display: flex;
flex-direction: row;
align-items: center;
`

const Price = styled.div`
width: 100%;
display: flex;
flex-direction: row;
font-size: .9rem;
align-items: center;
p{
    margin-right: 10px;
    color:red;
}
p:nth-child(2) {
    color: black;
    text-decoration: line-through;
}
p:last-child {
    color: black;
}
`

function Product({img, name, price, oldPrice, opacity, category, id}) {
const dispatch = useDispatch()
const favour = useSelector(state => state.changeFavourite);

    const displayCategory = () => {
        if(category === "man") {
            return "Meskie"
        } else if (category === "woman") {
            return "Damskie"
        } else if(category === "kid") {
            return "Dzieciece"
        }
    }

    const addItemToFavourite = (e) => {

        if(favour.arr.includes(e.currentTarget.id)) {
            dispatch(removeFavourite(e.currentTarget.id))
        } else if(!favour.arr.includes(e.currentTarget.id)) {
            dispatch(addFavourite(e.currentTarget.id))
        }
    }

    return (
        <Wrapper opacity={opacity}>
            <Picture className="product-hearth__active" img={img}>
                <HearthIcon id={id} hearth={favour.arr.includes(id.toString()) ? hearthBlack : hearth} onClick={addItemToFavourite}></HearthIcon>
            </Picture>
            <Row>{displayCategory()}</Row>
            <Row isBig>
                <h5>{name}</h5>
                <ToCartBtn />
            </Row>
            <Row>
                <Price>
                    {oldPrice === "" ?
                    <>
                    <p style={{textDecoration: "none"}}>{price} zl</p>
                    </>
                    :
                    <>
                    <p>{price} zl</p>
                    <p>{oldPrice} zl</p>
                    </>
                }

                </Price>
            </Row>

        </Wrapper>
    )
}

export default Product
