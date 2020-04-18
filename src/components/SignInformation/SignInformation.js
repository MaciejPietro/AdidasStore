import React, { useEffect } from 'react'
import styled from 'styled-components'

const Information = styled.div`
width: 38%;
height: 30rem;
background-color: black;
padding: 3rem 2rem;
display: flex;
flex-direction: column;
transition: .8s;
z-index: 2;
position: absolute;
transform: ${({isLoginVisible}) => isLoginVisible ? "translate(162%)" : "translate(0)"};
h5{     
    font-size: 1.6rem;
    color:white;
    margin-bottom: 3rem;
    text-align: center;
}
p{     
    font-size: .9rem;
    color:white;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
}
button {
    outline: none;
    width: 10rem;
    height: 3rem;
    border: 1.4px solid white;
    border-radius: 30px;
    color: white;
    background: none;
    font-weight: 300;
    letter-spacing: 1px;
    align-self: center;
    margin-top: 3rem;
}

`

function SignInformation({toggleView, isLoginVisible}) {


useEffect(() => {
   
}, [isLoginVisible])

    return (
        <Information isLoginVisible={isLoginVisible}>
                <h5>Dolacz do grona zadowolonych klientow</h5>
                <p><b>Jestes tu nowy ?</b><br /> Wypelnij formularz rejestracji</p>
                <p><b>Masz juz konto ?</b><br /> Zaloguj sie klikajac przycisk ponizej</p>
                <button onClick={toggleView}> Zaloguj sie</button>
            </Information>

    )
}

export default SignInformation
