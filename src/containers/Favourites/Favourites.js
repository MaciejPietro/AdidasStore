import React from 'react'
import Heading from '../../components/Heading/Heading'
import styled from 'styled-components'
import shoes from '../../img/shoes/shoes2.jpg'

const Wrapper = styled.section`
width: 60vw;
margin: 3rem 20vw;
border: 2px solid pink;
`

const List = styled.ul`
width: 100%;
margin-top: 1.2rem;
border-top: 4px solid rgba(0,0,0, .3);
border-bottom: 4px solid rgba(0,0,0, .3);
padding: 0;
`

const Item = styled.li`
height: 13rem;
list-style: none;
margin: 0;
`

const Description = styled.div`
height: 13rem;
border: 2px solid darkcyan;
padding: 0;
display: flex;
flex-direction: row;
padding: 1.5rem 0 0 0;
div {
    margin-left: .8rem;
}
h5 {
    font-size: 1.6rem;
}
h6 {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: .4px;
    margin-top: .8rem;
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



const Interactions = styled.div`
height: 100%;
border: 2px solid red;
`


function Favourites() {
    return (
        <Wrapper>
            <Heading text="Ulubione" letterSpacing="4px" />
            <List>
                <Item className="row">
                    <Description className="col-8">
                        <Image shoes={shoes}/>
                        <div>
                            <h5>Tensor Flow</h5>
                            <h6>Kolor:Cloud White / Cloud White / Crystal White</h6>
                            <button>Usun</button>
                        </div>
       
                        
                    </Description>
                    <Interactions className="col-4">

                    </Interactions>

                </Item>

            </List>
        </Wrapper>
    )
}

export default Favourites
