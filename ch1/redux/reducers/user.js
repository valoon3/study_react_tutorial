

export const initialState = {
    inLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return{
                ...state,
                isLoggedIn: false,
            }
        default:
            return state;

    }
};

export default reducer;