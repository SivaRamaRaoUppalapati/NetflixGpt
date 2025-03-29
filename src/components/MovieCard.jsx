import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48  pr-4'>
        <img className='w-50 h-47' alt="Movie card"
        src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard