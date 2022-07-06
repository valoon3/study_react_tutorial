import PropTypes from 'prop-types';
import Link from 'next/link'
import {Row, Col} from 'antd';
import HeaderMenu from './HeaderMenu';
import {useSelector} from 'react-redux';
import LoginedForm from "./LoginedForm";
import LogoutedForm from "./LogoutedForm"

const AppLayout = ({children}) => {
    console.log('/components/AppLayout');
    const {isLoggedIn} = useSelector(state => state.user);

    return (<>
            <div>
                <Row gutter={8}>
                    <Col xs={24} md={4}>
                        {isLoggedIn.toString()}
                    </Col>
                    <Col xs={24} md={14}>
                        {children}
                    </Col>
                    <Col xs={24} md={6}>
                        {isLoggedIn ? <LoginedForm/> : <LogoutedForm/>}
                    </Col>
                </Row>
            </div>
        </>);
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;