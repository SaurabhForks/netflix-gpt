import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import "./loader.scss"
const withLoader = (WrappedComponent) => {
    const Loader = (props) => {
        const { loading } = useSelector((state) => state.loader)
        return loading ? <div className='loader-wrap'><CircularProgress color="success" /> </div> : <WrappedComponent {...props} />
    }
    // Memoize to prevent unnecessary re-renders
    const MemoizedComponent = memo(Loader);
    return MemoizedComponent
}

export default withLoader