import React, { useEffect } from 'react'
import styled from 'styled-components'
import { products } from '../../store/store'
import Product from '../Product/Product'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
width: 90vw;
height: 1200px;
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
flex: 1;
margin-top: 1rem;
@media (max-width: 1070px) {
    padding: 0 10vw;
}
@media (max-width: 991px) {
    padding: 0 5vw;
}
@media (max-width: 820px) {
    padding: 0;
}
`

function ProductsList({filteredStore}) {

useEffect(() => {

}, [filteredStore])
  
    return (
        <Wrapper className="row">
            {filteredStore.map(product => (
                    <Product 
                    key={product.name} 
                    opacity={"1"} 
                    img={product.image} 
                    name={product.name} 
                    price={product.price} 
                    oldPrice={product.oldPrice}/>
                ))}
            <Product opacity={"0"}/>
            <Product opacity={"0"}/>
            <Product opacity={"0"}/>
        </Wrapper>
    )
}

export default ProductsList
