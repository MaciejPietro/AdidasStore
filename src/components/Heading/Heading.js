import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const Header = styled.div`

color: black;
font-size: 4rem;
font-family: 'Aga';
line-height: 4rem;
letter-spacing: ${({letterSpacing}) => letterSpacing};
word-break: keep-all;
display: flex;
text-align: center;
b {
    letter-spacing: 3px;
}
@media (max-width: 420px) {
    font-size: 3rem;
    line-height: 3rem;
}
@media (max-width: 320px) {
    font-size: 2rem;
    line-height: 2.4rem;
}
`

function Heading({text, textBold, letterSpacing}) {
    return (
        <Wrapper>
            <Header className="mt-4 mx-auto" letterSpacing={letterSpacing}>
                {text}
            </Header>
            <Header >
                <b className="mx-auto">{textBold}</b>
            </Header>
        </Wrapper>

    )
}

export default Heading
