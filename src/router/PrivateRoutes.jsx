import React from 'react'
import AppLayout from '../components/AppLayout/AppLayout';
import Home from '../components/Home/Home'

const PrivateRoutes = () => {
    return (
        <Route index element={<Home />} />
    )
}

export default PrivateRoutes