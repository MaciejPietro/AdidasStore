import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import reload from '../../img/icons/reload.png'
import { login, isLogged } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'



const Form = styled.form`
width: 62%;
height: 30rem;
color:  black;
display: flex;
flex-direction: column;
padding: ${({login}) => login ? "8rem 4rem" : "3rem 4rem"};
z-index: 1;
transition: .8s;
transition-property: transform;
transition-timing-function: cubic-bezier(.39,.11,.47,.77);
position: absolute;
transform: translate(60%);
h4 {
    font-size: 1.6rem;
    margin-bottom: 1.4rem;
    text-align: center;
    color: black;
}
input {
    width: 70%;
    height: 2rem;
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
    margin: .8rem auto;
}
`

const Captcha = styled.div`
width: 60%;
height: 2.2rem;
margin: .8rem auto;
display: flex;
flex-direction: row;
z-index: 13;
div {
    width: 50%;
    height: 100%;
    p {
        margin: 0 auto;
        font-family: 'Capleton';
        font-size: 1.6rem;
        text-align: center;
        color: grey;
        margin-top: 0px;
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
const ValidationInfo = styled.div`
width: 50%;
height: 5rem;
position: absolute;
bottom: 0;
left: 30%;
p { 
    font-weight: 400;
    font-size: 1rem;
    color: red;
}
`

const SignForm = ({captchaCode, generateCaptcha, isLoginVisible, setLoginVisible }) => {
    const dispatch = useDispatch()
    const loginData = useSelector(state => state.login)
    const [ captchaValue, setCaptchaValue ] = useState()
    const [ userName, setUserName ] = useState()
    const [ userPassword, setUserPassword ] = useState()
    const [ userMail, setUserMail ] = useState()
    const [ typedName, setTypedName ] = useState()
    const [ typedPassword, setTypedPassword ] = useState()
    const validationInfoSign = useRef()
    const validationInfoLog = useRef()
    const loginView = useRef()
    const singinView = useRef()
    const warningEl = document.createElement("p")
    const newSignEl = () => validationInfoSign.current.appendChild(warningEl)
    const newLogEl = () => validationInfoLog.current.appendChild(warningEl)


    const getCaptchaValue = (e) => {
        setCaptchaValue(e.target.value)
    }

    const getName = (e) => {
        setUserName(e.target.value)
    }

    const getPassword = (e) => {
        setUserPassword(e.target.value)
    }

    const getMail = (e) => {
        setUserMail(e.target.value)
    }

    const displayProperForm = () => setTimeout(() => {
        loginView.current.style.opacity = isLoginVisible ? "0" : "1";
        loginView.current.style.zIndex = isLoginVisible ? "0" : "1";
        singinView.current.style.opacity = isLoginVisible ? "1" : "0";
        singinView.current.style.zIndex = isLoginVisible ? "1" : "0";
    }, 360)


    const signinUser = (e) => {
        e.preventDefault()
        const passwords = singinView.current.querySelectorAll('input[type="password"]')
        const theSamePasswords = passwords[0].value === passwords[1].value

        while (validationInfoSign.current.hasChildNodes()) {
            validationInfoSign.current.removeChild(validationInfoSign.current.lastChild);
        }

        if (/\s/.test(userName)) {
            newSignEl()
            warningEl.innerText = "*Mozesz podac tylko imie"    
        } else if(!theSamePasswords) {
            newSignEl()
            warningEl.innerText = "*Twoje hasla nie sa takie same"
        } else if(captchaCode !== captchaValue) {
            newSignEl()
            warningEl.innerText = "*Nieprawidlowy kod captcha"    
        } else {
            newSignEl()
            warningEl.style.color = "green"
            warningEl.innerText = "Teraz mozesz sie zalogowac"
            singinView.current.reset();

            dispatch(login(userName, userPassword, userMail, userPassword))

            setTimeout(() => {
                setLoginVisible(!isLoginVisible)
            }, 2000)         
        }
    }

    const getTypedName = e => {
        setTypedName(e.target.value)
    } 

    const getTypedPassword= e => {
        setTypedPassword(e.target.value)
    } 

    const loginUser = e => {
        e.preventDefault()

        while (validationInfoLog.current.hasChildNodes()) {
            validationInfoLog.current.removeChild(validationInfoLog.current.lastChild);
        }

        if(loginData.name !== typedName) {
            newLogEl()
            warningEl.innerText = "*Nie znaleziono uzytkownika o tym imieniu" 
        } else if (loginData.password !== typedPassword) {
            newLogEl()
            warningEl.innerText = "*Podales zle haslo" 
        } else {
                newLogEl()
                warningEl.style.color = "green"
                warningEl.innerText = "Zalogowales sie pomyslnie"
                loginView.current.reset();

                setTimeout(() => {
                    dispatch(isLogged(typedName))
                }, 2000)
            }
    }

    useEffect(() => {
        displayProperForm()

            return () => {
                clearTimeout(displayProperForm)
              }
    }, [isLoginVisible])

    return (
    <>
        <Form
            ref={singinView}
            isLoginVisible={isLoginVisible}
            style={{transform: `${isLoginVisible ? "translate(0)" : "translate(60%)"}`,
            opacity: "0"}}
            onSubmit={signinUser}
            >
            <h4>Zarejestuj sie teraz</h4>
            <input type="name" name="name" placeholder="Imie" required minLength="3" onChange={getName}/>
            <input type="email" name="email" placeholder="Email" required onChange={getMail} />
            <input type="password" name="password" placeholder="Haslo" required maxLength="15" minLength="5" onChange={getPassword}/>
            <input type="password" name="password" placeholder="Powtorz haslo" required maxLength="15" minLength="5"/>
            <Captcha>
                <div>
                    <p>{captchaCode}</p>
                </div>
                <input type="text" maxLength="5"  placeholder="Przepisz kod" onChange={getCaptchaValue}/>
                <span onClick={generateCaptcha}/>
            </Captcha>
            <input type="submit" name="sign_in" value="Zarejestruj"/>   
            <ValidationInfo ref={validationInfoSign}></ValidationInfo>            
        </Form>



        <Form
            login
            ref={loginView}
            isLoginVisible={isLoginVisible}
            style={{transform: `${isLoginVisible ? "translate(0)" : "translate(60%)"}`}}
            onSubmit={loginUser}
            >
            <h4>Zaloguj sie</h4>
            <input type="name" name="name" placeholder="Imie" required onChange={getTypedName}/>
            <input type="password" name="password" placeholder="Haslo" required onChange={getTypedPassword}/>
            <input type="submit" name="log_in" value="Zaloguj" />
            <ValidationInfo ref={validationInfoLog}></ValidationInfo>           
        </Form>
    </>   
    )
}


export default  SignForm