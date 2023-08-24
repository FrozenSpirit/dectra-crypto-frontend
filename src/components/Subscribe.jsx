import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full mx-auto py-16 bg-black text-white text-center'>
        <h1>Join Our DecTra Community</h1>
        <div className='py-4'>
            <input type="email" className="p-3 rounded-3xl mr-4" placeholder='Enter your email' />
            <button>Sign Up</button>
        </div>

        <div className="flex items-center justify-center py-2">
            <input type="checkbox" className=''/>
            <p className=' w-[70%] md:w-auto md:mx-2'>Yes, I agree to receive email communication from DecTra.</p>
        </div>
    </div>
  )
}

export default Subscribe

/*  <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1>Join Our DeFi Community</h1>
        <div className='py-4'>
            <input className='p-3 rounded-3xl mr-4' type="email" placeholder='Enter your email' />
            <button>Sign Up</button>
        </div>
        <div className='flex items-center justify-center py-2 '>
            <input className='mr-2 ' type="checkbox"/>
            <p>Yes, I agree to receive email communications from DeFi.</p>
        </div>
    </div>
*/