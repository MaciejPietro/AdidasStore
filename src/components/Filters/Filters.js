import React from 'react'
import styled from 'styled-components'
import arrowDown from '../../img/icons/arrowDown.png'
import checked from '../../img/icons/checked.png'
import '../../animations/animations.css'



const filters = [
    {
        name: "Plec",
        icon: arrowDown,
        type: "dropdown",
        choices: ["Mezczyzna", "Kobieta", "Dziecko"],

    },
    {
        name: "Rozmiar",
        icon: arrowDown,
        type: "dropdown",
        choices: ["30-35", "36-40", "41-45"],
    },
    {
        name: "Kolor",
        icon: arrowDown,
        type: "dropdown",
        choices: ["czarny", "bialy", "czerwony", "niebieski", "inne"],
    },
    {
        name: "Promocje",
        type: "single",
        choices: []
    },
    {
        name: "Nowosci",
        type: "single",
        choices: []
    },
    {
        name: "",
        type: "",
        choices: []
    },
    {
        name: "Sortuj wedlug",
        icon: arrowDown,
        type: "dropdown",
        choices: ["Cena rosnaco", "Cena malejaco", "Rozmiar rosnaco", "Rozmiar malejaco"]
    }
  ]
  

const Wrapper = styled.div`
width: 90vw;
height: 3rem;
border: 1px solid rgba(0,0,0, .2);
margin-top: 1rem;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Option = styled.div`
padding: .7rem 1rem;
margin-right: 10px;
display: flex;
flex-direction: row;
z-index: 2;
border: 1.4px solid transparent;
&:nth-last-child(2) {
    width : 40%;
}
&:nth-last-child(4) {
    width : 7%;
}
&:hover {
    border: 1.4px solid black;
    div {
        display: flex;
    }
}
`
const Drop = styled.div`
display: none;
opacity: ${({flag}) => flag.length === 0 ? "0" : "1"};
height: 20%;
border: 2px solid red;
font-size: .7rem;
position: absolute;
margin-top: 2.2rem;
margin-left: -1.05rem;
flex-direction: column;
border: 1.4px solid black;
border-top: none;
background-color: white;
z-index: 3;
`

const Icon = styled.span`
display: block;
width: .6rem;
height: .6rem;
background-image: url(${({img}) => img});
background-size: cover;
background-position: center;
margin-top: .5rem;
margin-left: 1.6rem;
`


const Label = styled.label`
    display: flex;
    margin: 0;
    padding: 6px 10px;
    p {
        font-size: 1rem;
        padding-left: 10px;
    }
    &:first-child {
        margin-top: 1rem;
    }
    
`
const Checkbox = styled.span`
width: 24px;
height: 24px;
background-color: white;
border: 2px solid black;
background-image: url(${({img}) => img});
background-size: cover;
transition: .2s;
background-position: -1px 0px;
`

const AppliedFilters = styled.div`
width: 90vw;
height: 2.4rem;
background-color: white;

`
const Filter = styled.div`
width: 7rem;
height: 1.6rem;
margin: .4rem 0;
background-color: lightgrey;
`

function Filters({click, checkboxClick}) {

    return (
        <>
            <Wrapper >
                {filters.map((filter, i) => (
                        <Option key={filter.name} onClick={click}>
                            <p>{filter.name}</p>
                            <Icon img={filter.icon}></Icon>
                            <Drop flag={filter.choices}>
                                {filter.choices.map(option => (
                                    <Label key={option}>
                                        <Checkbox onClick={checkboxClick} img={checked} data-option={option}/>
                                        <p>{option}</p>
                                    </Label>        
                                ))}
                            </Drop>
                        </Option>
                    ))}
            </Wrapper>
            <AppliedFilters className="mx-auto">
                   <Filter>
                    Mezczyzna x
                    </Filter>                 
            </AppliedFilters>
        </>
    )
}

export default Filters
