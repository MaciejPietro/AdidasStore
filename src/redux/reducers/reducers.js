import toggleSidebar from './toggleSidebar'
import toggleLogModal from './toggleLogModal'
import { sexFilter, sizeFilter, colorFilter, sortFilter } from './filter'
import { changeFavourite } from './inFavourite'
import { changeCart } from './inCart'
import { combineReducers } from 'redux';
import { login, isLogged } from './login'
import { singleItem } from './singleItem'

const reducers = combineReducers({
    sidebar: toggleSidebar,
    modal: toggleLogModal,
    sexFilter,
    sizeFilter,
    colorFilter,
    sortFilter,
    changeFavourite,
    changeCart,
    login,
    isLogged,
    singleItem
})

export default reducers

