import React from 'react'
import styled from 'styled-components'
import Logo from '../../img/icons/logos.png' 
import Heading from '../Heading/Heading'

const Wrapper = styled.div`
padding-top: 3%;
@media (max-width: 767px) {
    padding: 0 10vw;
    margin-bottom: 10vh;
}
`
const Logos = styled.div`
width: 70%;
height: 20%;
background-image: url(${({img}) => img});
background-size:contain;
background-repeat: no-repeat;
background-position: 3vw;
@media (max-width: 767px) {
    width:30%;
}
`


function HeaderRight() {
    return (
        <Wrapper className="col-md-5 col-12 order-1 order-md-2">
            <Logos className="mx-auto" img={Logo}></Logos>
            <Heading text={'Nieoficjalny, niedzialajacy'} textBold={"Sklep Adidas"}/>         
        </Wrapper>
    )
}

export default HeaderRight
