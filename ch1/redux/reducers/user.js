

export const initialState = {
    isLoggedIn: false,
    userInfo: {
        userId: '',
        userPassword: '',
    },
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        isLoggedIn : true,
        userInfo: data,
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
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userInfo.userId,
                }
            }
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            }
        default:
            return state;

    }
};

export default reducer;