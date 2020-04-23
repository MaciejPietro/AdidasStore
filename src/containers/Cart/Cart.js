import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { products }from '../../store/store'
import Heading from '../../components/Heading/Heading'
import { FavouritesDescription as Description } from '../../components/FavouritesDescription/FavouritesDescription'
import { CartInteractions } from '../../components/CartInteractions/CartInteractions'
import {  removeCart } from '../../redux/actions/actions'
import CartSummary from '../../components/CartSummary/CartSummary'


const Wrapper = styled.section`
width: 60vw;
margin: 3rem 20vw;
`

const List = styled.ul`
width: 100%;
margin-top: 1.2rem;
border-top: 4px solid rgba(0,0,0, .3);
border-bottom: 4px solid rgba(0,0,0, .3);
padding: 0;
`

const Item = styled.li`
height: 13rem;
list-style: none;
margin: 1.2rem 0;
`




function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.changeCart);
    const [ totalPrice, setTotalPrice ] = useState(0)
    let counter = 0;

    const productsInCart = products.filter((product, i) => {
        // for(let i = 0; i < cartItems.arr.length; i++) {
        //     if(product.id.toString() ===  cartItems.arr[i].id && product) {
        //         return product.id.toString() ===  cartItems.arr[i].id && product
        //     }      
        // }

        const item = cartItems.arr.includes(product.id.toString()) && product
        return item
        
    })

    const removeItem = (id) => {
        dispatch(removeCart(id))
    }

    const computeTotalPrice = () => {
        productsInCart.forEach(product => {
            counter = counter +product.price
            setTotalPrice(counter)
        })
    }

    const chooseDelivery = () => {

    }

    const submitPursue = () => {
        alert("zamowiles")
    }

    useEffect(() => {
        computeTotalPrice()
        productsInCart.length === 0 && setTotalPrice(0)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [removeItem])

    return (
        <Wrapper>
            <Heading text="Twoj koszyk" letterSpacing="4px" />
            <List>
                {productsInCart.map(product => (
                    <Item key={product.name} className="row">
                            <Description 
                                deleteClick={removeItem} 
                                id={product.id} 
                                img={product.image} 
                                name={product.name}
                                price={product.price}/>                            
                            <CartInteractions 
                                id={product.id} 
                                colors={product.colors} 
                                sizes={product.sizes}
                                />
                    </Item>
                ))}
            </List>
            <CartSummary 
                submitPursue={submitPursue} 
                chooseDelivery={chooseDelivery}
                totalPrice={totalPrice}/>
        </Wrapper>
    )
}

export default Cart
