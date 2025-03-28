import React from 'react'
import {  useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies =useSelector((store)=>store.movies?.nowPlayingMovies)
    if(!movies || movies.length===0) return null;
    const mainMovie = movies[0];
   //console.log(mainMovie);
    //const {original_title,overview,id}=mainMovie
  return (
    <div>
      <Videotitle title={mainMovie?.original_title} overview={mainMovie?.overview}/>
      <VideoBackground movieId={mainMovie?.id}/>
    </div>
  )
}

export default MainContainer