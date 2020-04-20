import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

const Colors = styled.div`
display: flex;
align-items: center;
padding: .5rem;
p {
    font-size: .8rem;
    letter-spacing: .8px;
    margin-right: 1rem;
    margin-top: 1rem;
}
`

const Color = styled.span`
display: inline;
width: 2rem;
height: 2rem;
margin-right: 0.6rem;
border: ${({color}) => color === "white" ? "1px solid lightgrey" : "1px solid transparent"};
box-sizing: border-box;
background-color: ${({color}) => color};
border-radius: 50%;
transition: .6s;
`


function FormColors({colors, selectColor, id, text}) {


    return (
        <Colors className="col-12 row m-0">
            <p>{text}</p>
            {colors.map(color => (
                <Color 
                    className={`favouriteColors-${id}`}
                    key={uuidv4()} 
                    color={color}
                    onClick={selectColor}
                    selectedColor
                    />
            ))}
        </Colors>
    )
}

export default FormColors
