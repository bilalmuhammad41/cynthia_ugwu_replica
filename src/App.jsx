import React, { useState, useEffect, useRef} from 'react'
import {Nav, SplashScreen} from "./components"
import {Home, Projects, About, Footer} from './sections'
import  {LocomotiveScrollProvider, useLocomotiveScroll} from 'react-locomotive-scroll'
import './index.css'



function App() {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef(null)
  
  
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTimer = () => {
      setCurrentTime(new Date());
    };
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);

  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${hours % 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
 

  
  const { scroll } = useLocomotiveScroll()
  return (
    < >
      
      {isLoading ? <SplashScreen isLoading={isLoading} setIsLoading ={setIsLoading} /> : 
    
        <div className="flex flex-col items-center w-full bg-black overflow-hidden no-scrollbar">
          <Nav formattedTime={formattedTime} />

          <LocomotiveScrollProvider
          options = {
            {smooth:true,
              multiplier: 1,
            }
          }
          watch={[]}
          
          >
          <main className="main flex flex-col items-center justify-center w-full"
          data-scroll-container ref={containerRef} >
            <Home />
            <Projects />
            <About/>
            <Footer formattedTime={formattedTime}/>
          </main>
          </LocomotiveScrollProvider>
        </div>
      }
    </>
  );
}

export default App
