import React from 'react'
import './index.css'
import Layout from './Layout'
import Navbar from './Navbar'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Layout />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App