import React from 'react'
import styled from 'styled-components'
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft'
import HeaderRight from '../../components/HeaderRight/HeaderRight'

const Wrapper = styled.nav`
width:100vw;
height: 90vh;

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
