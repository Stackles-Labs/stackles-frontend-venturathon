import React from 'react'

function Platform() {
  return (
    <div className='mt-[40px] flex justify-center items-center flex-col '>
      <div className='flex flex-col border-4 border-blue-600 h-[120px] w-[500px]
      rounded-xl border-dotted border-spacing-2'>
        <div>Image</div>
        <div className='text-xl'>Easily navigate between platforms and tools your team or community uses.</div>
      </div>

      <div className='flex flex-col border-4 border-blue-600 h-[120px] w-[500px]
      mt-[60px] border-dotted border-spacing-2 rounded-xl'>
      <div>Image1</div>
        <div className='text-xl'>Faster onboarding to team projects and platforms.</div>
      </div>

      <div className='flex flex-col border-4 border-blue-600 h-[120px] w-[500px]
      mt-[60px] border-dotted border-spacing-2 rounded-xl'>
      <div>Image2</div>
        <div className='text-xl'>Token gate access to link, files, and tools that your organization works with and ensure security.</div>
      </div>
    </div>
  )
}

export default Platform
