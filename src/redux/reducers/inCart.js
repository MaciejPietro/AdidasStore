const initialCartState = {
    arr:[{
        id: "0",
        color: "kolor",
        size: "rozmier",
        quantity: "ilosc"
    },
    {
        id: "10",
        color: "kolor",
        size: "rozmier",
        quantity: "ilosc"
    },
    {
        id: "12",
        color: "kolor",
        size: "rozmier",
        quantity: "ilosc"
    }]
}


export const changeCart = (state = initialCartState, action) => {
    let array = state.arr
    switch(action.type) {
        case 'ADD_CART':
            return { 
                ...state,
                arr: [...array, {
                        id: action.id,
                        color: action.color,
                        size: action.size,
                        quantity: action.quantity}]
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


// const initialCartState = {
//     arr:["8"]
// }


// export const changeCart = (state = initialCartState, action) => {
//     let array = state.arr
//     switch(action.type) {
//         case 'ADD_CART':
//             return { 
//                 ...state,
//                 arr: [...array, action.item]
//             }
//         case 'REMOVE_CART':
//             let index = state.arr.indexOf(action.item.toString());
//             array.splice(index, 1)
//             return { 
//                 ...state,
//                 arr: state.arr
//             }
//         default:
//             return state
//     }
// }
