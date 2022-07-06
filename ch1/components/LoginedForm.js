import {useCallback, useState} from "react";
import {Avatar, Button, Card, Checkbox, Form, Input} from "antd";
import Link from "next/link";
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../redux/reducers/user";

const LoginedForm = () => {
    const dispatch = useDispatch();
    const {isLoggedIn, userInfo} = useSelector((state) => state.user);

    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);
    //
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);

    const onLoginFinishFail = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const loggedOut = () => {
        dispatch(logoutAction());
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
                    title={userInfo.userId + " 님 환영합니다."}
                />
                <Button onClick={loggedOut}>로그아웃</Button>
            </Card>
        )
}

export default LoginedForm;