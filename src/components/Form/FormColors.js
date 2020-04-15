import React from 'react'
import styled from 'styled-components'

const Colors = styled.div`
display: flex;
align-items: center;
`

const Color = styled.span`
display: block;
width: ${({active}) => active ? "2.4rem" : "2rem"};
height: ${({active}) => active ? "2.4rem" : "2rem"};
margin-right: 0.6rem;
border: 1.2px solid lightgrey;
background-color: ${({color}) => color};
cursor: pointer;
border-radius: 50%;
&:hover {
    box-shadow: 0px -1px 29px -6px rgba(112,112,112,1);
    border: 1.4px solid transparent;
}
`


function FormColors({colors, selectColor}) {

    

    return (
        <Colors className="col-12 row m-0">
            {colors.map((color, i) => (
                <Color key={color} color={color} onClick={selectColor}/>
            ))}
        </Colors>
    )
}

export default FormColors
