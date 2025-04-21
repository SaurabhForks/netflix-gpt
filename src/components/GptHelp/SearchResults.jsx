import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { API_OPTIONS, getBaseSearchUrl } from "../../utils/constants"
import MovieCard from '../Slider/MovieCard'
const SearchResults = () => {
    const [searchResult, setSearchResult] = useState([])
    const data = useSelector((state) => state.geminiRespose)
    useEffect(() => {
        (async () => {
            if (moviesPromices) {
                const result = await Promise.all(moviesPromices)
                setSearchResult(result)
            }

        })()
    }, [data, moviesPromices])

    const searchMovies = async (movie) => {
        const URL = getBaseSearchUrl(movie)
        try {
            const res = await fetch(URL, API_OPTIONS)
            const movieData = await res.json()
            return movieData
        } catch (error) {
            console.log(error);
        }
    }

    var moviesPromices = data?.geminiRespose?.map((movie) => searchMovies(movie))


    return (
        <div className='flex bg-white p-5 gap-3 flex-wrap mt-6'>
            {searchResult?.map((movie, index) => {
                return <div className='w-[15%]'><MovieCard key={index} movie={movie?.results?.[0]} /></div>
            })}
        </div>
    )
}

export default SearchResults