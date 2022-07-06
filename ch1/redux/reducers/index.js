import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux"; // 함수를 합쳐야 하기때문에 도움을 받는다.
import user from './user';
import boardState from './boardState';

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

const rootReducer = combineReducers({
    index: (state = {}, action) => { // HYDRATE를 위한 index
        switch (action.type) {
            case HYDRATE:
                console.log(HYDRATE);
                return {...state, ...action.payload}
            default:
                return state;
        }
    },
    user,
    boardState,
});

export default rootReducer;