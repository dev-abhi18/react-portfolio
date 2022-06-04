import React from 'react'
import './projects.css'
import IMG1 from '../../assets/va.png'
const projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container projects_container'>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Project Title</h3>
          <div className='project_item-cta'>
          <a href='https://github.com/' className='btn' >GitHub</a>
           <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Project Title</h3>
          <div className='project_item-cta'>
          <a href='https://github.com/' className='btn' >GitHub</a>
           <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Project Title</h3>
          <div className='project_item-cta'>
          <a href='https://github.com/' className='btn' >GitHub</a>
           <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
       
      </div>
    </section>
  )
}

export default projects