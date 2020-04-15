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


export function FavouritesInteractions({sizes, colors}) {
    const { selectedColor, setSelectedColor} = useState("coors")


    const selectColor = (e) => {
        // console.log(e.target.getAttribute("color"))
        setSelectedColor(e.target.getAttribute("color"))
    }

    useEffect(() => {
        console.log(selectedColor)
    }, [selectColor])

    return (
        <Interactions className="col-md-4 col-12 row">
            <p className="col-12 m-0">W magazynie</p>

            <FormColors colors={colors} selectColor={selectColor} />
            <FormSize sizes={sizes}/>
            <FormQuantity />
            <ToCartBtnLarge />
        </ Interactions>
    )
}
