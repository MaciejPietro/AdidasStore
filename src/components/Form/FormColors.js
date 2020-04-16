import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

const Colors = styled.div`
display: flex;
align-items: center;
padding: .5rem;
`

const Color = styled.span`
display: inline;
width: 2rem;
height: 2rem;
margin-right: 0.6rem;
border: ${({color}) => color === "white" ? "1px solid lightgrey" : "1.6px solid transparent"};
box-sizing: border-box;
background-color: ${({color}) => color};
cursor: pointer;
border-radius: 50%;
&:hover {
    box-shadow: 0px -1px 29px -6px rgba(112,112,112,1);
}
`


function FormColors({colors, selectColor, setColor, selectedColor, id}) {

    return (
        <Colors className="col-12 row m-0">
            {colors.map((color, i) => (
                <Color className={`favouriteColors-${id}`}
                    key={uuidv4()} 
                    color={color} 
                    onClick={selectColor}
                    // onClick={setColor}
                    selectedColor={selectedColor} 
                    />
            ))}
        </Colors>
    )
}

export default FormColors
