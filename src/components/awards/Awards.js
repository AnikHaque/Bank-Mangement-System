import React from 'react'

export const Awards = () => {
  return (
    <div>
         <h2 className=' text-center mb-5 text-title text-2xl'>Awards & Major Achivements
 <i class="fa-solid fa-arrow-right"></i> </h2>
 <p className='text-center text-gray-500 mb-5'>Outstanding performance and achievements.

</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1'>
<div>
<div className='grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 text-center'>
<div className="stats shadow mt-16">
  
  <div className="stat">
    <div className=" text-title font-bold text-2xl">Bank Of The Year Europe</div>
    <div className="text-2xl"><b className='text-title'>Year: </b> 2020-2021</div>
    <div className=""><b className='text-title'>Award by: </b>Los Vegas Business Time</div>
  </div>
  
</div>
<div className="stats shadow mt-16">
  
  <div className="stat">
    <div className=" text-title font-bold text-2xl">Best Commercial
Bank Award</div>
    <div className="text-2xl"><b className='text-title'>Year: </b> 2017-2018</div>
    <div className=""><b className='text-title'>Award by: </b>Los Vegas Business Time</div>
  </div>
  
</div>

</div>
</div>
<div>
<img src='https://st.ourhtmldemo.com/new/finbank-demo/assets/images/resources/trophy.png' className='lg:max-w-lg mx-auto'></img>
</div>

<div>
<div className='grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 text-center'>

<div className="stats shadow mt-16">
  
  <div className="stat">
    <div className=" text-title font-bold text-2xl">Best Private Bank
Award</div>
    <div className="text-2xl"><b className='text-title'>Year: </b> 2018-2019</div>
    <div className=""><b className='text-title'>Award by: </b>Los Vegas Business Time</div>
  </div>
  
</div>
<div className="stats shadow mt-16">
  
  <div className="stat">
    <div className=" text-title font-bold text-2xl">Banker’s Bank of the
Year Awards</div>
    <div className="text-2xl"><b className='text-title'>Year: </b> 2014-2015</div>
    <div className=""><b className='text-title'>Award by: </b>Los Vegas Business Time</div>
  </div>
  
</div>
</div>
</div>
        </div>
    </div>
  )
}
