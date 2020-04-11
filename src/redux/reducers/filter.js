

export const sexFilter = (state = {man: false, woman: false, kid: false}, action) => {
    switch(action.type) {
        case 'FILTER_MAN':
            return state = {...state, man: !state.man}
        case 'FILTER_WOMAN':
            return state = {...state, woman: !state.woman}
        case 'FILTER_KID':
            return state = {...state , kid: !state.kid}
        default:
            return state
    }
}

export const sizeFilter = (state = {small: false, medium: false, big: false}, action) => {
    switch(action.type) {
        case 'FILTER_SMALL':
            return state = {...state, small: !state.small}
        case 'FILTER_MEDIUM':
            return state = {...state, medium: !state.medium}
        case 'FILTER_BIG':
            return state = {...state, big: !state.big}
        default:
            return state
    }
}


export const colorFilter = (state = {black: false, white: false, red: false, blue: false, others: false}, action) => {
    switch(action.type) {
        case 'FILTER_BLACK':
            return state = {...state, black: !state.black}
        case 'FILTER_WHITE':
            return state = {...state, white: !state.white}
        case 'FILTER_RED':
            return state = {...state, red: !state.red}
        case 'FILTER_BLUE':
            return state = {...state, blue: !state.blue}
        case 'FILTER_OTHERS':
            return state = {...state, others: !state.others}
        default:
            return state
    }
}

