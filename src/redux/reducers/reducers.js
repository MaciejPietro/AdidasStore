import toggleSidebar from './toggleSidebar'
import { sexFilter, sizeFilter, colorFilter } from './filter'
import { combineReducers } from 'redux';

const reducers = combineReducers({
    sidebar: toggleSidebar,
    sexFilter,
    sizeFilter,
    colorFilter 
})

export default reducers

