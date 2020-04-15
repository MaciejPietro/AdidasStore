import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { products }from '../../store/store'
import Heading from '../../components/Heading/Heading'
import { FavouritesDescription as Description } from '../../components/FavouritesDescription/FavouritesDescription'
import { FavouritesInteractions } from '../../components/FavouritesInteractions/FavouritesInteractions'
import {  removeFavourite } from '../../redux/actions/actions'

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
margin: 0;
`




function Favourites() {
    const dispatch = useDispatch()
    const favour = useSelector(state => state.changeFavourite);
    
   

    const favouritesProducts = products.filter(product => {
        if(favour.arr.includes(product.id.toString())) {
            return product
        }
    })

    const deleteClick = (id) => {
        dispatch(removeFavourite(id))
    }
 
    useEffect(() => {

    }, [])


    return (
        <Wrapper>
            <Heading text="Ulubione" letterSpacing="4px" />
            <List>
                {favouritesProducts.map(product => (
                    <Item key={product.name} className="row">
                            <Description deleteClick={deleteClick} id={product.id} img={product.image} name={product.name}/>
                            <FavouritesInteractions id={product.id} colors={product.colors} sizes={product.sizes}/>
                    </Item>
                ))}
            </List>
        </Wrapper>
    )
}

export default Favourites
