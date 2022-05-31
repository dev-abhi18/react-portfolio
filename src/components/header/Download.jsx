import React from 'react'
import CV from '../../assets/cv.pdf'

const Download = () => {
  return (
      <div className='Download'>
          <a href= {CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    
  )
}

export default Download