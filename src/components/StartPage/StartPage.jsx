import React from 'react'
import Form from '../Form/Form'

function StartPage() {
  return (
    <div className='mt-[70px] '>
      <h3 className=' text-5xl md:text-7xl font-medium gap-2 text-blue-500'>
      We are 
      <span className='text-purple-500'> building</span> the tool
      <br/> to reduce files and links 

      <br/> <span className='text-purple-500'>clutter</span></h3>

      <h1 className='mt-[30px] text-gray-600 text-2xl md:text-2xl'>
      In the meantime, we invite you to join our waiting list by <br/>
      filling out the form below. By doing so, you'll be the first to <br/>
      know when we launch.</h1>
    
     <div>
      <Form/>
     </div>
    </div>
   
  )
}

export default StartPage
