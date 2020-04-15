import React from 'react'
import styled from 'styled-components'
import shoes from '../../img/shoes/shoes2.jpg'


const Description = styled.div`
height: 13rem;
padding: 0;
display: flex;
flex-direction: row;
padding: 1.5rem 0 0 0;
div {
    margin-left: .8rem;
}
h5 {
    font-size: 1.6rem;
    margin-left: .2rem;
}
h6 {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: .4px;
    margin: .8rem 0 0 .4rem;
}
button {
    margin-top: .8rem;
    border: none;
    background-color: white;
    cursor: pointer;
}
`

const Image = styled.span`
display: block;
height: 10rem;
width: 24%;
background-image: url(${({shoes}) => shoes});
background-size: cover;
`

export function FavouritesDescription({img, name, id, deleteClick}) {
    return (
        <Description className="col-md-8 col-12">
                        <Image shoes={img}/>
                        <div>
                            <h5>{name}</h5>
                            <h6>Kolor:Cloud White / Cloud White / Crystal White</h6>
                            <button onClick={deleteClick.bind(this, id)}>Usun</button>
                        </div>
                    </Description>
    )
}


