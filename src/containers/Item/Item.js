import React, { useEffect } from 'react'
import styled from 'styled-components'
import NavbarOptional from '../../components/NavbarOptional/NavbarOptional'
import {ItemInteractions as Interactions} from '../../components/ItemInteractions/ItemInteractions'
import { ItemImage as Image } from '../../components/ItemImage/ItemImage'
import { products }from '../../store/store'

const Wrapper = styled.section`
width: 100vw;
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

                    />
            </Content>
        </Wrapper>
    )
}

export default Item
