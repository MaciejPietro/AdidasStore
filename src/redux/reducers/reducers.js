import toggleSidebar from './toggleSidebar'
import { sexFilter, sizeFilter, colorFilter, sortFilter } from './filter'
import { combineReducers } from 'redux';

const reducers = combineReducers({
    sidebar: toggleSidebar,
    sexFilter,
    sizeFilter,
    colorFilter,
    sortFilter
})

export default reducers

