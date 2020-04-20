import React from 'react'
import styled from 'styled-components'
import logo from '../../img/icons/logo.png'
// import search from '../../img/icons/search.png'
import favourite from '../../img/icons/favourite.png'
import cart from '../../img/icons/cart.png'
import login from '../../img/icons/login.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, toggleLogModal } from '../../redux/actions/actions'
import { Link } from "react-router-dom";

  

const Wrapper = styled.nav`
width: 100vw;
height: 10vh;
box-sizing: border-box;
z-index: 2;
padding: 2vh 7vw;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: white;
border-bottom: 2px solid black;
@media (max-width: 575px) {
    flex-direction: row-reverse;
}
`

const Logo = styled(Link)`
display: block;
width: 6rem;
height: 4rem;
background-image: url(${({img}) => img});
background-size: contain;
background-repeat: no-repeat;
cursor: pointer;
`

const Options = styled.div`
width: 16rem;
height: 6vh;
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 1.3rem;
div {
    width: 22%;
    height: 6vh;
}
`

const Option = styled(Link)`
display: flex;
flex-direction: row;
min-width: 8rem;
height: 6vh;
cursor: pointer;
color: black;
 p {
     font-size: 1rem;
     letter-spacing: 1.6px;
     height: 8vh;
     padding: 1rem 0;
 }


div {
    display: ${({items}) => items ? "flex" : "none"};
    position: absolute;
    width: 17px;
    height: 17px;
    border: 1px solid black;
    background-color: white;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 30px;
    font-size: 14px;
    justify-content: center;
    align-items: center;
}
&:last-child {
    div {
        display: none;
    }
}

&:hover {
    text-decoration: none;
    color: black;
}

 @media (max-width: 991px) {
    min-width: 0;
     p {    
         opacity: 0;
         font-size: .7rem;
     }
 }
`

// const Search = styled.label`
// display: flex;
// flex-direction: row;
// align-items: center;
// &::after {
//     content: '';
//     position: relative;
//     height: 2rem;
//     width: 2rem;
//     margin-top: .4rem;
//     background-color: black;
//     background-image: url(${({img}) => img});
//     filter: ${({active}) => active ? "" : "invert(1)"};
//     background-repeat: no-repeat;
//     border-radius: 50%;
//     background-position: center;
//     background-size: 50%;
//     transition: .4s;
// }
// `
// const Bar = styled.input`
// margin-top: .4rem;
// height: 2.13rem;
// transform: translate(2.1rem);
// border-radius: 50px 50px 50px 50px;
// border: 1px solid black;
// padding-left: 10px;
// transition: .8s;
// width: ${({active}) => active ? "20vw" : "2.2rem"};
// max-width: 14rem;
// outline: none;
// @media (max-width: 575px) {
//     width: ${({active}) => active ? "36vw" : "2.2rem"};
// }
// `

const Icon = styled.span`
display: block;
min-width: 6vh;
height: 6vh;
background-image: url(${({img}) => img});
background-repeat: no-repeat;
background-size: 50%;
background-position: center;
`

const Button = styled.div`
width: 2.4rem;
height: 1.6rem;
margin-top: .9rem;
margin-left: 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
    span {
        display: block;
        width: 2rem;
        height: 4px;
        background-color: black;
        border-radius: 30%;
        transition: 0.6s;
        transform: none;
        opacity: 1;
    }
`




function NavbarWhite({ click }) {
const dispatch = useDispatch()
const favourites = useSelector(state => state.changeFavourite);
const isLogged = useSelector(state => state.isLogged)
const carts = useSelector(state => state.changeCart);
// const [ searchBar, setSearchBar ] = useState(false)

const toggleModal = () => {
    dispatch(toggleLogModal())
}

const options = [
    {
      name: "Ulubione",
      icon: favourite,
      items: favourites.arr.length,
      to: "/favourites"

    },
    {
      name: "Koszyk",
      icon: cart,
      items: carts.arr.length,
      to: "/cart"
    },
    {
      name: isLogged.isLogged ? isLogged.name : "Zaloguj",
      icon: login,
      to: '',
      click: toggleModal
    }
  ]

    // function toggleSearchBar() {
    //     setSearchBar(!searchBar)
    // }

    function toggleButton(e) {
        e.currentTarget.classList.toggle('navbar-btn__active');
        dispatch(toggleSidebar())
    }

    // useEffect(() => {

    // }, [isLogged])

    return (
        <Wrapper className="sticky-top">
            <Logo className="d-none d-sm-block" img={logo} to="/"></Logo>

            <Button onClick={toggleButton} className="d-flex d-sm-none">
                <span />
                <span />
                <span />
            </Button>

            {/* <Search className="ml-auto" img={search} active={searchBar}>
                    <Bar onClick={toggleSearchBar} active={searchBar} type="text" placeholder="Search.."></Bar>
            </Search> */}

            <Options className="col-xl-4 col-5">
                {options.map(option => (
                    <Option 
                        key={option.name} 
                        to={option.to}
                        onClick={option.click}
                        items={option.items}>                   
                            <Icon img={option.icon}/>
                            <div>{option.items}</div>
                            <p>{option.name}</p>     
                    </Option>
                ))}
            </Options>
            
        </Wrapper>
    )
}

export default NavbarWhite
