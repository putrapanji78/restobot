const initialState = {
    number: 0
}

const tables = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TABLES':
            return {
                ...state,
                number: action.playload
            }
        
        default:
            return state
    }
}

export default tables