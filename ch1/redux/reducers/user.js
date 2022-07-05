

export const initialState = {
    isLoggedIn: false,
    user: {
        userId: '',
        userPassword: '',
    },
    signUpData: {},
    loginData: {},
}

export const loginAction = () => {
    return {
        type: 'LOG_IN',
        isLoggedIn : true,
    }
};

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
        isLoggedIn: false,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            console.log(state);
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            }
        case 'LOG_OUT':
            console.log(state);
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            }
        default:
            return state;

    }
};

export default reducer;