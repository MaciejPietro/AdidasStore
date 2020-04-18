const initialCartState = {
    arr:["1", "2", "3"]
}


export const changeCart = (state = initialCartState, action) => {
    let array = state.arr
    switch(action.type) {
        case 'ADD_CART':
            return { 
                ...state,
                arr: [...array, action.item]
            }
        case 'REMOVE_CART':
            let index = state.arr.indexOf(action.item.toString());
            array.splice(index, 1)
            return { 
                ...state,
                arr: state.arr
            }
        default:
            return state
    }
}