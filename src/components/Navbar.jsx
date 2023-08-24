import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [navbar, setNav] = useState(false);
    const clickHandler = () => {
        setNav(!navbar);
    }

  return (
    <div className='w-full h-[70px] bg-transparent absolute top-3 left-3'>

        <div className='max-w-[1300px] mx-auto px-4 flex justify-between items-center h-full '>
            <div>
                <h1 className='text-xl  md:text-3xl font-bold bg-gradient-to-r from-blue-200 to-red-400 text-gray-700 rounded-xl p-2 hover:scale-105 duration-300'> DECTRA</h1>
            </div>
        

            <div className='hidden md:flex rounded-lg '>
                <ul className='flex text-white items-center'>
                    <li className=' duration-200 px-2  py-3 rounded-lg mx-2 hover:border-2 hover:border-white'>Docs</li>
                    <li className=' duration-200 px-2  py-3 rounded-lg mx-2 hover:border-2 hover:border-white'>Community</li>
                    <li className=' duration-200 px-2  py-3 rounded-lg mx-2 hover:border-2 hover:border-white'>DevOps</li>
                    <li className=' duration-200 px-2  py-3 rounded-lg mx-2 hover:border-2 hover:border-white'>About</li>
                    <button className='ml-4 e p-3 rounded-4xl duration-200'>Use Dectra</button>
                </ul>
            </div>


        <div onClick={clickHandler} className='block md:hidden text-l text-white p-1 mx-2 bg-blue-400 rounded-lg '>
            {!navbar ? <i className='p-2'>///</i> : <i className='p-3'>X</i>}
        </div>
            <div className={navbar ? ' rounded-xl w-full bg-black text-white absolute top-[69px] -left-3 flex justify-center text-center duration-300 transition-all ease-in-out' : 'absolute left-[-100%]'}>
                <ul>
                    <li className='text-xl '>Docs</li>
                    <li className='text-xl '>Community</li>
                    <li className='text-xl '>DevOps</li>
                    <li className='text-xl '>About</li>
                    <button className='m-8'>Use Dectra</button>
                </ul>
            </div>
         </div>

        

    </div>
  )
}

export default Navbar
