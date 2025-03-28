import { options } from '../utils/constant';
import { useDispatch} from 'react-redux';
import {addTrailerVedio} from '../utils/movieSlice'
import React, { useEffect } from 'react'


const useMovieTrailer =({movieId})=>{
    const dispatch = useDispatch();
    //console.log(movieId);
    const getMovieVideos = async()=>{
    const data =await fetch("https://api.themoviedb.org/3/movie/"+ movieId+"/videos?language=en-US", options)
    const json =await data.json();
    //console.log(json);

    const filterData = json.results.filter(videos=>videos.type==="Trailer");
    const trailer =filterData.length? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVedio(trailer.key));
  }

  useEffect(()=>{
    getMovieVideos()
  },[])
}

export default useMovieTrailer;