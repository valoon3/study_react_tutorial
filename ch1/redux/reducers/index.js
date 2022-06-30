import { HYDRATE} from "next-redux-wrapper";

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
}

export const loginAction = data => {
    return {
        type: 'LOG_IN',
        data,
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE:', HYDRATE);
            return {...state, ...action.payload}
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            }
        default:
            return state;
    }
}

export default rootReducer;