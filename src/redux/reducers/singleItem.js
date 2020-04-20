

export const singleItem = (state = "0", action) => {
    switch(action.type) {
        case 'SET_ITEM':
            return state = action.id
        default:
            return state
        
    }
}
