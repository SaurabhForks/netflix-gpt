import React, { useRef } from 'react'

const SearchBar = () => {
    const inputRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputRef.current.value);
    }
    return (
        <div className='search-bar-wrap pt-[100px] '>
            <form className='flex' onSubmit={(e) => handleSubmit(e)}>
                <input
                    id="outlined-basic"
                    ref={inputRef}
                    placeholder="What's your intrest?"
                    className='text-input'
                />
                <button className='button' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar