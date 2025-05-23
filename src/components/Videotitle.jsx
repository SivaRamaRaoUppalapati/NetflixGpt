import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 px-16 text-xl rounded-lg  hover:opacity-50'>▶️ Play</button>
        <button className='mx-2 bg-gray-500 p-4 px-16 text-xl opacity-50 rounded-lg cursor-pointer'>ℹ️More Info</button>
      </div>
    </div>
  )
}

export default Videotitle