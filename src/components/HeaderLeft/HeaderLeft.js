import React from 'react'
import styled from 'styled-components'
import HeaderBtn from '../Buttons/HeaderBtn'
import shoes from '../../img/headers/shoes.jpg'
import shoes2 from '../../img/headers/shoes2.jpg'

const Wrapper = styled.div`
padding: 3vw;
@media (max-width: 767px) {

    padding: 6vw;
    display: flex;
}
@media (max-width: 402px) {
}
`

const Img = styled.div`
width: 64%;
height: 54%;
margin-left: auto;
background-image: url(${({img}) => img});
background-size:cover;
@media (max-width: 767px) {
display: none;
}
`

const Img2 = styled.div`
position: absolute;
top: 20%;
left: 10%;
width: 40%;
height: 70%;
background-image: url(${({img}) => img});
background-size: cover;
@media (max-width: 767px) {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: 12%;
}
@media (max-width: 420px) {
    top: 0;
}
`

const PharellWrapper = styled.div`
width: 70%;
height: 42%;
margin-left: 27vw;
color: black;
padding: 4.6rem 2vw;
@media (max-width: 767px) {
    width: 100%;
    margin: 0;
    padding: 0 0 0 50vw;
}
`


const Description = styled.div`
font-size: .9rem;
letter-spacing: 1.2px;
margin-bottom: 3rem;
@media (max-width: 767px) {

}
`

function HeaderLeft() {
    return (
        <Wrapper className="col-md-7 col-12 order-2 order-md-1">
            <Img img={shoes}/>
            <Img2 img={shoes2}/>
            <PharellWrapper>
                <Description>
                    Nowa kolekcja Human Race od ADIDAS BY PHARELL WILLIAMS <br /> 
                    pod egida nowych 0-60 od Pharella.
                </Description>
                <HeaderBtn/>
            </PharellWrapper>
            
        </Wrapper>
    )
}

export default HeaderLeft
