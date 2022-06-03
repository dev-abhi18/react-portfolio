import React from 'react'
import { icons } from 'react-icons'
import './navbar.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdSchool} from 'react-icons/md'
import {BiGitRepoForked} from 'react-icons/bi'
import {FcContacts} from 'react-icons/fc'
import { useState } from 'react'
const Navbar = () => {
  const [activenavbar , setActivenavbar] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActivenavbar('#')   } className={activenavbar=== '#' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href='#about'onClick={()=> setActivenavbar('#about')   } className={activenavbar=== '#about' ? 'active' : ''}><BsFillPersonFill/></a>
      <a href='#education' onClick={()=> setActivenavbar('#education')   } className={activenavbar=== '#education' ? 'active' : ''}><MdSchool/></a>
      <a href='#projects' onClick={()=> setActivenavbar('#projects')   } className={activenavbar=== '#projects' ? 'active' : ''}><BiGitRepoForked/></a>
      <a href='#contact' onClick={()=> setActivenavbar('#contact')   } className={activenavbar=== '#contact' ? 'active' : ''}><FcContacts/></a>
    </nav>
  )
}

export default Navbar