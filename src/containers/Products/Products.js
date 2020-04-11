import React, { useRef } from 'react'
import styled from 'styled-components'
import Heading from '../../components/Heading/Heading'
import Filters from '../../components/Filters/Filters'

const Wrapper = styled.section`
width: 100vw;
height: 1000px;
display: flex;
flex-direction: column;
align-items: center;
`

function Products() {


 
 return (
        <Wrapper>
            <Heading text={'Find your own'}/>
            <Filters />
        </Wrapper>
    )
}

export default Products
