import React from 'react'
import styled from 'styled-components'
import Shoes from '../../img/shoes/shoes1.jpg'



const Image = styled.div`
height: 80vh;
border: 2px solid pink;
flex: 1;
`
const ImageWrapper = styled.div`
width: 70%;
height: 80%;
min-width: 20rem;
max-width: 42rem;

margin: 2rem 1rem 0 auto;
background: url(${Shoes}) no-repeat center ;
background-size: contain;

`

export function ItemImage() {
    return (
        <Image>
                <ImageWrapper>

                </ImageWrapper>
        </Image>
    )
}


