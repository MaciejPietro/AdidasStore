const initialFavouriteState = {
    arr:["5", "6", "7"]
}


export const changeFavourite = (state = initialFavouriteState, action) => {
    let array = state.arr
    switch(action.type) {
        case 'ADD_FAVOURITE':
            return { 
                ...state,
                arr: [...array, action.item]
            }
        case 'REMOVE_FAVOURITE':
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