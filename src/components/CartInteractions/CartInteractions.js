import React, { useEffect } from 'react'
import styled from 'styled-components'
import FormSize from '../Form/FormSize'
import FormQuantity from '../Form/FormQuantity'
import FormColors from '../Form/FormColors'
import { addCart } from '../../redux/actions/actions'



const Interactions = styled.div`
height: 100%;
justify-content: space-between;
p {
    height: 0.2rem;
}
`


export function CartInteractions({sizes, colors, id}) {
    const addColorStyle = (e) => {
        const favouriteColors = document.querySelectorAll(`.favouriteColors-${id}`)

        favouriteColors.forEach(color => {
            color.style.transform = "scale(1)"
        })
        e.target.style.transform = "scale(1.25)"
    }

    const selectColor = (e) => {
        addColorStyle(e)
    }


    useEffect(() => {

    }, [])

    return (
        <Interactions className="col-md-4 col-12 row">
            <FormColors 
                colors={colors} 
                selectColor={selectColor}
                id={id} 
                text={"Kolor"}/>
            <FormSize sizes={sizes}/>
            <FormQuantity />
        </ Interactions>
    )
}
