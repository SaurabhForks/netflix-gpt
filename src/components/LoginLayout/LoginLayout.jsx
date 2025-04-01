import React from 'react'
import { Outlet } from "react-router";
import "./loginLayout.scss"
import { login_bg } from '../../assets/images/images';
const LoginLayout = () => {
    return (
        <div className="loginLayout">
            <img src={login_bg} alt="login-background" />
            <Outlet />
        </div>
    )
}

export default LoginLayout