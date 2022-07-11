import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox, Form, Input} from "antd";
import Link from "next/link";
import {useCallback, useEffect, useState} from "react";
import {loginAction} from "../redux/reducers/user";
import axios from "axios";


const LogoutedForm  = () => {
    const dispatch = useDispatch();

    const onLoginFinish = useCallback((userInfo) => {
        console.log('로그인 유저 정보', userInfo);

        axios.get('http://localhost:8080/login/test')
            .then((value => console.log(value)))
            .catch(err => console.error(err));

        // 로그인 성공
        if (userInfo.userId === 'asdf' && userInfo.userPassword === 'asdf') {
            dispatch(loginAction(userInfo));
        }
        // 로그인 실패
        else {
            alert('로그인 정보가 틀렸습니다.');
        }
    }, []);

    const onLoginFinishFail = () => {
        console.log('login fail');
    }

    // useEffect(() =>{
    //     axios.get('/login/test')
    //         .then(res => console.log(res))
    //         .catch(err => console.error(err))
    //
    // })

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
                    label="UserId"
                    name="userId"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="userPassword"
                    name="userPassword"
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

export default LogoutedForm;