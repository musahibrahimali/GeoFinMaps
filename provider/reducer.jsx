export const initialState = {
    theme: false,
    user: null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_THEME: 'SET_THEME',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                theme: action.theme,
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default reducer;