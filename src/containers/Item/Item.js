import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavbarOptional from '../../components/NavbarOptional/NavbarOptional'
import {ItemInteractions as Interactions} from '../../components/ItemInteractions/ItemInteractions'
import { ItemImage as Image } from '../../components/ItemImage/ItemImage'
import { products }from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite, removeFavourite, addCart } from '../../redux/actions/actions'

const Wrapper = styled.section`
width: 100vw;
min-height: 80vh;
`
const Content = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
@media (max-width: 991px) {
    flex-direction: column;
}
`



function Item() {
    const dispatch = useDispatch()
    const itemsInFavourite = useSelector(state => state.changeFavourite);
    const singleItemId = useSelector(state => state.singleItem);
    const [ isInCart, setInCart ] = useState(false)
    const num = singleItemId.toString()
    const inInFavourite = itemsInFavourite.arr.includes(singleItemId.toString())

    const addItemToFavourite = () => {
        
        if(itemsInFavourite.arr.includes(num)) {
            dispatch(removeFavourite(num))
        } else if(!itemsInFavourite.arr.includes(num)) {
            dispatch(addFavourite(num))
        }
        setInCart(!isInCart)
    }

    const addItemToCart = (e) => {
    

        if(e.currentTarget.getAttribute('disabled') === 'disabled') return;

        dispatch(addCart(num))


        e.currentTarget.setAttribute('disabled', 'disabled');
    }




useEffect(() => {
    
}, [])

    return (
        <Wrapper>
            <NavbarOptional />
            <Content>
                <Image />
                <Interactions 
                    id={products[0].id} 
                    colors={products[0].colors} 
                    sizes={products[0].sizes}
                    addItemToFavourite={addItemToFavourite}
                    addItemToCart={addItemToCart}
                    isInCart={isInCart}
                    inInFavourite={inInFavourite}
                    />
            </Content>
        </Wrapper>
    )
}

export default Item
