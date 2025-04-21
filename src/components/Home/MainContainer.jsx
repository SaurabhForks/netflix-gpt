import { Button } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Info from '@mui/icons-material/Info';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const MainContainer = ({ movie }) => {
    const { title, overview, id } = movie
    return (
        <div className='main-container relative'>
            <div className='video-container '>
                <VideoPlayer video_id={id} />
            </div>
            <div className="over-text absolute left-0 text-white bg-gradient-to-r from-black ">
                <h1 className='title'>{title}</h1>
                <p className='desc'>
                    {overview}
                </p>
                <p className='rating'></p>
                <div className="buttons flex justify-between">
                    <Button variant="contained" startIcon={<PlayArrowIcon />} className='mr-2'> Play</Button>
                    <Button variant="outlined" startIcon={<Info />}> More Info</Button>
                </div>
            </div>

        </div>
    )
}

export default MainContainer