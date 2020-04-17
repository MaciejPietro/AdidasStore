import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavbarOptional from '../../components/NavbarOptional/NavbarOptional'
import {ItemInteractions as Interactions} from '../../components/ItemInteractions/ItemInteractions'
import { ItemImage as Image } from '../../components/ItemImage/ItemImage'
import { products }from '../../store/store'

const Wrapper = styled.section`
width: 100vw;
height: 100vh;
`
const Content = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
`

function Item() {
    const [ selectedColor, setSelectedColor ] = useState(products[0].colors)

    const setFormChoices = async (e) => {
        const color = e.currentTarget.getAttribute("color")
        setSelectedColor(color)
        console.log("now, selected color is", selectedColor)
    }

    return (
        <Wrapper>
            <NavbarOptional />
            <Content>
                <Image />
                <Interactions 
                    id={products[0].id} 
                    colors={products[0].colors} 
                    sizes={products[0].sizes}
                    setFormChoices={setFormChoices}/>
            </Content>
        </Wrapper>
    )
}

export default Item
