import React from 'react'
import styled from 'styled-components'
import img from '../../img/shoes/shoes1.jpg'
import ToCartBtn from '../Buttons/ToCartBtn'

const Wrapper = styled.div`
width: 20rem;
height: 24rem;
@media (max-width: 720px) {
    margin: 0 auto;
}

`
const Picture = styled.div`
border: 1px solid grey;
width: 100%;
height: 76%;
background-image: url(${({img}) => img});
background-size: contain;
`
const Row = styled.div`
width: 100%;
height: ${({isBig}) => isBig ? "10%" : "7%"};
display: flex;
flex-direction: row;
align-items: center;
`

const Price = styled.div`
width: 100%;
display: flex;
flex-direction: row;
font-size: .9rem;
align-items: center;
p{
    margin-right: 10px;
    color:red;
}
p:nth-child(2) {
    color: black;
    text-decoration: line-through;
}
p:last-child {
    color: black;
}
`

function Product({img, name, price, oldPrice}) {
    return (
        <Wrapper>
            <Picture img={img}/>
            <Row>Mezczyzni - sport</Row>
            <Row isBig>
                <h5>{name}</h5>
                <ToCartBtn />
            </Row>
            <Row>
                <Price>
                    {oldPrice === "" ?
                    <>
                    <p style={{textDecoration: "none"}}>{price} zl</p>
                    </>
                    :
                    <>
                    <p>{price} zl</p>
                    <p>{oldPrice} zl</p>
                    </>
                }

                </Price>
            </Row>

        </Wrapper>
    )
}

export default Product
