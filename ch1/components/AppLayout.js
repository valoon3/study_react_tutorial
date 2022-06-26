import PropTypes from 'prop-types';
import Link from 'next/link'
import { Row, Col } from 'antd';
import HeaderMenu from './HeaderMenu';
import Login from "./Login";

const AppLayout = ({ children }) => {
    console.log('/components/AppLayout');

    return (
        <>
            <HeaderMenu />
            { children }
        </>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;