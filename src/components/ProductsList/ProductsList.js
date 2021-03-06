import React, { useEffect } from 'react'
import styled from 'styled-components'
import Product from '../Product/Product'


const Wrapper = styled.div`
width: 90vw;
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
flex: 1;
margin-top: 1rem;
h1 {
    width: 100vw;
    text-align: center;
    margin-top: 2rem;
}
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

function ProductsList({filteredStore, hearthClick}) {

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
                    oldPrice={product.oldPrice}
                    category={product.sex}
                    id={product.id}
                    inFavourite={product.inFavourite}
                    />
                ))}
            {filteredStore.length === 0 ? <h1>Nic tutaj nie ma</h1> : ""}
            <Product id={-1} opacity={"0"} />
            <Product id={-1} opacity={"0"} />
            <Product id={-1} opacity={"0"} />
        </Wrapper>
    )
}

export default ProductsList
