const logModal = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_LOGMODAL':
            return !state
        default:
            return state
    }
}

export default logModal