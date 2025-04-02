import { options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice'
import React, { useEffect } from 'react'


const useTopRated =()=>{

    const dispatch = useDispatch();
    const getTopRatedMovies =async()=>{
  
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
      const jsondata = await data.json();
      //console.log(jsondata);
      dispatch(addTopRatedMovies(jsondata.results));
     // console.log(jsondata.results)
    }
  
    useEffect(()=>{
      getTopRatedMovies();
    },[])
}

export default useTopRated;