import React from 'react'
import { FaLinkedin ,FaDiscord,FaTwitter} from "react-icons/fa";


function Header() {
  return (
    <div className='h-[60px] position-fixed border-b-2 border-black flex justify-between items-center'>
     <div className='text-4xl font-bold ml-[40px] text-purple-500'>Stackles</div>
     <div className='flex gap-10 text-2xl mr-[40px] '>

     <div>
     <FaLinkedin />
     </div>

     <div><FaTwitter /></div>

     <div><FaDiscord /></div>
     </div>
    </div>
  )
}

export default Header
