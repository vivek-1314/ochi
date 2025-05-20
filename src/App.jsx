import React, { useEffect } from 'react';
import Navbar from './component/navbar'
import LandingPage from './component/landingpage'
import Marquee from './component/marquee'
import About from './component/about'
import Eyes from './component/eyes'
import Featured from './component/featured'
import Cards from './component/cards'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll;

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
    </div>
  )
}

export default App  