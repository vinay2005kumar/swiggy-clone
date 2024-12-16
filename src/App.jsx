import React, { useEffect, useState } from 'react';
import LandingPage from './suby/pages/LandingPage';
import Error from './suby/components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [isOnline, setOnline] = useState(navigator.onLine);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust width threshold as needed

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', fontSize: '20px', marginTop: '50px' }} className='msg'>
        Mobile view is not supported
      </div>
    );
  }
  if (!isOnline) {
    return <Error />;
  }

 

  return (
    <BrowserRouter>
      <LandingPage className='swiggy'/>
    </BrowserRouter>
  );
};

export default App;
