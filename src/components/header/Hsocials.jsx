import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiQuora} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
const Hsocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/abhivyakt-sharma-279b00205/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/dev-abhi18' target="_blank" ><BsGithub/></a>
        <a href='quora.com/profile/Abhivyakt-Sharma-2' target="_blank"><SiQuora/></a>
        <a href='https://www.instagram.com/abhivyakt_sharma/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default Hsocials