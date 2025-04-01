import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
    if (!movies || !Array.isArray(movies) || movies.length === 0) {
       // console.log("Movies not yet available:", movies);
        return <p>Loading movies...</p>; // Show a loading message
    }
    //console.log(movies);
    //console.log(movies[0]?.backdrop_path)
    return (
    <div className='px-6 text-white'>
        <h1 className='text-3xl py-4'>{title}</h1>
        <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap'> 
            
            <div className='flex'>
                {movies
                .filter(movie => movie.backdrop_path)
                .map(movie=>
                    <MovieCard key={movie.id}
                    posterPath={movie?.backdrop_path}/>
                 )}
                
            </div>
        </div>      
    </div>
  )
}

export default MovieList