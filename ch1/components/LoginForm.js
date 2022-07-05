import {useCallback, useState} from "react";
import {Avatar, Button, Card, Checkbox, Form, Input} from "antd";
import Link from "next/link";
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onLoginFinishFail = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const loggedOut = () => {

    }

    // 로그인 성공 유저 정보 화면
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

export default LoginForm;