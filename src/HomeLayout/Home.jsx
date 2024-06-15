import React, { useState } from 'react'
import Homelayout from './Homelayout'

function Home() {

    const [Age, setAge] = useState();
    const [Veg, setVeg] = useState();
    const [Blood, setBlood] = useState();
    const [Systolic, setSystolic] = useState();
    const [Diastolic, setDiastolic] = useState();


console.log(Age);
console.log(Veg);
console.log(Blood);
console.log(Systolic);
console.log(Diastolic);


  return (
    <Homelayout>
        <div className='my-32 text-[#878787] '>
              <h1 className='font-medium text-3xl leading-10 lg:leading-[70px] lg:text-6xl lg:w-2/4 '><span className='text-white'>Take Control of Your Health </span>With Our Tailored Diet Plans</h1>
              <p className='text-lg lg:text-xl my-16'>Empower Your Health with Custom Diet Plans</p>
              <button className='px-8 py-3 bg-white font-medium text-black'>Create Now</button>
        </div>

        <div className=''>
            <h1 className='text-white font-medium text-5xl mx-auto'>Calculator</h1>
            <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>

            <div className='flex-wrap flex'>
                <div className='flex flex-col mx-6 my-6'>
                    <label className='text-white font-medium text-3xl my-4'>Age</label>
                    <input type='number' onChange={(e)=>setAge(e.target.value)} placeholder='Enter your age' className='text-black px-6 py-3 text-xl font-medium w-96 mx-3' />
                </div>
                <div className='flex flex-col mx-6 my-6'>
                    <label className='text-white font-medium text-3xl my-4'>Veg/Non-Veg (1/0)</label>
                    <input type='number' onChange={(e)=>setVeg(e.target.value)} placeholder='Enter your Veg/Non-veg' className='text-black px-6 py-3 text-xl font-medium w-96 mx-3' />
                </div>
                <div className='flex flex-col mx-6 my-6'>
                    <label className='text-white font-medium text-3xl my-4'>Blood glucose(in mmol/L)</label>
                    <input type='number' onChange={(e)=>setBlood(e.target.value)} placeholder='Enter your mmol/L' className='text-black px-6 py-3 text-xl font-medium w-96 mx-3' />
                </div>
                <div className='flex flex-col mx-6 my-6'>
                    <label className='text-white font-medium text-3xl my-4'>Systolic(in mmHg)</label>
                    <input type='number' onChange={(e)=>setSystolic(e.target.value)} placeholder='Enter your mmHg' className='text-black px-6 py-3 text-xl font-medium w-96 mx-3' />
                </div>
                <div className='flex flex-col mx-6 my-6'>
                    <label className='text-white font-medium text-3xl my-4'>Diastolic (in mmHg)</label>
                    <input type='number' onChange={(e)=>setDiastolic(e.target.value)} placeholder='Enter your mmHg' className='text-black px-6 py-3 text-xl font-medium w-96 mx-3' />
                </div>
            </div>

            <button className='px-8 py-3 my-20 ml-6 bg-white font-medium text-black'>Create Now</button>

        </div>
    </Homelayout>
  )
}

export default Home