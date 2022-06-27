import PropTypes from 'prop-types';
import Link from 'next/link'
import { Row, Col } from 'antd';
import HeaderMenu from './HeaderMenu';
import Login from "./Login";

const AppLayout = ({ children }) => {
    console.log('/components/AppLayout');

    return (
        <>
            <div>
                <Row gutter={8}>
                    <Col xs={24} md={6}>

                    </Col>
                    <Col xs={24} md={12}>
                        {children}
                    </Col>
                    <Col xs={24} md={6}>
                        <Login />
                    </Col>
                </Row>
            </div>
        </>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;