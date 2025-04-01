import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
 // console.log("render")
  const gpt = useSelector(store=> store.gpt.gptMovie)
  console.log(gpt)
  
  return (
    <div className='w-screen p-4  bg-black text-white'>
       <MovieList title={"Results"} movies={gpt}/> 
      
    </div>
  )
}

export default GptMovieSuggestions