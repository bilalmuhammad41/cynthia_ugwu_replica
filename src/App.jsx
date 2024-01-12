import React, { useState, useEffect, useRef} from 'react'
import {CustomCursor, Nav, SplashScreen} from "./components"
import {Home, Projects, About, Footer} from './sections'
import LocomotiveScroll from 'locomotive-scroll'

import './index.css'




function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTimer = () => {
      setCurrentTime(new Date());
    };
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);

  }, []);

  useEffect(()=>{
     const locomotiveScroll = new LocomotiveScroll()
      
  },[])
 

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${hours % 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  

  
  return (
    < >
      
      {isLoading ? <SplashScreen isLoading={isLoading} setIsLoading ={setIsLoading} /> : 
    
        <div className="flex flex-col items-center w-full bg-black overflow-hidden no-scrollbar">
          <Nav formattedTime={formattedTime} />

          
          <main className="main flex flex-col items-center justify-center w-full"
          >
            <Home />
            <Projects />
            <About/>
            <Footer formattedTime={formattedTime}/>
          </main>
        </div>
      }
    </>
  );
}

export default App
