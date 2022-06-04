import React from 'react'
import './skill.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Skills = () => {
  return (
    <section id='Skills'>
      <h5>My Skills</h5>
      <h2>Experience</h2>
      <div className='container skill_container'>
      <div className='frontend_skills'>
        <h3>Front Development</h3>
        <div className='skill_content'>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>React </h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>NextJS</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>Chakra UI</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
        </div>
      </div>

      <div className='backend_skills'>
      <h3>BackEnd Development</h3>
        <div className='skill_content'>
        <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>C++ DSA</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>Python</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>NodeJS</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>MySQL</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>FireBase</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
          <article className='skill_details'>
            <BsPatchCheckFill className = 'skill_details-icons'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text_light'>Experienced</small>
           
            </div>
            
          </article>
        </div>
      </div>
      </div>
     
      </section>
  )
}

export default Skills