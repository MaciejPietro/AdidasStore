import toggleSidebar from './toggleSidebar'
import { sexFilter, sizeFilter, colorFilter, sortFilter } from './filter'
import { changeFavourite } from './inFavourite'
import { combineReducers } from 'redux';

const reducers = combineReducers({
    sidebar: toggleSidebar,
    sexFilter,
    sizeFilter,
    colorFilter,
    sortFilter,
    changeFavourite
})

export default reducers

