import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox, Form, Input} from "antd";
import Link from "next/link";
import {useCallback, useState} from "react";
// import {loginAction} from "../redux/reducers";
import {loginAction} from "../redux/reducers/user";


const LogoutForm  = () => {
    const dispatch = useDispatch();

    const onLoginFinish = useCallback((userInfo) => {
        console.log('로그인 유저 정보', userInfo);
        // 로그인 성공
        if (userInfo.userName === 'asdf' && userInfo.password === 'asdf') {
            dispatch(loginAction());
        }
        // 로그인 실패
        else {
            alert('로그인 정보가 틀렸습니다.');
        }
    }, []);

    const onLoginFinishFail = () => {
        console.log('login fail');
    }



    return ( // 로그인 안된 화면
        <div>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onLoginFinish}
                onFinishFailed={onLoginFinishFail}
                autoComplete="off"
                style={{marginRight: 10, marginTop: 10, border: "solid 1px black"}}
            >
                <label><b>== Login ==</b></label>
                <Form.Item
                    label="Username"
                    name="userName"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <div style={{float: "right", marginRight: 10}}>
                        <Link href="/"><a>회원가입</a></Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )

}

export default LogoutForm;