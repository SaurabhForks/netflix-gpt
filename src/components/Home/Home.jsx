import React from 'react'
// import useGetData from '../../utils/hooks/useGetData'.
import withLoader from '../../utils/hocs/Loader/Loader'

const Home = () => {
    // const { apiData, isLoading, error } = useGetData("https://dummyjson.com/todos")
    // console.log(apiData, isLoading, error);
    return (
        <div>Home</div>
    )
}

export default withLoader(Home)