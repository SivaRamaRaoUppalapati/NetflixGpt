import { options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
import React, { useEffect } from 'react'


const usePopularMovies =()=>{

    const dispatch = useDispatch();
    const getPopularMovies =async()=>{
  
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
      const jsondata = await data.json();
      //console.log(jsondata);
      dispatch(addPopularMovies(jsondata.results));
      console.log(jsondata.results)
    }
  
    useEffect(()=>{
      getPopularMovies();
    },[])
}

export default usePopularMovies;