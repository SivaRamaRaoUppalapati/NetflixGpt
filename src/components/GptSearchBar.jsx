import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang)

  return (
    <div className='pt-[10%] flex justify-center'>
        <form 
        className='w-1/2 '>
            <input 
            type="text" 
            className='p-4 m-4 w-[75%] bg-white  rounded-lg' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button 
            className='p-4 px-4 w-[20%] bg-red-500 text-white rounded-lg '>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar