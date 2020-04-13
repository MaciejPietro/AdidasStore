import React from 'react'
import styled from 'styled-components'
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft'
import HeaderRight from '../../components/HeaderRight/HeaderRight'

const Wrapper = styled.section`
width:100vw;
height: 90vh;
@media (max-width: 767px) {
    height: 100%;
}
`

function Home() {
    return (
        <Wrapper className="row">
            <HeaderLeft />
            <HeaderRight />          
        </Wrapper>
    )
}

export default Home
