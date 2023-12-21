import React, { useState, useEffect } from 'react'
import {Nav, SplashScreen} from "./components"
import {Home, Projects} from './sections'
import './index.css'


function App() {
  const [isLoading, setIsLoading] = useState(true)
 
  return (
    <>
      {isLoading ? <SplashScreen isLoading={isLoading} setIsLoading ={setIsLoading} /> : 
    
        <div className="flex flex-col items-center w-full bg-black overflow-hidden no-scrollbar">
          <Nav />
          <main className="flex flex-col items-center justify-center w-full">
            <Home />
            <Projects />
          </main>
        </div>
      }
    </>
  );
}

export default App
