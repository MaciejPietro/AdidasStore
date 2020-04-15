const initialFavouriteState = {
    arr:["5"]
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
            let index = array.indexOf(action.item);
            array.splice(index, 1)
            return { 
                ...state,
                arr: state.arr
            }
        default:
            return state
    }
}