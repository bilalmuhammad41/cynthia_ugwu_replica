import React from 'react'
import {NavItems} from '../../constants'

const Projects = () => {
  return (
    <section className='w-full md:h-[100vh] sm:[] bg-black xl:max-w-[1700px]'>
      <div>
        {NavItems.filter(item=> !['playground', 'contact'].includes(item)).map((item)=>(
          <div className='h-[100px] border-white border-b-[1px]'>
            <h1 className='text-white text-[80px] uppercase font-semibold'>{item}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects