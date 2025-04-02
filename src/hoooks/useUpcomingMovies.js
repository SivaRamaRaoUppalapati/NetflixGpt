import { options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice'
import React, { useEffect } from 'react'


const useUpcomingMovies =()=>{

    const dispatch = useDispatch();
    const getUpcomingMovies =async()=>{
  
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
      const jsondata = await data.json();
      //console.log(jsondata);
      dispatch(addUpcomingMovies(jsondata.results));
      //console.log(jsondata.results)
    }
  
    useEffect(()=>{
      getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;