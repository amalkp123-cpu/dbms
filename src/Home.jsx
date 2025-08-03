import React from 'react'
import Nav from './Nav'
import About from './About'
import Contact from './Contact'
import Special from './Special'


const home = () => {
  return (
    <div className='home'>
      <Nav></Nav>
      <About></About>
      <Special></Special>
     <Contact></Contact>

     
    </div>
  )
}

export default home
