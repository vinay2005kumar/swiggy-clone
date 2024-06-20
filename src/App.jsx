import React, { useEffect, useState } from 'react'
import LandingPage from './suby/pages/LandingPage'
import Error from './suby/components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  const[isonline,setonline]=useState(navigator.onLine)
  useEffect(()=>{
    const handleonline=()=>setonline(true)
    const handleoffline=()=>setonline(false)
    window.addEventListener('online',handleonline)
    window.addEventListener('offline',handleoffline)
  return()=>{
    window.removeEventListener('online',handleonline)
    window.removeEventListener('offline',handleoffline)
  }
  },[])
  return (
    <div>
      {/* {isonline ? <LandingPage></LandingPage>: <Error></Error>} */}
     { isonline?
     <BrowserRouter>
      <LandingPage></LandingPage>
      </BrowserRouter> :<Error></Error>}
    
    </div>
  )
}

export default App