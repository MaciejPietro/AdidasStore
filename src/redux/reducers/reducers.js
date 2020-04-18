import toggleSidebar from './toggleSidebar'
import toggleLogModal from './toggleLogModal'
import { sexFilter, sizeFilter, colorFilter, sortFilter } from './filter'
import { changeFavourite } from './inFavourite'
import { changeCart } from './inCart'
import { combineReducers } from 'redux';

const reducers = combineReducers({
    sidebar: toggleSidebar,
    modal: toggleLogModal,
    sexFilter,
    sizeFilter,
    colorFilter,
    sortFilter,
    changeFavourite,
    changeCart
})

export default reducers

