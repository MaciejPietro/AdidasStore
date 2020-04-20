export const toggleSidebar = () => {
    return {
        type: 'TOGGLE_SIDEBAR'
    }
}

export const toggleLogModal = () => {
    return {
        type: 'TOGGLE_LOGMODAL'
    }
}

export const filterMan = () => {
    return {
        type: 'FILTER_MAN'
    }
}

export const filterWoman = () => {
    return {
        type: 'FILTER_WOMAN'
    }
}

export const filterKid = () => {
    return {
        type: 'FILTER_KID'
    }
}

export const filterSmall = () => {
    return {
        type: 'FILTER_SMALL'
    }
}

export const filterMedium = () => {
    return {
        type: 'FILTER_MEDIUM'
    }
}

export const filterBig = () => {
    return {
        type: 'FILTER_BIG'
    }
}

export const filterBlack = () => {
    return {
        type: 'FILTER_BLACK'
    }
}

export const filterWhite = () => {
    return {
        type: 'FILTER_WHITE'
    }
}

export const filterRed = () => {
    return {
        type: 'FILTER_RED'
    }
}

export const filterBlue = () => {
    return {
        type: 'FILTER_BLUE'
    }
}

export const filterOthers = () => {
    return {
        type: 'FILTER_OTHERS'
    }
}

export const filterSort = text => {
    return {
        type: 'FILTER_SORT',
        text
    }
}

export const addFavourite = item => {
    return {
        type: 'ADD_FAVOURITE',
        item
    }
}

export const removeFavourite = item => {
    return {
        type: 'REMOVE_FAVOURITE',
        item
    }
}

export const addCart = (id, color, size, quantity) => {
    return {
        type: 'ADD_CART',
        id,color,size,quantity
    }
}

export const removeCart = id => {
    return {
        type: 'REMOVE_CART',
        id
    }
}

export const login = (name, password, mail) => {
    return {
        type: 'LOGIN',
        name,
        password,
        mail
    }
}

export const isLogged = (name) => {
    return {
        type: 'IS_LOGGED',
        name

    }
}


export const singleItem = (id) => {
    return {
        type: 'SET_ITEM',
        id

    }
}





