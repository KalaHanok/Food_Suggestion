import React from 'react'

function Header() {
  return (
    <header className='text-white'>
        <nav className='flex justify-between py-10'>
          <div className='flex'>
            <h1 className='font-bold uppercase font-Roboto text-5xl '>Food Suggestion</h1>
          </div>
          <div>
            <p className='font-medium text-3xl '>About</p>
          </div>
        </nav>
        <div className='w-full h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
    </header>
  )
}

export default Header