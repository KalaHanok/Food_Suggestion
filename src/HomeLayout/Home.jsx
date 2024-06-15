import React from 'react'
import Homelayout from './Homelayout'

function Home() {
  return (
    <Homelayout>
        <div className='my-32 text-[#878787] '>
              <h1 className='font-medium text-3xl leading-10 lg:leading-[70px] lg:text-6xl lg:w-2/4 '><span className='text-white'>Take Control of Your Health </span>With Our Tailored Diet Plans</h1>
              <p className='text-lg lg:text-xl my-16'>Empower Your Health with Custom Diet Plans</p>
        </div>
    </Homelayout>
  )
}

export default Home