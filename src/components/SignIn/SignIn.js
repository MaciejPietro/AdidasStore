import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 54rem;
height: 30rem;
border: 2px solid black;
display: flex;
transition: 1s;
flex-direction: row;
z-index: 0;
`



function SignIn() {
    // const [ captchaCode, setCaptchaCode ] = useState()
    // const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];   
    // const [ isLogInVisible, setLogInVisible] = useState(false)

    // const generateCaptcha = () => {
    //     let a,b,c,d,e;
    //     const length = letters.length

    //     a = letters[Math.floor(Math.random() * length)];
    //     b = letters[Math.floor(Math.random() * length)];
    //     c = letters[Math.floor(Math.random() * length)];
    //     d = letters[Math.floor(Math.random() * length)];
    //     e = letters[Math.floor(Math.random() * length)];
        
    //     const code = a + b + c + d + e
    //     setCaptchaCode(code)
    // } 

    // const toggleLogIn = () => {
    //     information1.current.classList.toggle('modal-infoSide__toggle')
    //     information2.current.classList.toggle('modal-infoSide__toggle')
    //     form1.current.classList.toggle('modal-formSide__toggle')
    //     form2.current.classList.toggle('modal-formSide__toggle')
    //     setTimeout(() => {
    //         form1.current.style.opacity = isLogInVisible ? "1" : "0"
    //         form2.current.style.opacity = isLogInVisible ? "0" : "1"
    //         information1.current.style.opacity = isLogInVisible ? "1" : "0"
    //         information2.current.style.opacity = isLogInVisible ? "0" : "1"
    //     }, 260)
        
    //     setLogInVisible(!isLogInVisible)
    // }

    // useEffect(() => {
    //     generateCaptcha()
    // }, [])

    return (
        <Wrapper>

        </Wrapper>
    )
}

export default SignIn
