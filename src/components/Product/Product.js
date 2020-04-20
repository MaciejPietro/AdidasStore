import React from 'react'
import styled from 'styled-components'
import hearth from '../../img/icons/favourite.png'
import hearthBlack from '../../img/icons/favouriteBlack.png'
import arrowRight from '../../img/icons/arrowRight.png'
import { useDispatch, useSelector } from 'react-redux'
import ToCartBtn from '../Buttons/ToCartBtn'
import { addFavourite, removeFavourite, addCart, removeCart, singleItem } from '../../redux/actions/actions'
import { Link } from "react-router-dom";

const Wrapper = styled.div`
width: 20rem;
height: ${({opacity}) => opacity === "0" ? "1px" : "24rem"};
opacity: ${({opacity}) => opacity};
margin-bottom: 1.4rem;
@media (max-width: 720px) {
    margin: 0 auto;
}

`
const Picture = styled.div`
border: 1px solid grey;
width: 100%;
height: 76%;
background-image: url(${({img}) => img});
background-size: 100%;
background-repeat: repeat-x;
background-position: 0 -1.6rem;
transition: .6s;
overflow: hidden;
&:hover {
        background-size: 95%;
        background-position: .5rem -1.6rem;
        span:first-child {
            left: -12px;
            top: 12px;
        }
        a {
            margin-top: 12.8rem;
        }
}
`

const HearthIcon = styled.span`
    content: '';
    display: block;
    position: relative;
    width: 36px;
    height: 36px;
    left: ${({hearthActive}) => hearthActive ? "-12px" : "40px"};
    top: ${({hearthActive}) => hearthActive ? "12px" : "-30px"};
    margin: 0 0 0 auto;
    background-image: url(${({hearth}) => hearth});
    background-size: contain;
    transition: .6s;
`

const SeeProduct = styled(Link)`
    content: '';
    display: flex;
    position: relative;
    width: 100%;
    height: 30%;
    margin-top: 33rem;
    backdrop-filter: brightness(34%);
    box-shadow: -2px 2px 73px 50px rgba(0,0,0,0.75);
    color: white;
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 1.4px;
    justify-content: center;
    flex-direction: row;
    transition: .6s;
    cursor: pointer;
    p {
        margin: 1rem 0 0 1rem;
        font-weight: 200;
        letter-spacing: 2px;
    }
    span {
        display: block;
        width: 30px;
        height: 24px;
        position: relative;
        background-image: url(${({img}) => img});
        background-size: contain;
        background-repeat: no-repeat;
        margin: 1.4rem 0 0 1rem;

    }
    &:hover {
        text-decoration: none;
        color: white;
    }
`

const Row = styled.div`
width: 100%;
height: ${({isBig}) => isBig ? "9%" : "6%"};
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
const itemsInFacourite = useSelector(state => state.changeFavourite);
const itemsInCart = useSelector(state => state.changeCart);


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
        if(itemsInFacourite.arr.includes(e.currentTarget.id)) {
            dispatch(removeFavourite(e.currentTarget.id))
        } else if(!itemsInFacourite.arr.includes(e.currentTarget.id)) {
            dispatch(addFavourite(e.currentTarget.id))
        }
    }

    const addItemToCart = (e) => {
        if(itemsInCart.arr.includes(e.currentTarget.id)) {
            dispatch(removeCart(e.currentTarget.id))
        } else if(!itemsInCart.arr.includes(e.currentTarget.id)) {
            dispatch(addCart(e.currentTarget.id, "", "", ""))
        }
    }

    const setItemIdToSingleView = () => {
        console.log(id)
        dispatch(singleItem(id))
    }

    return (
        <Wrapper opacity={opacity}>
            <Picture className="product-hearth__active" img={img}>
                <HearthIcon 
                    id={id} 
                    hearth={itemsInFacourite.arr.includes(id.toString()) ? hearthBlack : hearth} 
                    hearthActive={itemsInFacourite.arr.includes(id.toString()) ? true : false} 
                    onClick={addItemToFavourite}>
                </HearthIcon>
                <SeeProduct img={arrowRight} to={`/item/${id}`} onClick={setItemIdToSingleView}>
                    <p>Szczegoly</p>
                    <span/>
                </SeeProduct>
            </Picture>
            <Row>{displayCategory()}</Row>
            <Row isBig>
                <h5>{name}</h5>
                <ToCartBtn 
                    id={id} 
                    click={addItemToCart}/>
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
