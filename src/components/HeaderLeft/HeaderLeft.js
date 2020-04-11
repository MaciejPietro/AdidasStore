import React from 'react'
import styled from 'styled-components'
import Button from '../Buttons/Button'
import shoes from '../../img/headers/shoes.jpg'
import shoes2 from '../../img/headers/shoes2.jpg'

const Wrapper = styled.nav`
padding: 3vw;
`

const Img = styled.div`
width: 64%;
height: 54%;
margin-left: auto;
background-image: url(${({img}) => img});
background-size:cover;
`

const Img2 = styled.div`
position: absolute;
top: 20%;
left: 10%;
width: 40%;
height: 70%;
background-image: url(${({img}) => img});
background-size:cover;
`

const PharellWrapper = styled.div`
width: 70%;
height: 42%;
margin-left: 27vw;
color: black;
padding: 4.6rem 2vw;
`


const Description = styled.div`
font-size: .9rem;
letter-spacing: 1.2px;
margin-bottom: 3rem;
`

function HeaderLeft() {
    return (
        <Wrapper className="col-md-7 col-12">
            <Img img={shoes}/>
            <Img2 img={shoes2}/>
            <PharellWrapper>
                <Description>
                    Nowa kolekcja Human Race od ADIDAS BY PHARELL WILLIAMS <br /> 
                    pod egida nowych 0-60 od Pharella.
                </Description>
                <Button/>
            </PharellWrapper>
            
        </Wrapper>
    )
}

export default HeaderLeft
