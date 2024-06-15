import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function Homelayout({children}) {
  return (
    <div className='w-100 flex flex-col justify-between bg-zinc-900 text-black font-Roboto'>
        <div className='w-10/12 mx-auto'>
            <Header />
            {children}
            <Footer />
        </div>
    </div>
  )
}

export default Homelayout