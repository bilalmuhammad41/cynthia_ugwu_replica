import { useState } from 'react'
import {Nav} from "./components"
import {Home, Projects} from './sections'

function App() {
  return (
    
      <div className='flex flex-col items-start w-full bg-black overflow-hidden'>
        
        
        <div className='w-full flex justify-center'>
          <Nav />
        </div>

        <div className='flex justify-center w-full'>
          <Home/>
        </div>  
        <div className='flex w-full justify-center'>
          <Projects />  
        </div> 
      </div>
      
  )
}

export default App
