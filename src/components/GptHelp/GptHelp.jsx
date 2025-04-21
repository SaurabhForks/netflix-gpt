import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import "./GptHelp.scss"
const GptHelp = () => {
    return (
        <div className='gpt-help '>
            <SearchBar />
            <SearchResults />
        </div>
    )
}

export default GptHelp