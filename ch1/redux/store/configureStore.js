import {createWrapper} from "next-redux-wrapper";
import {createStore} from "redux";
import reducer from '../reducers'

// _app.js 에 사용한다.
// export defualt wrapper.withRedux(NodeBird); <- 이런식으로 감싸준다.
const configureStore = () => {
    const store = createStore(reducer);
    return store;
}

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;