import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const Header = styled.div`
width: 100%;
color: black;
font-size: 4rem;
font-family: 'Aga';
line-height: 4rem;
letter-spacing: 3.6px;
word-break: break-word;
display: flex;
text-align: center;
`

function Heading({text, textBold}) {
    return (
        <Wrapper>
            <Header className="mt-4">
                {text}
            </Header>
            <Header>
                <b className="mx-auto">{textBold}</b>
            </Header>
        </Wrapper>

    )
}

export default Heading
