import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Heading from '../../components/Heading/Heading'
import Filters from '../../components/Filters/Filters'
import ProductsList from '../../components/ProductsList/ProductsList'
import { products } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
filterMan, filterWoman, filterKid,
filterSmall, filterMedium, filterBig,
filterBlack, filterWhite, filterRed, filterBlue, filterOthers,
filterSort
} from '../../redux/actions/actions'


const Wrapper = styled.section`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`


function Products() {
const dispatch = useDispatch()
const sexFilter = useSelector(state => state.sexFilter)
const sizeFilter = useSelector(state => state.sizeFilter)
const colorFilter = useSelector(state => state.colorFilter)
const sortFilter = useSelector(state => state.sortFilter)
const sortText = useRef()

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

const filterSex = products.filter(product => {
        let { man, woman, kid } = sexFilter

        man = man ? "man" : false
        woman = woman ? "woman" : false
        kid = kid ? "kid" : false

        if(!man && !woman && !kid ){
                return true
        } else {
                return product.sex === man || product.sex === woman || product.sex === kid
        }
    })

const filterSize = filterSex.filter(product => {
        let { small, medium, big } = sizeFilter
   
        small = small ? "small" : false
        medium = medium ? "medium" : false
        big = big ? "big" : false
    
        if(!small && !medium && !big ){
                return true
        } else {
                return product.size === small || product.size === medium || product.size === big
        }
    })

    const filterColor = filterSize.filter(product => {
        let { black, white, blue, red, others } = colorFilter   
    
        black = black ? "black" : ""
        white = white ? "white" : ""
        blue = blue ? "blue" : ""
        red = red ? "red" : ""
        others = others ? "others" : ""
    
        if(!black && !white && !blue && !red  && !others){
                return true
        } else {
                return product.color === black || product.color === white || product.color === blue || product.color === red || product.color === others
        }
    })


const sortProducts = filterColor.sort((a , b) => {
      const { text } = sortFilter
      switch(text) {
        case "random":
                return parseFloat(a.price) - parseFloat(b.price);
        case "priceUp":
                return parseFloat(a.price) - parseFloat(b.price);
        case "priceDown":
                return parseFloat(b.price) - parseFloat(a.price);
        case "sizeUp":
                return parseFloat(a.sizes[0]) - parseFloat(b.sizes[0]);
        case "sizedown":
                return parseFloat(b.sizes[0]) - parseFloat(a.sizes[0]);
        default:
                return filterColor;
      }

})

const sortClick = (e) => {
        const currentSortOption = document.querySelectorAll('.filter-sortText')
        
        e.target.classList.add('filter-sortText__active')
        currentSortOption.forEach(sortOption => {
                sortOption.classList.remove('filter-sortText__active')
        })
  
        switch (e.target.innerText) {
                case "Cena rosnaco":
                        return dispatch(filterSort("priceUp"))
                case "Cena malejaco":
                        return dispatch(filterSort("priceDown"))
                case "Rozmiar rosnaco":
                        return dispatch(filterSort("sizeUp"))
                case "Rozmiar malejaco":
                        return dispatch(filterSort("sizeDown"))
                default:
        }     
}

const toggleCheckbox = (e) => {
    e.target.classList.toggle('filter-checkbox__checked')
    applyFilter(e)
}


useEffect(() => {
        dispatch(filterSort("none"))
}, [dispatch])
 
 return (
        <Wrapper>
            <Heading text={'Znajdz swoje wlasne'}/>
            <Filters checkboxClick={toggleCheckbox} sortClick={sortClick} sortText={sortText}/>
            <ProductsList filteredStore={sortProducts}/>
        </Wrapper>
    )
}

export default Products
