import React, { useEffect } from 'react'
import './Home.css'
import {arrow_down, arrow_right_up} from '../../assets/'

const Home = () => {

  useEffect(()=>{

    const elements = document.querySelectorAll('.to-transition')
    elements.forEach((element)=>{
       element.classList.add('visible')

    
  
})}, [])


  return (
    <section className='home flex flex-col justify-between py-20 mt-[80px] xl:max-w-[1700px] w-full h-[100vh] bg-black'>
      
      {/* Top */}

      <div className='text-white '>
        
        {/* Main Heading */}
        <div className='flex flex-col md:pl-12 sm:pl-10 ss:pl-6 xs:pl-5 '>
          
          {/* Main Container */}
          <div className='flex flex-col w-min items-end'>
            <div className='flex-col text-[#a0a1a3] md:text-[150px] sm:text-[100px] ss:text-[90px] xs:text-[60px]'>
              <span className='hero-text flex items-center font-semibold md:h-[130px] sm:h-[90px] ss:h-[80px] xs:h-[55px]  overflow-hidden'><h1 className='not-visible to-transition'>WEBSITE</h1></span>
            
              <span className='hero-text flex items-center font-semibold md:ml-[170px] md:h-[130px] sm:ml-[120px] sm:h-[90px] ss:ml-[100px] ss:h-[80px] xs:h-[55px] xs:ml-[50px] overflow-hidden'><h1 className='not-visible to-transition'>DEVELOPER</h1></span>
            </div>
            
            <div className='flex overflow-hidden'>
              <h2 className='md:text-sm sm:text-[0.7rem] ss:text-[0.7rem] xs:text-[0.7rem] font-semibold -not-visible to-transition'>BASED IN PAKISTAN</h2>
            </div>
          </div>
        </div>

        <div className='mt-[20vh] flex flex-col md:text-sm sm:text-[0.7rem] ss:text-[0.7rem] xs:text-[0.7rem] font-semibold items-end mr-5 overflow-hidden'>
          <h2 className='-not-visible to-transition delay-[300ms]'>AVAILABLE FOR FREELANCE <br /> FROM JAN 2024</h2>
          
        </div>
      </div>

      {/* Bottom */}
      <div className='text-white md:text-sm sm:text-[0.7rem] ss:text-[0.7rem] xs:text-[0.7rem] font-semibold justify-between flex w-full bottom-0 px-5 pb-1 overflow-hidden'>
        <h2 className='flex items-center left-0 cursor-pointer not-visible to-transition delay-[600ms] underline-effect arrow-rotate'>CURRENTLY A FREELANCER <img className='arrow ml-2 md:h-[20px] md:w-[20px] h-[17px] w-[17px]' src={arrow_right_up} alt=""  /></h2>
        <h2 className='flex items-center ml-[-10%] cursor-pointer not-visible to-transition delay-[600ms] underline-effect arrow-rotate'>DIGITAL ARTIST AT FIVERR <img className=' arrow ml-2 md:h-[20px] md:w-[20px] h-[17px] w-[17px]' src={arrow_right_up} alt=""  /></h2>
         <button className='w-[25px] h-[25px] max-sm:hidden flex justify-center items-center rounded-full bg-gray-400 right-0 not-visible to-transition delay-[600ms] arrow-translate'><img className='arrow-down' src={arrow_down} alt="" width={"15px"} height={'15px'}/></button>
      </div>
     

    </section>
  )
}

export default Home