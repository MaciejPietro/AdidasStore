import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FormSize from '../Form/FormSize'
import FormQuantity from '../Form/FormQuantity'
import FormColors from '../Form/FormColors'
import ToCartBtnLarge from '../Buttons/ToCartBtnLarge'



const Interactions = styled.div`
height: 100%;
justify-content: space-between;
p {
    height: 0.2rem;
}
`


export function FavouritesInteractions({sizes, colors, id}) {
    const [ selectedColor, setSelectedColor ] = useState(colors[0])

    const setFormChoices = async (e) => {
        const color = e.currentTarget.getAttribute("color")
        setSelectedColor(color)
        console.log("now, selected color is", selectedColor)
    }

    const addColorStyle = (e) => {
        const favouriteColors = document.querySelectorAll(`.favouriteColors-${id}`)

        favouriteColors.forEach(color => {
            color.style.transform = "scale(1)"
        })
        e.target.style.transform = "scale(1.35)"
    }

    const selectColor = (e) => {
        addColorStyle(e)
        // setFormChoices(e)
    }

    useEffect(() => {

    }, [])

    return (
        <Interactions className="col-md-4 col-12 row">
            <FormColors 
                colors={colors} 
                selectColor={selectColor}
                setColor={setFormChoices}
                selectedColor={selectedColor}
                id={id}/>
            <FormSize sizes={sizes}/>
            <FormQuantity />
            <ToCartBtnLarge />
        </ Interactions>
    )
}
