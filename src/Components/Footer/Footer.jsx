import React from 'react'

function Footer() {
  return (
    
    <>
    
    <div className='bg-zinc-900 text-white'>
        <div className='w-4/5 mx-auto justify-between flex flex-wrap py-28'>

            <div className='w-full md:w-96 mt-10'>
                <h1 className='footer-title text-2xl font-bold mb-12 uppercase'>Food Suggestion
                <br></br>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
                </h1>
                
                <p className='footer-para font-Roboto text-sm px-2'>A food suggestion website helps users discover meal ideas based on their preferences, dietary restrictions, and available ingredients. It offers personalized recommendations, recipes, and nutritional information. </p>
                <h1 className="mt-12 font-Roboto"><p className="footer-para px-2 hover:text-blue-500">Email: supportfood@gmail.com</p></h1>
            </div>

            <div className='w-32 md:w-44 lg:w-32 mt-10'>
                <h1 className='footer-title text-xl font-bold font-Poppins mb-12'>Quick Links</h1>
                <div className='font-Roboto text-sm'>
                <div className='font-Roboto text-sm flex flex-col'>
                <p className="text-white hover:text-blue-500 pb-1">Home</p> 
                <p className="text-white hover:text-blue-500 pb-1">About</p>
                <p className="text-white hover:text-blue-500 pb-1">Events</p>
                <p className="text-white hover:text-blue-500 pb-1">Teams</p>
                <p className="text-white hover:text-blue-500 pb-1">Success Page</p>
                </div>
                </div>
            </div>

            <div className='w-38 md:w-44 lg:w-42 mt-10'>
                <h1 className='footer-title text-xl font-bold font-Poppins mb-12'>Consumer Policy</h1>
                <div className='font-Roboto text-sm flex flex-col'>
                    <p className="text-white hover:text-blue-500 pb-1">Canncellation & Returns</p>
                    <p className="text-white hover:text-blue-500 pb-1">Terms of use</p>
                    <p className="text-white hover:text-blue-500 pb-1">Advertise</p>
                    <p className="text-white hover:text-blue-500 pb-1">Privacy</p>
                    <p className="text-white hover:text-blue-500 pb-1">Gift cards</p>
                    <p className="text-white hover:text-blue-500 pb-1">Become a Seller</p>
                </div>
            </div>

            <div className='w-32 md:w-44 lg:w-32 mt-10'>
                <h1 className='footer-title text-xl font-bold font-Poppins mb-12'>Help</h1>
                <div className='font-Roboto text-sm flex flex-col'>
                    <p className="text-white hover:text-blue-500 pb-1">Help Center</p>
                    <p className="text-white hover:text-blue-500 pb-1">How it works</p>
                    <p className="text-white hover:text-blue-500 pb-1">FAQ's</p>
                    <p className="text-white hover:text-blue-500 pb-1">Video Tutorials</p>
                    <p className="text-white hover:text-blue-500 pb-1">Security Check</p>
                    <p className="text-white hover:text-blue-500 pb-1">Partner Program</p>
                </div>
            </div>

        </div>
    </div>


    <div className="w-full bg-white py-4 mx-auto text-center">
        <h2 className="text-black-600 font-Poppins font-semibold ">Copyright ©2024 MiniProject Ltd. All rights reserved</h2>
    </div>
    </>


  )
}

export default Footer