import React from 'react'
import MovieCard from './MovieCard'
import "./MovieSlider.scss"
const MovieSlider = ({ title, movieList }) => {

    return (
        <div className='movie-slider-row'>
            <h4 className='font-bold py-4 text-xl '>{title}</h4>
            <div className='slider-container '>
                <div className='slider'>
                    {movieList?.length > 0 && movieList?.map((movie) => { return <MovieCard movie={movie} key={movie?.id} /> })}
                </div>
            </div>
        </div>
    )
}

export default MovieSlider