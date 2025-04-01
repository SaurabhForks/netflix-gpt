import React from 'react'
import Login from '../components/Login/Login'
import AppLayout from '../components/AppLayout/AppLayout';

const PublicRoutes = () => {
    return (

        <Route element={<AppLayout />} >
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Route>

    )
}

export default PublicRoutes