import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux"; // 함수를 합쳐야 하기때문에 도움을 받는다.
import user from './user';

// const initialState = {
//     user: {
//         isLoggedIn: false,
//         user: null,
//         signUpData: {},
//         loginData: {},
//     },
//     post: {
//         mainPosts: [],
//     }
// }

export const loginAction = data => {
    return {
        type: 'LOG_IN',
        data,
    }
}

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case HYDRATE:
//             console.log('HYDRATE:', HYDRATE);
//             return {...state, ...action.payload}
//         case 'LOG_IN':
//             return {
//                 ...state,
//                 user: {
//                     ...state.user,
//                     isLoggedIn: true,
//                     user: action.data,
//                 }
//             }
//         default:
//             return state;
//     }
// }

const rootReducer = combineReducers({
    // index: (state = {}, action) => { // HYDRATE를 위한 index
    //     switch (action.type) {
    //         case HYDRATE:
    //             console.log(HYDRATE);
    //             return {...state, ...action.payload}
    //         default:
    //             return state;
    //     }
    // },
    user,
});

export default rootReducer;