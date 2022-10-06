import React from 'react'
import Typewriter from 'typewriter-effect';
import './Banner.css';
export const Banner = () => {
  return (
    <div className='bg-banner pt-20 pb-30'>
        <div className='grid lg:grid-cols-1 sm:grid-cols-1 gap-3'>
<div className='mt-16 px-16'>
  <p className='text-3xl text-white pb-2 pt-14 banner-tag'>Connecting all your Banking Needs</p>

  <h1 className='font-bold text-6xl text-white pb-2'>
 
  <Typewriter 
  options={{
    strings: [' Make It Easy '],
    autoStart: true,
    loop: true,
    
  }}
/>

  </h1>
 
  
  <p className='text-3xl  text-white pb-4'>More Secure & More Personal</p>
  <button class="btn btn-banner pl-10 pr-10">Find Out More</button>
  
  

</div>


        </div>
    </div>
  )
}
