import React, { useEffect, useState } from 'react'
import useGetData from '../../utils/hooks/useGetData'
import { API_OPTIONS, getMovieVideoUrl } from '../../utils/constants'
import "./VideoPlayer.scss"


const VideoPlayer = ({ video_id }) => {
    const [trailer, setTrailer] = useState(null)
    const url = getMovieVideoUrl(video_id)
    const { apiData } = useGetData(video_id ? url : null, API_OPTIONS)
    useEffect(() => {
        if (apiData?.results?.length > 0) {
            const fiterData = apiData?.results?.filter((video) => video.type === "Trailer")
            setTrailer(fiterData?.length > 0 ? fiterData[0] : apiData?.results[0])
        }
    }, [apiData])

    return (
        <div className='video-player'>
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${trailer?.key}?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailer?.key}`}
                title={""}
                allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share;"
                referrerpolicy="strict-origin-when-cross-origin"
                className='aspect-video'
                id='youTubeVideo'
            >
            </iframe>
        </div>
    )
}

export default VideoPlayer