import React from 'react'
import bgVid from '../assets/1.mp4'

const Hero = () => {
  return (
    <div className='w-full h-[100vh] top-0'>
        <video className='object-cover h-full w-full absolute -z-10' src={bgVid} autoPlay muted loop/>

        <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
          <h1>Decentralised</h1>
          <h1 className='py-2'>
            <span className='blue'>Trading</span> Protocol
          </h1>
          <p className='text-xl py-3'>
            Guaranteed liquidity trading for millions of users and top Etherem applications.
          </p>

          <div>
            <button className='m-2'>Use Dectra</button>
            <button className='m-2'>FAQ</button>
          </div>

        </div>

    </div>
  )
}

export default Hero

