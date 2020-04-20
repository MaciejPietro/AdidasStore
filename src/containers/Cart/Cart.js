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
   const [ arr, setArr ] = useState()

//     const cartProducts = products.filter((product, i) => {
//      if(cartItems.arr[i] !== undefined ) {
//             console.log(cartItems.arr[i].id)
//             return products[cartItems.arr[i].id] 
//      }  
//     }
// )

const cartProducts = () => {
    cartItems.arr.forEach(item => {
        console.log(item)
    })
}

    const deleteClick = (id) => {
        dispatch(removeCart(id))
    }

    const submitPursue = () => {
        alert("zamowiles")
    }
 
    useEffect(() => {
        cartProducts()
    }, [])


    return (
        <Wrapper>
            <Heading text="Twoj koszyk" letterSpacing="4px" />
            <List>
                {/* {cartProducts.map(product => (
                    <Item key={product.name} className="row">
                            <Description 
                                deleteClick={deleteClick} 
                                id={product.id} 
                                img={product.image} 
                                name={product.name}/>                            
                            <CartInteractions 
                                id={product.id} 
                                colors={product.colors} 
                                sizes={product.sizes}
                                />
                    </Item>
                ))} */}
            </List>
            <CartSummary cartProducts={cartProducts} submitPursue={submitPursue}/>
        </Wrapper>
    )
}

export default Cart
