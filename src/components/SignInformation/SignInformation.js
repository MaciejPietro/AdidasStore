import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {  useSelector } from 'react-redux'



const Information = styled.div`
width: 38%;
height: 30rem;
background-color: ${({login}) => login ? "#171717" : "#203063"};
padding: 3rem 2rem;
display: flex;
flex-direction: column;
transition: .8s;
transition-timing-function: cubic-bezier(.39,.11,.47,.77);
backdrop-filter: brightness(0%);
z-index: 2;
position: absolute;
transform: ${({isLoginVisible}) => isLoginVisible ? "translate(162%)" : "translate(0)"};
h5{     
    font-size: 1.6rem;
    color: white;
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
    margin-top:  ${({login}) => login ? "1.7rem" : "3rem"};
}

`

function SignInformation({toggleView, isLoginVisible}) {
    const isLogged = useSelector(state => state.isLogged)
    const loginView = useRef()
    const singinView = useRef()



useEffect(() => {
    const displayProperView = () => {
            loginView.current.style.opacity = isLoginVisible ? "0" : "1";
            singinView.current.style.opacity = isLoginVisible ? "1" : "0";   
        }
        displayProperView()
})

    return (
    <>
        <Information 
            ref={singinView} 
            isLoginVisible={isLoginVisible}>
                <h5>Dolacz do grona zadowolonych klientow</h5>
                <p><b>Jestes tu nowy ?</b><br /> Wypelnij formularz rejestracji</p>
                <p><b>Masz juz konto ?</b><br /> Zaloguj sie klikajac przycisk ponizej</p>
                <button onClick={toggleView}> Zaloguj sie</button>
        </Information>

        <Information 
            ref={loginView} 
            isLoginVisible={isLoginVisible}
            login>
            <h5><b>Zaloguj sie</b>, i skorzystaj z kodu rabatowego</h5>
            {isLogged ? <p>Zaloguj sie uzywajac danych ktore podales w formularzu rejestreacji</p> :
            <p><b>Uzyj tych danych do logowania</b><br /> login: <b>admin</b> haslo: <b>123</b></p>}
            <p><b>Nie masz konta ?</b><br /> Zarejestruj sie klikajac przycisk ponizej</p>
            <button onClick={toggleView}> Zarejestruj sie</button>
        </Information>
    </>
    )
}

export default SignInformation
