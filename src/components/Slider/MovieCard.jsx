import React from 'react'
import { getMoviePostarUrl } from '../../utils/constants'

const MovieCard = ({ movie }) => {
    const imageUrl = getMoviePostarUrl(movie?.poster_path)

    return (
        <div className='movie-card'>
            <img src={imageUrl} alt={movie?.title} />
        </div>
    )
}

export default MovieCard