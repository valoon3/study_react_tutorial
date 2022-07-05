import {createWrapper} from "next-redux-wrapper";
import {createStore, applyMiddleware, compose} from "redux";
import reducer from '../reducers/';
import {composeWithDevTools} from "redux-devtools-extension";

// _app.js 에 사용한다.
// export defualt wrapper.withRedux(NodeBird); <- 이런식으로 감싸준다.
const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)) : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(reducer, enhancer);

    // console.log('store : ', store);
    console.log('store.getState() : ', store.getState());

    return store;
}

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;