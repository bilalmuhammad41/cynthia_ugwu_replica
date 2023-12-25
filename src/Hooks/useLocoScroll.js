import LocomotiveScroll from 'locomotive-scroll';
import '../../src/index.css'
import React, {useEffect} from 'react'

const useLocoScroll = (isLoading)=>{
  useEffect(()=>{
    if (isLoading) return;

    const scrollEl = document.querySelector('.main')
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      
      class: 'is-reveal',
    })
  }, [isLoading])
  
}

export default useLocoScroll