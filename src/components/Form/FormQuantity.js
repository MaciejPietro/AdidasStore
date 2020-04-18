import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
height: 2rem;
width: 25%;
letter-spacing: .7px;
font-size: .8rem;
&:focus {
    outline: none;
}
`

function FormQuantity({selectQuantity}) {
    return (
        <Select  id="cars" name="size" onChange={selectQuantity}>
            <option value=""  hidden>Ilosc</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </Select>
    )
}

export default FormQuantity
