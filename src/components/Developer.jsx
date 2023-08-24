import React from 'react'
import img1 from '../assets/pic2.jpeg'

const Developer = () => {
  return (
    <div className='relative h-[450px] lg:h-[500px] w-full'>
        <img className='absolute top-0 left-0 object-cover w-full h-full ' src={img1} alt='*'></img>
        <div className='absolute lg:top-[35%] left-0 flex flex-col justify-center  py-5'> 
            <h1 className='text-left px-10 text-white text-2xl lg:text-4xl'>Superpowers for DECTRA developers.</h1>
            <p className='p-10 text-white'>Checkout the <span className="blue">documentation</span>, the <span className="blue">quick starter</span> or a guide bwlow to
            integrate your project with thousands of tokens and billions of liquidity.</p>
        </div>

    </div>
  )
}

export default Developer

/* 
    <div className='w-full text-white bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>Superpowers for DEFI developers.</h1>
          <p>
            Checkout the <span className="blue">documentation</span>, the <span className="blue">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className='flex justify-center w-full py-16'>
            <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={terminal} alt="/" />
        </div>
      </div>
    </div>
 */