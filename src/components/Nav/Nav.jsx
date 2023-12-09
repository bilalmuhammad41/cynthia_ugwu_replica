import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { NavItems } from '../../constants'
import {lines} from '../../assets'

const Nav = () => {
  const [scrolling, setScrolling] = useState(false)
  const [menuBtnVisible, setMenuBtnVisible] = useState(true)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true)
      
    const navLinks = document.querySelectorAll('.nav-link')

      navLinks.forEach((link, index)=>{
        
       setTimeout(()=>{
          link.classList.remove('menu-visible')
          link.classList.remove('underline-effect')
          link.classList.add('menu-not-visible')}, index*10)
      })
      
      setMenuBtnVisible(true)
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () =>{
    setMenuBtnVisible(false)
    setScrolling(false)
    
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach((link, index)=>{
    
    setTimeout(()=>{
      link.classList.add('menu-visible')
      link.classList.add('underline-effect')
      link.classList.remove('menu-not-visible')}, index*40)  

    })
   

    const menuButton = document.querySelector('.menu-button')
    // console.log('Clicked')
  }
  return (
    
    <nav className= "flex fixed w-full xl:max-w-[1700px]">
      
      <div className='flex items-center justify-between w-full h-[80px] py-5 px-7 bg-black'>
        {/* Logo */}
        <div className='text-white font-semibold'>
          <h3 className='text-lg'>Muhammad Bilal</h3>
        </div>
        {/* Right side Nav */}
        <div className='flex flex-col justify-between items-end h-[30px]'>
        
          {/* NavLinks */}
          <ul className ='flex flex-col text-white font-semibold uppercase list-none items-end pt-1 overflow-hidden'>
            <div className='sm:flex hidden gap-4 justify-center items-center'>
              {
                NavItems.map((item, index)=>(
                  <li className={` nav-link select-none text-white text-[17px] menu-not-visible`}  key={index}>{item}</li>
                ))
              }
            </div>
             {/* Menu Button */}
        
              <div className='menu-btn-container'
              onClick={(e)=>handleMenuClick(e)}>
        
                <button className={` text-white select-none font-semibold text-[17px] menu-button flex justify-center items-center ${menuBtnVisible ? 'menu-button-visible ' : 'menu-button-not-visible'} underline-effect`}>
                  <span >MENU</span>
                  <span className='text-gray-400'>+</span>
                </button>
            </div>
          </ul>
        </div>
      </div>

     
          
    </nav>
  
    
  )
}

export default Nav