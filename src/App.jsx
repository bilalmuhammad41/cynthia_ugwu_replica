import React, { useState, useEffect } from 'react'
import {Nav} from "./components"
import {Home, Projects} from './sections'
import SplashScreen from './components/Splash Screen/SplashScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      // setIsLoading(false)
    }, 3000)
  })
  return (
    <>
      {isLoading && <SplashScreen isLoading />}
      {!isLoading && (
        <div className="flex flex-col items-start w-full bg-black overflow-hidden">
          <Nav />
          <main className="flex flex-col justify-center w-full">
            <Home />
            <Projects />
          </main>
        </div>
      )}
    </>
  );
}

export default App
