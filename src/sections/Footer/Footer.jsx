import React from 'react'
import { socials } from '../../constants'
import './Footer.css'
const Footer = ({formattedTime}) => {


  return (
    <footer className='' id='footer'>
      <div className='flex flex-col-reverse gap-5 ss:flex-row  justify-between w-[100svw] px-5 pb-4 md:pt-[15svh] sm:pt-[10svh] ss:pt-[10svh] xs:pt-[7svh] text-[0.9rem]'>
        <div className='text-white font-semibold'>2023 &nbsp;&nbsp;&nbsp; {formattedTime} PST</div>
        
        <ul className='flex '>{socials.map((social, index)=>(
          <li className='list-none mr-5 uppercase font-semibold text-white underline-effect' key={index}>
            <a href={social.link}>{social.name}</a>
          </li>
        ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer