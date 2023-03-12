import React, { Component } from "react";
import Login from "./components/Login";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>휴대폰 번호로 로그인합니다.</h3>
                <Login />
            </div>
        );
    }
}
