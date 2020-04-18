import React, { useEffect } from 'react'
import styled from 'styled-components'
import FormSize from '../Form/FormSize'
import FormQuantity from '../Form/FormQuantity'
import FormColors from '../Form/FormColors'
import ButtonLarge from '../Buttons/ButtonLarge'



const Interactions = styled.div`
height: 100%;
justify-content: space-between;
p {
    height: 0.2rem;
}
`


export function FavouritesInteractions({sizes, colors, id}) {


    useEffect(() => {

    }, [])

    return (
        <Interactions className="col-md-4 col-12 row">
            <FormColors 
                colors={colors} 
                id={id}/>
            <FormSize sizes={sizes}/>
            <FormQuantity />
            <ButtonLarge text={"Dodaj do koszyka"}/>
        </ Interactions>
    )
}
