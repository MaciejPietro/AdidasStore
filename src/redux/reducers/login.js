const initialData = {
    name: "admin",
    password: "123",
    mail: ""
}


export const login = (state = initialData, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, name: action.name, password: action.password, mail: action.mail}
        case 'IS_LOGGED':
            return {...state, isLogged: action.isLogged}
        default:
            return state
        
    }
}

const initalLoggedData = {
    isLogged: false,
    name: ''
}

export const isLogged = (state = initalLoggedData, action) => {
    switch(action.type) {
        case 'IS_LOGGED':
            return state = {isLogged: !state.isLogged , name: action.name}
        default:
            return state
    }
}



