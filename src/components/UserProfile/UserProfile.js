import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/icons/avatar.jpg'
import inProgress from '../../img/icons/inProgress.jpg'



const Wrapper = styled.div`
width: 100%;
height: 30rem;
display: flex;
flex-direction: row;
`
const Left = styled.div`
width: 36%;
height: 30rem;
background-color: black;
color: white;
padding: 2rem 2rem;
h4 {
    font-size: 2rem;
    font-weight: 400;
    margin: 1rem 0;
    text-align: center;
    letter-spacing: 1.3px;
}
p {
    b{
        font-weight: 500;
    }
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;
    height: 3rem;
    letter-spacing: 1px;
}
button {
    width: 60%;
    height: 3rem;
    border: 1.4px solid white;
    background-color: black;
    color: white;
    border-radius: 30px;
    letter-spacing: 1.3px;
    margin: 2rem 20% 0 20%;
    
}
`
const Avatar = styled.span`
display: block;
width: 8rem;
height: 8rem;
border: .8px solid white;
border-radius: 50%;
margin: 0 auto;
background-image: url(${avatar});
background-size: contain;
`

const Right = styled.div`
width: 64%;
height: 30rem;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
div {
    display: block;
    width: 16rem;
    height: 16rem;
    background-image: url(${inProgress});
    background-size: contain;
    background-repeat: no-repeat;
}
`

function UserProfile({isLogged, userData, logOut}) {
    return (
        <Wrapper>
            <Left>
                <Avatar/>
                <h4>{userData.name}</h4>
                <p><b>E-mail</b><br /> {userData.mail}</p>
                <p><b>Haslo</b><br /> {userData.password}</p>
                <button onClick={logOut}>Wyloguj</button>
            </Left>
            <Right>
                <div></div>
            </Right>
        </Wrapper>
    )
}

export default UserProfile
