const initialCartState = {
    arr:[]
}


export const changeCart = (state = initialCartState, action) => {
    let array = state.arr
    switch(action.type) {
            case 'ADD_CART':
                return { 
                    // ...state,
                    // arr: [...array, {
                    //         id: action.id,
                    //         name: action.name,
                    //         color: action.color,
                    //         size: action.size,
                    //         quantity: action.quantity}]
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

