import React, { useEffect } from 'react'
import styled from 'styled-components'
import Heading from '../../components/Heading/Heading'
import Filters from '../../components/Filters/Filters'
import ProductsList from '../../components/ProductsList/ProductsList'
import { products } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
filterMan, filterWoman, filterKid,
filterSmall, filterMedium, filterBig,
filterBlack, filterWhite, filterRed, filterBlue, filterOthers 
} from '../../redux/actions/actions'
// import applyFilter from '../../redux/reducers/applyFilter'

const Wrapper = styled.section`
width: 100vw;
height: 1000px;
display: flex;
flex-direction: column;
align-items: center;
`

function Products() {
const dispatch = useDispatch()
const sexFilter = useSelector(state => state.sexFilter)
const sizeFilter = useSelector(state => state.sizeFilter)
const colorFilter = useSelector(state => state.colorFilter)

const applyFilter = (e) => {
    switch(e.target.dataset.option) {
    case "Mezczyzna":
            dispatch(filterMan())
            break;
    case "Kobieta":
            dispatch(filterWoman())
            break;
    case "Dziecko":
            dispatch(filterKid())
            break;
    case "30-35":
            dispatch(filterSmall())
            break;
    case "36-40":
            dispatch(filterMedium())
            break;
    case "41-45":
            dispatch(filterBig())
            break;
    case "czarny":
            dispatch(filterBlack())
            break;
    case "bialy":
            dispatch(filterWhite())
            break;
    case "czerwony":
            dispatch(filterRed())
            break;
    case "niebieski":
            dispatch(filterBlue())
            break;
    case "inne":
            dispatch(filterOthers())
            break;
            default:
            }
}

const filteredSex = products.filter(product => {
    const { man, woman, kid } = sexFilter

    const opt1 = man === true ? "man" : ""
    const opt2 = woman === true ? "woman" : ""
    const opt3 = kid === true ? "kid" : ""

    return product.sex === opt1 || product.sex === opt2 || product.sex === opt3
})

const filteredSize = filteredSex.filter(product => {
    const { small, medium, big } = sizeFilter
 
    const opt1 = small === true ? "small" : ""
    const opt2 = medium === true ? "medium" : ""
    const opt3 = big === true ? "big" : ""

    return product.size === opt1 || product.size === opt2 || product.size === opt3
})



const toggleCheckbox = (e) => {
    e.target.classList.toggle('filter-checkbox__checked')
    applyFilter(e)
}

useEffect(() => {
    
}, [sexFilter, filteredSize])
 
 return (
        <Wrapper>
            <Heading text={'Find your own'}/>
            <Filters checkboxClick={toggleCheckbox}/>
            <ProductsList filteredSize={filteredSize}/>

        </Wrapper>
    )
}

export default Products
