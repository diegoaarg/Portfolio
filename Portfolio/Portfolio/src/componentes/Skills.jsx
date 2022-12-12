import React from 'react'
import Title from './Title'

export default function Skills() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-7/12'>
        <Title>Skills</Title>
        <div className='class="flex flex-col md:flex-row items-center justify-center"'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='border-2 border-stone-900 rounded-md p-5'>
              <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" class="w-full h-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"></path>
                </svg>
              </div>
              <h1 class="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">Front End</h1>
              <ul className='list-disc list-inside'>
                <li>HTML/CSS/Tailwind</li>
                <li>Javascript</li>
                <li>React/Angular</li>
              </ul>
            </div>
            <div class="border-2 border-stone-900  rounded-md p-5">
              <div class="text-gray-800 dark:text-gray-300 w-6 h-6 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              </div>
              <h1 class="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">Back End</h1>
              <ul className='list-disc list-inside'>
                <li>Python</li>
                <li>PHP</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div class="border-2 border-stone-900 rounded-md p-5">
              <div class="text-gray-800 dark:text-gray-300 w-6 h-6 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
              <h1 class="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">Others</h1>
              <ul className='list-disc list-inside'>
                <li>Wordpress</li>
                <li>Photoshop/Ilustrator</li>
                <li>Balsamiq</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
        
        
        


  )
}
