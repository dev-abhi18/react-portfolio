import React from 'react'
import './header.css'
import Download from './Download'
import Myimage from '../../assets/my_image.jpg'
import Hsocials from './Hsocials'
const header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello , I'm </h5>
        <h1>Abhivyakt Sharma</h1>
        <h5 className='text-light'>Web Developer</h5>
        <Download/>
        <Hsocials/>
        <div className='myimage'>
          <img src={Myimage} alt='img'/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default header