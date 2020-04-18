import React from 'react'
import styled from 'styled-components'
import Shoes from '../../img/shoes/shoes1.jpg'



const Image = styled.div`
flex: 1;
margin-left: 5vw;
@media (max-width: 991px) {
    margin-left: 0;
}
`
const ImageWrapper = styled.div`
width: 30rem;
height: 30rem;


margin: 2rem 1rem 0 auto;
background: url(${Shoes}) no-repeat center ;
background-size: contain;
@media (max-width: 991px) {
    margin: 2rem auto 0 auto;
}
@media (max-width: 467px) {
    width: 90vw;
    height: 50vh;
}
`

export function ItemImage() {
    return (
        <Image>
                <ImageWrapper>

                </ImageWrapper>
        </Image>
    )
}


