import React from 'react'
import styled from 'styled-components'
import Hearth from '../../img/icons/favourite.png'
import HearthBlack from '../../img/icons/favouriteBlack.png'
import Delivery from '../../img/icons/Delivery.png'
import Home from '../../img/icons/Home.png'
import Card from '../../img/icons/Card.png'
import FormQuantity from '../Form/FormQuantity'
import FormSize from '../Form/FormSize'
import ToCartBtnLarge from '../Buttons/ToCartBtnLarge'

const Wrapper = styled.div`
border: 2px solid pink;
display: flex;
flex: 1;
flex-direction: column;
padding: 5vw;
div {
    display: flex;
    flex-direction: row;
}
`
const FavouriteRow = styled.div`
height: 2.4rem;
span {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background-image: url(${Hearth});
    background-size: contain;
}
p{
    font-size: 1rem;
    padding: .4rem;
    margin-left: .6rem;
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
    margin: 1rem .4rem;
}
p:first-child{
    color:red;
}
p:nth-child(2){
    text-decoration: line-through;
}
`

const ColorsHeaderRow = styled.div`
font-size: 1.6rem;
font-weight: 400;
height: 3rem;
`

const ColorsRow = styled.div`
span {
    display: block;
    width: 3rem;
    height: 3rem;
    background-color: red;
    border-radius: 50%;
    margin: 0 .5rem;
}
`

const SizeRow = styled.label`
width: 16rem;
`

const ButtonRow = styled.div`
width: 16rem;
`
const Additional = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin: 0;

div {
  height: 1.6rem;

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


export function ItemInteractions() {
    return (
        <Wrapper>
            <FavouriteRow>
                <span /><p>Dodaj do ulubionych</p>
            </FavouriteRow>

            <NameRow>
                <p>Tensor Shoes</p>
            </NameRow>

            <PriceRow>
                <p>249 zl</p>
                <p>400 zl</p>
                <p>[-50%]</p>
            </PriceRow>

            <ColorsHeaderRow>
                <p>Dostepne kolory</p>
            </ColorsHeaderRow>

            <ColorsRow>
                <span />
                <span />
                <span />
            </ColorsRow>

            <SizeRow>
                <FormSize />
                <FormQuantity />
            </SizeRow>

            <ButtonRow>
                <ToCartBtnLarge />
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
