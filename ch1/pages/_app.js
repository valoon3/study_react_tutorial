import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from "prop-types";
import Head from 'next/head';
import HeaderMenu from "../components/HeaderMenu"; // next 에서는 head를 관리하기해 불러오기
import wrapper from '../redux/store/configureStore';

// next 가 자동으로 불러온다.
// 공통 메뉴 설정이라고 생각하자
// _app.js 는 pages 들의 공통이다.
const App = ({ Component }) => {
    console.log('/pages/App');

    return (
        <>
            <Head>
                <title>App main</title>
            </Head>
            <HeaderMenu />
            <Component />
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

module.exports = App;
// module.exports wrapper.withRedux(App); // 원래는 Provider 로 감싸서 store을 최상위에 깔아줬는데 6version 부터는 안해도된다.