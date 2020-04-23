import React, { useEffect } from 'react'
import styled from 'styled-components'
import Hearth from '../../img/icons/favourite.png'
import HearthBlack from '../../img/icons/favouriteBlack.png'
import { v4 as uuidv4 } from 'uuid';
import { products } from '../../store/store'
import { useSelector } from 'react-redux'
import Delivery from '../../img/icons/Delivery.png'
import Home from '../../img/icons/Home.png'
import Card from '../../img/icons/Card.png'
import FormColors from '../Form/FormColors'
import ButtonLarge from '../Buttons/ButtonLarge'



const Wrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
padding: 2rem;
div {
    display: flex;
    flex-direction: row;
}
@media (max-width: 991px) {
    width: 50vw;
    min-width: 20rem;
    margin: 0 auto;
}
`
const FavouriteRow = styled.div`
height: 2.4rem;
span {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background-image: url(${({img}) => img});
    background-size: contain;
}
p{
    font-size: 1rem;
    padding: .4rem;
    margin-left: .6rem;
    cursor: pointer;
}
`

const NameRow = styled.div`
font-size: 2.6rem;
font-weight: 500;
height: 2.4rem;
`

const PriceRow = styled.div`
font-weight: 300;
p {
    margin: 2rem .4rem 0 0;
}
p:first-child{
    color:red;
}
p:nth-child(2){
    text-decoration: line-through;
}
`


const ColorsRow = styled.div`
margin-left: -.5rem;
margin-bottom: .6rem;
`

const SizeRow = styled.label`
width: 12rem;
margin-bottom: 2rem;
display: flex;
justify-content: space-between;
p {
    font-size: .8rem;
    font-weight: 400;
    letter-spacing: .8px;
}
span {
    border: 1.4px solid black;
    width: 1.8rem;
    height: 1.8rem;
    text-align: center;
}
`

const ButtonRow = styled.div`
width: 16rem;
margin-bottom: 1rem;
`
const Additional = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin: 0;

div {
  span {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
  }
}

p{
    font-size: .9rem;
    font-weight: 300;
    margin-left: .8rem;
}
div:first-child {
    span {
        background-image: url(${Delivery});
        background-size: contain;
    }
}
div:nth-child(2)  {
    span {
        background-image: url(${Home});
        background-size: 80%;
    }
}
div:nth-child(3) {
    span {
        background-image: url(${Card});
        background-size: 80%;
    }
}

`


export function ItemInteractions({ id, selectColor, addItemToCart, addItemToFavourite, inInFavourite}) {
    const singleItemId = useSelector(state => state.singleItem);



    useEffect(() => {

    }, [])

    return (
        <Wrapper>
            <FavouriteRow onClick={addItemToFavourite} img={inInFavourite ? HearthBlack : Hearth}>
                <span id="heart"/><p htmlFor="#hearth">{inInFavourite ? "Usun z ulubionych" : "Dodaj do ulubionych"}</p>
            </FavouriteRow>

            <NameRow>
                <p>{products[singleItemId].name}</p>
            </NameRow>

            <PriceRow>
                <p>{products[singleItemId].price}zl</p>
                {products[singleItemId].oldPrice ? 
                <>
                <p>{products[singleItemId].oldPrice}zl</p>
                <p>[-50%]</p> 
                </>
                : ""}
            </PriceRow>

            <ColorsRow>
       
               <FormColors 
                colors={products[singleItemId].colors} 
                selectColor={selectColor}
                id={id}
                text={"Kolory"}
                    />
            </ColorsRow>

            <SizeRow>
              <p>Rozmiary</p>
              {products[singleItemId].sizes.map(size => (
                  <span key={uuidv4()}>{size}</span>
              ))}
            </SizeRow>

            <ButtonRow>
                <ButtonLarge addToCart={addItemToCart} text={"Dodaj do koszyka"}/>
            </ButtonRow>
            <Additional>
                <div>
                    <span/>
                    <p>Darmowa dostawa i 100 dni na zwrot bez poniesienia kosztów.</p>
                </div>

                <div>
                    <span/>
                    <p>Nie będzie Cię w domu? Skorzystaj z usługi przekierowania paczki UPS.</p>                   
                </div>

                <div>
                    <span/>
                    <p>Zapłać przy odbiorze zamówienia dzięki opcji za pobraniem.</p>                   
                </div>
            </Additional>
        </Wrapper>
    )
}

export default ItemInteractions
