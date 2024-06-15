import React from 'react'

function Header() {
  return (
    <header>
        <nav className='flex justify-between py-10'>
          <div className='flex'>
            <h1 className='font-medium text-5xl text-black'>Mini Project</h1>
          </div>
          <div>
            <p className='font-medium text-3xl text-black'>About</p>
          </div>
        </nav>
          <div className='w-100 border bg-white opacity-15'></div>
    </header>
  )
}

export default Header