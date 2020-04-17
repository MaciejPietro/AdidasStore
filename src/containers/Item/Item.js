import React, { useEffect } from 'react'
import styled from 'styled-components'
import NavbarOptional from '../../components/NavbarOptional/NavbarOptional'
import {ItemInteractions as Interactions} from '../../components/ItemInteractions/ItemInteractions'
import { ItemImage as Image } from '../../components/ItemImage/ItemImage'

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

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <Wrapper>
            <NavbarOptional />
            <Content>
                <Image />
                <Interactions />
            </Content>
        </Wrapper>
    )
}

export default Item
