import React from 'react'
import styled from 'styled-components'



const List = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1rem 30vw;
list-style: none;
@media (max-width: 1200px) {
    padding: 1rem 20vw; 
}
@media (max-width: 767px) {
    padding: 1rem 10vw; 
}
`

const Item = styled.li`
color: white;
letter-spacing: 1.2px;
span {
    display: block;
    width: 0%;
    height: 1.2px;
    background-color: white;
    margin-top: -25px;
    opacity: .6;
    transition: .5s;
}
span:nth-child(2)  {
    display: block;
    width: 0%;
    height: 1.2px;
    background-color: white;
    margin-top: 25px;
    margin-left: 100%;
}
&:hover {
    span {
        width: 100%;
        margin-left: 0%;
    }
}
`

function Menu() {
    return (
            <List>
                <Item>Mezczyzni<span /> <span /></Item>
                <Item>Kobiety <span /> <span /></Item>
                <Item>Dzieci <span /> <span /></Item>
                <Item>Sport <span /> <span /></Item>
                <Item>Promocje <span /> <span /></Item>
            </List>

    )
}

export default Menu