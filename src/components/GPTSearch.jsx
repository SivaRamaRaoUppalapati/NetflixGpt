import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE_LOGIN } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BACKGROUND_IMAGE_LOGIN}
        alt='backgroundimage'  /> 
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch