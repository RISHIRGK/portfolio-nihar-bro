'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {AnimatePresence, motion }from "motion/react"
import { usePathname} from 'next/navigation';
import Link from 'next/link';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()
    const routes=[
      {title:'Home',route:'/'},
      {
        title:'Work',childRoutes:[{}]
      },{
        title:'About me',route:'/about-me'
      }
    ]
    
  const prevscrollY = useRef(0);
  useEffect(()=>{
 
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevscrollY.current) {
        // Scrolling down
        setIsOpen(true);
      } else {
        // Scrolling up
        setIsOpen(false);
      }
      prevscrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return (
<div className={` z-30 sticky ${isOpen?'sm:-top-25 top-0':'top-0'} transition-all duration-300  flex w-full h-[94px] border-b-2 bg-white opacity-100 px-[40px]  border-b-[var(--header-border)]  items-center justify-between`} style={{fontFamily: 'Caudex, serif', fontWeight: '400', lineHeight:'16px'}}>
  <div className="flex h-full items-center  max-sm:justify-between     max-sm:w-full    text-[var(--header-text)]  gap-6">
 <CloseButton/>
  <Image
    src="/logo.svg"
    alt="Logo"
    width={100}
    height={50}
    className="ml-4 mt-2 w-[68px] "/>
<span className='    text-[var(--logo-text)]    font-extralight    '   style={{fontFamily:'AvenirLTW01-Light',lineHeight:' 22.4px'}}>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UX Designer</span>
  </div>
  <div className=" hidden sm:flex items-center ml-auto  font-[18px] gap-10 " style={{fontFamily: 'kepler-std-semicondensed-dis, serif',fontWeight: '400', lineHeight:'16px'}}>
    {routes.map((data,index)=>{
      return <Link key={index} href={data.route??''} className={`text-lg  ${pathname===data.route?'text-[var(--logo-text)] ':'text-[var(--header-text)]'}  `} >{data.title}</Link>
    })}
   

    </div>
</div>
  )
}

export default Header


const CloseButton= () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <AnimatePresence>
    {isOpen && <motion.div initial={{opacity:0}} animate={{opacity:1,  }} exit={{opacity:0}} className='fixed z-30 inset-0  bg-white w-full h-full' ></motion.div>}
    </AnimatePresence>
   <div onClick={()=>{setIsOpen((prev)=>!prev)}} className=" z-40 flex sm:hidden flex-col     gap-3 ">
      <div className={`w-5 h-1 origin-top-left bg-black rounded-full transition-all duration-150    ${isOpen?"rotate-45   translate-x-[6px] translate-y-[5px]":""}  `} style={{ transitionTimingFunction:'cubic-bezier(0.9, -0.6, 0.3, 1.6)'}}></div>
      <div className={`w-8 h-1  origin-center bg-black rounded-full transition-all duration-150 ${isOpen?"-rotate-45":""}  `}  style={{ transitionTimingFunction:'cubic-bezier(0.9, -0.6, 0.3, 1.6)'}}></div>
      <div className={`w-5 h-1  origin-bottom-right bg-black rounded-full transition-all duration-150 ${isOpen?"rotate-45  translate-x-[7px] translate-y-[-4px]":""} `}  style={{ transitionTimingFunction:'cubic-bezier(0.9, -0.6, 0.3, 1.6)'}}></div>
    </div>
    </>
  );
}