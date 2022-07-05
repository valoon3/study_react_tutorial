import PropTypes from 'prop-types';
import Link from 'next/link'
import {Row, Col} from 'antd';
import HeaderMenu from './HeaderMenu';
import {useSelector} from 'react-redux';
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm"

const AppLayout = ({children}) => {
    console.log('/components/AppLayout');

    const {isLoggedIn} = useSelector(state => state.user);
    // loginForm.js 에서
    // const onSubmitForm useCallback(() => {
    //     dispatch(loginAction({ id, password});
    // }, [id, password]);
    // 사용은 <FormWrapper onFinish={onSubmitForm}>    이런 식으로 사용한다.


    return (<>
            <div>
                <Row gutter={8}>
                    <Col xs={24} md={6}>
                        {isLoggedIn.toString()}
                    </Col>
                    <Col xs={24} md={12}>
                        {children}
                    </Col>
                    <Col xs={24} md={6}>
                        {isLoggedIn ? <LoginForm/> : <LogoutForm/>}
                        {/*<LoginForm />*/}
                    </Col>
                </Row>
            </div>
        </>);
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;