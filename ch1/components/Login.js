import {useCallback, useState} from "react";
import {Avatar, Button, Card, Checkbox, Form, Input} from "antd";
import Link from "next/link";
import styled from 'styled-components';

const Login = (isLoggedIn) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    let [loggedIn, setLoggedIn] = useState(false);

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onLoginFinish = useCallback((userInfo) => {
        console.log('onLoginFinish success', userInfo);
        if (userInfo.userName === 'asdf' && userInfo.password === 'asdf') {
            setLoggedIn(true);
            setId(userInfo.userName);
        }
        else {
            alert('비밀번호가 틀렸습니다.');
        }
    }, []);

    const onLoginFinishFail = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const loggedOut = () => {
        setLoggedIn(false);
    }

    if (!loggedIn) {
        // 로그인 화면
        return (
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
    // 로그인 성공 유저 정보 화면
    else{
        return (
            <Card
                actions={[
                    <div key="">짹쨱</div>,
                    <div key="follwings">짹쨱</div>,
                    <div key="followers">짹쨱</div>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>V</Avatar>}
                    title={id + " 님 환영합니다."}
                />
                <Button onClick={loggedOut}>로그아웃</Button>
            </Card>
        )
    }
}

export default Login;