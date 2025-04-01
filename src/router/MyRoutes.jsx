import React from 'react'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import AppLayout from '../components/AppLayout/AppLayout'
import Home from '../components/Home/Home'
import { Routes, Route } from "react-router"
import Login from '../components/Login/Login';
import LoginLayout from '../components/LoginLayout/LoginLayout'
import SignUp from '../components/SignUp/SignUp'
const MyRoutes = () => {
    return (
        <Routes>
            <Route element={<AppLayout />} >
                <Route index element={<Home />} />
                <Route element={<LoginLayout />} >
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default MyRoutes