'use client'
import React, { useState,useEffect } from 'react';
import Header from './component/ui/headers';
import Arrow from './component/assets/Arrow';
import Link from 'next/link';
import Image from 'next/image'
import profilePic from './component/assets/21.png'

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Set animate to true when the component mounts or refreshes
    setAnimate(true);

    // Set animate back to false after the animation duration to reset the animation
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 1000); // Change 1000 to the duration of your animation in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  const handleMouseOver = (index:any) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const emailItems = [
    { text: 'Twitter ' },
    { text: 'GitHub' },
    { text: 'Youtube' },
    { text: 'Discord' },
  ];
  return (
    <div>
        <Header/>
        <div className=' flex justify-between items-center  mt-[100px] flex-col '>
        <div className='rounded-full bg-secondary mx-auto bg-[#2a2a2a] border h-[100px] w-[100px] animate-ins flex items-center justify-center'>
        <Image
   src={profilePic}
      alt="logo"
      width={40} 
      height={40} 
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
        </div>
        <h1 className='text-2xl font-bold tracking-tight text-center text-[#eeeeee] mt-[16px] animate-in '>Roluxpay</h1>
        <p className='max-w-sm text-secondary mx-auto text-center text-[#b4b4b4] text-[15px] leading-6 mt-[5px] animate-in'>Creating a simple Point of serivce (POS) for making Solana (SOL) payments using a scan-to-pay mechanism. simplyfying Solana payments
           </p>
      

<div className="container mt-[20px] max-w-[500px] w-full flex flex-col animate-ins ">
      {emailItems.map((item, index) => (
        <div
          key={index}
          className={`text-[#eeeeee] justify-start bg-[#222222] h-[40px] rounded-[10px] cursor-pointer items-center flex px-3 text-[14px] mt-[10px] ${
            hoveredIndex === index ? 'bg-[#2a2a2a]' : ''
          }`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          {item.text}
         <Arrow/>
        </div>
      ))}
      
    </div>
    <Link href="/dashboard" >
    <div className='text-[#eeeeee]  bg-[#222222] h-[40px] rounded-[10px] cursor-pointer items-center flex px-3 text-[14px] mt-[25px] w-[300px] justify-center hover:bg-[#2a2a2a] animate-ins'>Get started <Arrow/></div>
    </Link>
        </div>
        
       <div>
        
       </div>
    </div>
   
 
  )
}
