import React from 'react'
import { FaLinkedin ,FaDiscord,FaTwitter, FaGithub} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <div className='h-[60px] position-fixed border-b-2 border-black flex justify-between items-center'>
     <div className='text-4xl font-bold ml-[40px] text-purple-500'>Stackles</div>
     <div className='flex gap-10 text-2xl mr-[40px] '>

     <NavLink
     to="https://www.linkedin.com/company/stackles/"
     target="_blank">
     <div>
     <FaLinkedin />
     </div>
     </NavLink>
   
    <NavLink
    to="https://github.com/RnDAO"
    target="_blank">
    <div>
    <FaGithub />
    </div>
    </NavLink>
     
      <NavLink
      to="https://twitter.com/StacklesApp"
      target="_blank">
      <div>
      <FaTwitter />
      </div>
      </NavLink>


     </div>
    </div>
  )
}

export default Header
