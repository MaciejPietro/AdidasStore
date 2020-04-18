import React from 'react'
import styled from 'styled-components'
import reload from '../../img/icons/reload.png'



const Form = styled.form`
width: 62%;
height: 30rem;
color:  black;
display: flex;
flex-direction: column;
padding: 3rem 4rem;
z-index: 1;
transition: .8s;
transform: ${({isLoginVisible}) => isLoginVisible ? "translate(0%)" : "translate(60%)"};
h4 {
    font-size: 1.6rem;
    margin-bottom: 3rem;
    text-align: center;
}
input {
    width: 70%;
    margin: .36rem auto;
    border: none;
    border-bottom: 1px solid black;
    font-weight: 300;
    letter-spacing: 1px;
}
input[type="submit"]{
    background-color: black;
    color: white;
    outline: none;
    width: 10rem;
    height: 3rem;
    border-radius: 30px;
    margin: .6rem auto;
}
`

const Captcha = styled.div`
width: 60%;
height: 4rem;
border: 1px solid gray;
border-left: none;
border-right: none;
margin: .4rem auto;
display: flex;
flex-direction: row;
div {
    width: 50%;
    height: 100%;
    p {
        margin: 0 auto;
        font-family: 'Capleton';
        font-size: 1.8rem;
        text-align: center;
        color: grey;
        margin-top: 10px;
        transform: rotate(30deg);

    }
}
input {
    width: 50%;
    height: 100%;
    margin: 0;
    border: none;
    outline: none;
}
span {
    display: block;
    position: relative;
    right: 5px;
    margin-top: 2.6rem;
    background-image: url(${reload});
    background-size: 90%;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    opacity: .6;
}
`

export function SignForm({captchaCode, generateCaptcha, isLoginVisible}) {
    return (
        <Form isLoginVisible={isLoginVisible}>
            <h4>Zarejestuj sie teraz</h4>
            <input type="name" name="name" placeholder="Imie" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Haslo" required />
            <input type="password" name="password" placeholder="Powtorz haslo" required />
            <Captcha>
                <div>
                    <p>{captchaCode}</p>
                </div>
                <input type="text" placeholder="Przepisz kod"/>
                <span onClick={generateCaptcha}/>
            </Captcha>
            <input type="submit" name="sign_in" value="Zarejestruj" className="in" />               
            </Form>
    )
}

export function LoginForm({captchaCode, generateCaptcha, isLoginVisible}) {
    return (
        <Form isLoginVisible={isLoginVisible}>
            <h4>Zarejestuj sie teraz</h4>
            <input type="name" name="name" placeholder="Imie" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Haslo" required />
            <input type="password" name="password" placeholder="Powtorz haslo" required />
            <Captcha>
                <div>
                    <p>{captchaCode}</p>
                </div>
                <input type="text" placeholder="Przepisz kod"/>
                <span onClick={generateCaptcha}/>
            </Captcha>
            <input type="submit" name="sign_in" value="Zarejestruj" className="in" />               
            </Form>
    )
}


