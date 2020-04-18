import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
height: 2rem;
width: 72%;
letter-spacing: .7px;
font-size: .8rem;
&:focus {
    outline: none;
}
`

function FormSize({selectSize}) {

    return (
        <Select  id="cars" name="size" onChange={selectSize}>
            <option value=""  hidden>Wybierz rozmiar</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
        </Select>
    )
}

export default FormSize
