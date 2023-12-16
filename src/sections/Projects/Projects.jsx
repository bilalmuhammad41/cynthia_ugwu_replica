import React from 'react'
import {NavItems} from '../../constants'

const Projects = () => {
  return (
    <section className='w-full md:py-[15vh] sm:py-[10vh] ss:py-[10vh] xs:py-[7vh] bg-black xl:max-w-[1700px] md:px-12 sm:px-10 ss:px-6 xs:px-5 '>
      <div className='flex flex-col'>
        {NavItems.filter(item=> !['playground', 'contact'].includes(item)).map((item, index)=>(
          <div className= {`flex md:h-[250px] sm:h-[150px] ss:h-[120px] xs:h-[90px] text-container border-white ${index == 0 ? 'border-t-[1px]':''} border-b-[1px] leading-none items-center cursor-pointer`}>
            <h1 className='flex-1 text-[#a0a1a3] text-[80px] uppercase font-semibold md:text-[120px] sm:text-[80px] ss:text-[70px] xs:text-[55px] text-container '>{item}</h1>
            <h3 className='text-white pr-2 font-semibold md:text-sm text-[0.7rem]' >{index === 0? '2022':''}{index === 1? '2022':''}{index === 2? '2021':''}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects