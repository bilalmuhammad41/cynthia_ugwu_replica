import React, { useState, useEffect } from 'react'
import './SplashScreen.css'

const SplashScreen = ({isLoading}) => {
  const [percentage, setPercentage] = useState('0')


  
  useEffect(()=>{
   
  },[])
  return (
    <div className={`${isLoading ? 'splash-visible': 'splash-not-visible' } flex h-[100vh] w-[100vw] items-center bg-gray-400`}>
      <div className={`m-auto flex w-[320px] items-center loader`}>
        <h2 className={`text-[1.125rem] font-semibold`}>Muhammad Bilal</h2>
        <span className='w-[80px] h-[2px] mx-5 bg-black rounded-full '></span>
        <h2 className=' text-[1.125rem] font-semibold'>{percentage}%</h2>
      </div>
    </div>
  )
}

export default SplashScreen