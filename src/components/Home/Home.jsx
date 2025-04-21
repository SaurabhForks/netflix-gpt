import React, { useEffect } from 'react'
import withLoader from '../../utils/hocs/Loader/Loader'
import { BASE_TMDB_URL, API_OPTIONS } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../../redux/slices/movieSlice'
import useGetData from '../../utils/hooks/useGetData'
import { setLoading } from '../../redux/slices/loaderSlice'
import MainContainer from './MainContainer'
import "./Home.scss"
import MovieSlider from '../Slider/MovieSlider'
const Home = () => {
    const dispatch = useDispatch()
    const { apiData } = useGetData(BASE_TMDB_URL, API_OPTIONS)
    const data = useSelector((state) => state.nowPlayingMovies?.movies)
    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(addNowPlayingMovies(apiData?.results))
        dispatch(setLoading(false));
    }, [apiData])

    if (!data) return
    return (
        <div className='container'>
            <MainContainer movie={data?.[0] || []} />
            <MovieSlider title="Now Playing" movieList={data} />
        </div>
    )
}

export default withLoader(Home)