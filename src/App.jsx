import React from 'react'
import Navber from './components/Navber';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';

const App = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  )
}

export default App;