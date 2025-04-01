import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
//import client from '../utils/openAI'
import { options } from '../utils/constant'
import {addGptMovie} from '../utils/gptSlice'

const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang)
  const searchText = useRef(null);
  const dispatch =useDispatch();

  const searchMOvieTmdb = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie+'&include_adult=false&language=en-US&page=1&region=india', options)
    const json = await data.json();
    console.log(json.results);
    dispatch(addGptMovie(json.results))
    return json.results;
  }

  //const result=searchMOvieTmdb(searchText);
  
  //console.log(searchMOvieTmdb(searchText))
  // const handleGptSearchClick=async ()=>{
  //   console.log(searchText.current.value)

  //   const gptQuery ="Act as Movie recommendation System and suggest some movies for the query : "+ searchText.current.value +" only give me names of 5 Movies , comma seperated like the example result given ahead. Example Result: Salaar , Puspha 2 , Golmaal, Don , Aarya "
  //   const completion = await client.chat.completions.create({
  //     model: 'gpt-4o',
  //     messages: [
  //       { role: 'user', content:gptQuery  },
  //     ],
  //   });

  //   console.log(completion.choices[0].message.content);
  // }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form 
        className='w-1/2 ' onSubmit={e=>e.preventDefault()}>
            <input 
            ref ={searchText}
            type="text" 
            className='p-4 m-4 w-[75%] bg-white  rounded-lg' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button 
            className='p-4 px-4 w-[20%] bg-red-500 text-white rounded-lg'
            onClick={searchMOvieTmdb}
            >{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar