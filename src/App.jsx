import React, { useState, useEffect } from 'react'
import {Nav, SplashScreen} from "./components"
import {Home, Projects} from './sections'


function App() {
  const [isLoading, setIsLoading] = useState(true)
 
  return (
    <>
      {isLoading ? <SplashScreen isLoading={isLoading} setIsLoading ={setIsLoading} /> : 
    
        <div className="flex flex-col items-start w-full bg-black overflow-hidden">
          <Nav />
          <main className="flex flex-col justify-center w-full">
            <Home />
            <Projects />
          </main>
        </div>
      }
    </>
  );
}

export default App
