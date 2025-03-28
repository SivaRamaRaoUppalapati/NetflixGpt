import { options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import React, { useEffect } from 'react'


const useNowPlaying =()=>{

    const dispatch = useDispatch();
    const getNowPlayingMovies =async()=>{
  
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      const jsondata = await data.json();
      //console.log(jsondata);
      dispatch(addNowPlayingMovies(jsondata.results));
      //console.log(jsondata.results)
    }
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}

export default useNowPlaying;