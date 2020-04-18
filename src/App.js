import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paul from './img/fonts/Paul.ttf'
import Capleton from './img/fonts/Paul.ttf'
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavbarWhite from './components/NavbarWhite/NavbarWhite'
import NavbarBlack from './components/NavbarBlack/NavbarBlack'
import Home from './containers/Home/Home'
import Products from './containers/Products/Products'
import Favourites from './containers/Favourites/Favourites'
import Cart from './containers/Cart/Cart'
import Item from './containers/Item/Item'
import LogModal from './containers/LogModal/LogModal'



const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    display: none;
}
  @font-face {
    font-family: 'Aga';
    src: url(${Paul}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Capleton';
    src: url(${Capleton}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`
function App() {

  return (
    <Router> 
      <Global />
      <NavbarWhite/>
      <NavbarBlack />
      <LogModal />
      <Switch>
          <Route exact path="/" >
            <>
              <Home />
              <Products />
            </>
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
