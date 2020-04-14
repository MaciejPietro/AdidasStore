import React from 'react'
import styled from 'styled-components'
import arrowDown from '../../img/icons/arrowDown.png'
import checked from '../../img/icons/checked.png'



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
        name: "",
        type: "",
        choices: []
    },
    {
        name: "Sortuj wedlug",
        icon: arrowDown,
        type: "sort",
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
white-space: nowrap;
cursor: default;
&:nth-last-child(2) {
    width : 60%;
}
&:hover {
    border: 1.4px solid black;
    div {
        display: flex;
    }
    &:nth-last-child(2) {
        border: none;
    }
}
@media (max-width: 991px) {
    &:nth-last-child(2) {
        width: 36%;
    }
}
@media (max-width: 676px) {
    &:nth-last-child(2) {
        display: none;
    }
}
`
const Drop = styled.div`
display: none;
opacity: ${({flag}) => flag.length === 0 ? "0" : "1"};
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
        font-weight: 300;
    }
    h6 {
        font-weight: 300;
        &::before {
            width: 100%;
            height: 30px;
            content: '';
            position: absolute;
            background-color: rgba(0,0,0, .2);
            z-index: -1;
            margin-left: -10px;
            margin-top: -5px;
            opacity: 0;
        }
        &:hover {
            &::before {
                opacity: 1;
            }
        }
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
cursor:  pointer;
`



function Filters({click, checkboxClick, sortClick, sortText}) {

    return (
        <>
            <Wrapper >
                {filters.map(filter => (
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        <Option key={filter.name} onClick={click}>
                            <p>{filter.name}</p>
                            <Icon img={filter.icon}></Icon>
                            <Drop flag={filter.choices}>
                                {filter.choices.map(option => (
                                    <Label key={option}>
                                        {filter.type === "sort" ?
                                        <>
                                        <h6 onClick={sortClick} ref={sortText} className="filter-sortText">{option}</h6>
                                        </>
                                        :
                                        <>
                                        <Checkbox onClick={checkboxClick} img={checked} data-option={option}/>
                                        <p>{option}</p>
                                        </>
                                        }

                                    </Label>        
                                ))}
                            </Drop>
                        </Option>
                    ))}
            </Wrapper>
        </>
    )
}

export default Filters
