import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'> ABHI </a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href='https://www.facebook.com/abhivyakt18sharma/'><BsFacebook/></a>
        <a href='https://www.instagram.com/abhivyakt_sharma/'><BsInstagram/></a>
        <a href='https://twitter.com/AbhivyaktSharma'><BsTwitter/></a>
      </div>

      <div className='footer_copyright'>
          <small>&copy; Abhivyakt Sharma. All Rights Reserved. </small>
      </div>
    </footer>
  )
}

export default footer