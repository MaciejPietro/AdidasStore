import React from 'react'
import styled from 'styled-components'
import Logo from '../../img/icons/logos.png' 
import Heading from '../Heading/Heading'

const Wrapper = styled.nav`
padding-top: 3%;
padding-right: 6vw;
`
const Logos = styled.div`
width: 80%;
height: 20%;
background-image: url(${({img}) => img});
background-size:cover;
`


function HeaderRight() {
    return (
        <Wrapper className="col-md-5 col-12">
            <Logos className="m-auto" img={Logo}></Logos>
            <Heading text={'Nieoficjalny, niedzialajacy'} textBold={"Sklep Adidas"}/>         
        </Wrapper>
    )
}

export default HeaderRight
