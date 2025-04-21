import React, { useRef } from 'react'
import gemini from "../../utils/gemini"
import { Type } from '@google/genai'
import { useDispatch } from 'react-redux'
import { setGeminiResponse } from '../../redux/slices/geminiResSlice'
const SearchBar = () => {
    const inputRef = useRef()
    const dispatch = useDispatch()
    const handleGptSearch = async (value) => {
        const response = await gemini.models.generateContent({
            model: "gemini-2.0-flash",
            contents: value,
            config: {
                systemInstruction: `You are a movie guide. 
                Suggest 5 movies that match provided description ${value}. Prioritize films that closely align with the tone and content described. 
               `,
                responseMimeType: 'application/json',
                responseSchema: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
        });
        dispatch(setGeminiResponse(JSON.parse(response.text)))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        handleGptSearch(inputRef.current.value)
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