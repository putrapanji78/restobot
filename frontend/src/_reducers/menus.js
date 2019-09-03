const initialState = {
    data: [],
    isLoading: false
}

const menus = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MENUS':
            return {
                ...state,
                data: action.playload
            }
        
        default:
            return state
    }
}

export default menus