import Link from 'next/link'
import React,{useState} from 'react'
import Image from 'next/image'
import profilePic from '../assets/21.png'

const headers = () => {
  const [open,isOpen]= useState(false)

  function openUp(){
    isOpen(!open)

  }
      return (
    <div className='flex items-center justify-center'>
        <div className='flex px-4 md:px-6 py-3 lg max-w-[700px] mx-auto justify-between items-center gap-3 '>
          <Link href='/'>
            <div className='text-[#eeeeee] font-extrabold cursor-pointer min-w-[100px]'>
            <Image
   src={profilePic}
      alt="logo"
      width={40} 
      height={40} 
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
            </div>
            </Link>
        <ul className='flex text-[#b4b4b4] max-sm:hidden'>
            <li className='flex px-4 py-2 rounded-lg text-sm cursor-pointer'>About</li>
            <li className='flex px-4 py-2 rounded-lg text-sm cursor-pointer'>Blog</li>
            <li className='flex px-4 py-2 rounded-lg text-sm cursor-pointer'>Contact-us</li>
           
        </ul>
        <div className='hidden px-4 py-2 rounded-lg text-sm cursor-pointer text-[#b4b4b4] relative max-sm:flex'>
          
          <p onClick={openUp}>Menu</p>{ open &&
          <div>
            

      
          <ul className='flex text-[#b4b4b4] flex-col bg-[#2e2e2e] rounded-[10px] absolute left-0 top-[30px] animate-in'>
            <li className='flex px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-[#22222]'>About</li>
            <li className='flex px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-[#22222]'>Blog</li>
            <li className='flex px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-[#22222]'>Contact-us</li>
            
        </ul></div>}</div>
        </div>
       
 
    </div>
  )
}

export default headers