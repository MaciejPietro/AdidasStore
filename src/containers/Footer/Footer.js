import React from 'react'
import styled from 'styled-components'
import logoWhite from '../../img/icons/logoWhite.png'

const Wrapper = styled.footer`
background-color: black;
margin-top: 5rem;
width: 100vw;
height: 6rem;
display: flex;
flex-direction: row;
padding: 1rem 12vw;
position: static;
bottom: 0;
align-items: center;
p {
    color: white;
    margin-top: 2rem;
    margin-left: 2rem;
    latter-spacing: 1.6px;
    font-weight: 300;
    font-size: .95rem;
}

`

const Logo = styled.a`
display: block;
width: 6rem;
height: 4rem;
background-image: url(${logoWhite});
background-size: cover;
`

const Credits = styled.div`
color: white;
font-size: 1rem;
margin-left: auto;
`

function Footer() {
    return (
        <Wrapper>
            <Logo href="https://www.adidas.pl/pharrell"/>
            <p>Kliknij w logo aby przeniesc sie na oficjalna strone Adidasa</p>
            <Credits>
                The site was developed by MaciejPietro
            </Credits>
            
        </Wrapper>
    )
}

export default Footer
