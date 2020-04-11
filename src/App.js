import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paul from './img/fonts/Paul.ttf'
import { createGlobalStyle } from 'styled-components'
import NavbarWhite from './components/NavbarWhite/NavbarWhite'
import NavbarBlack from './components/NavbarBlack/NavbarBlack'
import Home from './containers/Home/Home'
import Products from './containers/Products/Products'



const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  @font-face {
    font-family: 'Aga';
    src: url(${Paul}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`
function App() {

  return (
    <> 
      <Global />
      <NavbarWhite/>
      <NavbarBlack />
      <Home />
      <Products />
    </>
  );
}

export default App;
