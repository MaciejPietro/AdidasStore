import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux'
import { toggleLogModal } from '../../redux/actions/actions'
import { useSelector } from 'react-redux'
import { SignForm, LoginForm} from '../../components/SignForm/SignForm'
import SignInInformation from '../../components/SignInformation/SignInformation'

const Wrapper = styled.div`
width: 54rem;
height: 30rem;
border: 2px solid black;
display: flex;
transition: 1s;
flex-direction: row;
z-index: 0;
`

Modal.setAppElement('#root')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      padding               : '0',
      transform             : 'translate(-50%, -50%)'
    }
  };
   

function LogModal() {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)
    const [ captchaCode, setCaptchaCode ] = useState()
    const [ isLoginVisible, setLoginVisible ] = useState(false)

    const closeModal = () => {
        dispatch(toggleLogModal())
    }

    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k',
    'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];   
    // const [ isLogInVisible, setLogInVisible] = useState(false)

    const generateCaptcha = () => {
        let a,b,c,d,e;
        const length = letters.length

        a = letters[Math.floor(Math.random() * length)];
        b = letters[Math.floor(Math.random() * length)];
        c = letters[Math.floor(Math.random() * length)];
        d = letters[Math.floor(Math.random() * length)];
        e = letters[Math.floor(Math.random() * length)];
        
        const code = a + b + c + d + e
        setCaptchaCode(code)
    } 

    const toggleView = () => {
        setLoginVisible(!isLoginVisible)

        setTimeout(() => {

        }, 260)
    }
 
    useEffect(() => {
        generateCaptcha()
    }, [])



    return (
        <Modal
        // isOpen={modal}
          isOpen={true}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        > 
            <Wrapper>
                <SignForm
                    generateCaptcha={generateCaptcha}
                    captchaCode={captchaCode}
                    isLoginVisible={isLoginVisible}                 
                    />
                
                <SignInInformation 
                    toggleView={toggleView} 
                    isLoginVisible={isLoginVisible}
                    />
            </Wrapper>     
        </Modal>
    )
}

export default LogModal
