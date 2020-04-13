import React, { useEffect, useRef } from 'react'
import reducers from '../../redux/reducers/reducers'
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
const sortFilter = useSelector(state => state.sortFilter)
const sortText = useRef()


// const sortFilter = useSelector(state => state.colorFilter)

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
        // case "sizeUp":
        //         return parseFloat(a.price) - parseFloat(b.price);
        // case "sizedown":
        //         return parseFloat(a.price) - parseFloat(b.price);
        default:
      }

})

const sortClick = (e) => {
        const cos = document.querySelectorAll('.filter-sortText')
        console.log(cos)
        cos.forEach(costam => {
                costam.classList.remove('filter-sortText__active')
        })
  
        e.target.classList.add('filter-sortText__active')

        switch (e.target.innerText) {
                case "Cena rosnaco":
                        dispatch(filterSort("priceUp"))
                        console.log("priceUp")
                        break;
                case "Cena malejaco":
                        dispatch(filterSort("priceDown"))
                        console.log("priceDown")
                        break;
                case "Rozmiar rosnaco":
                        dispatch(filterSort("sizeUp"))
                        console.log("sizeUp")
                        break;
                case "Rozmiar malejaco":
                        dispatch(filterSort("sizeDown"))
                        console.log("sizeDown")
                        break;
                default:
        }
      
}

const toggleCheckbox = (e) => {
    e.target.classList.toggle('filter-checkbox__checked')
    applyFilter(e)
}

useEffect(() => {

}, [])
 
 return (
        <Wrapper>
            <Heading text={'Find your own'}/>
            <Filters checkboxClick={toggleCheckbox} sortClick={sortClick} sortText={sortText}/>
            <ProductsList filteredStore={sortProducts}/>
        </Wrapper>
    )
}

export default Products
