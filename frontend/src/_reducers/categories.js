const initialState = {
    data: [],
    isLoading: false
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                data: action.playload
            }
        
        default:
            return state
    }
}

export default categories