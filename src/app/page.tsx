'use client'
import React, {  useRef, useState } from 'react'
import Image from 'next/image'
import { useInView, motion } from 'motion/react'
import ProjectMainContainer from './components/ProjectMainContainer'
import BackgroundVideo from './components/BackgroundVideo'

const page = () => {
  const [startAnimation, setStartAnimation] = useState(false)
  return (
  <div className='opacity-0 animate-view-in'>
        <div className="    z-10 relative flex flex-col items-center justify-center min-h-fit py-20 max-h-[800px]">
          <div className=" absolute right-[0%]   -rotate-90 sm:flex hidden  gap-2 items-center justify-center   "  style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>
           <Image alt='logo' className=' size-8  rotate-90 ' src={'/show-projects.svg'} height={32} width={32} />
            <span className='font-[400] text-sm '>View Project</span>
          </div>
<BackgroundVideo src={"Home.mp4"}/>
          {/* hero section */}
          <div className="w-full h-full     flex items-center justify-center flex-col  gap-6 sm:gap-8 text-lg px-4 sm:text-xl *:text-center  ">
            <div className="relative">
              <h1 className=" z-10 text-4xl  whitespace-nowrap  line-clamp-1 sm:text-8xl font-[500]  mb-4 absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%]  animate-fade-in  sm:block hidden mix-blend-color-burn " style={{ fontFamily: 'Caudex, serif' }}>Nihar Kapadiya</h1>

              <div className="h-[432px] w-[301px]  rounded-t-full  overflow-hidden relative   ">

                <Image alt='hero-image' className={` ${startAnimation?'animate-up-enter':'opacity-0'} object-bottom object-cover w-full h-full    `} onLoad={()=>{setStartAnimation(true)}} src={'/hero-image.avif'} height={430} width={300} />
              </div>
            </div>

            <h1 className=" z-10 text-4xl  whitespace-nowrap  line-clamp-1 sm:text-8xl font-[500]     animate-fade-in  block sm:hidden  " style={{ fontFamily: 'Caudex, serif' }}>Nihar Kapadiya</h1>
            <DivOne />

          </div>

        </div>
        <DivTwo />
        <DivThree />
</div>
  )
}

export default page

const DivOne = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // Trigger only once

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .8, delay: 1.4 }} className=" flex flex-col  ">
      <span className='first-letter:uppercase first-letter:text-3xl sm:first-letter:text-4xl' style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>Hey There! Welcome to my portfolio!</span>
      <span className='  ' style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>
        I’m a UI/UX designer with one and a half years of experience turning pixels into problem-
      </span>
      <span style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>solvers. I specialize in crafting designs that are as intuitive as they are easy on the eyes. </span>
      <span style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>Ready to bring your ideas to life, without stress</span>
      <span style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>(and with plenty of coffee)!</span>
    </motion.div>
  )
}
const DivTwo = () => {
  return (
    <div style={{ fontFamily: 'Caudex, serif' }} className=" bg-white   py-10 sm:py-20 w-full h-full flex  flex-col  items-center justify-center gap-10  px-4  ">
      <div className=" flex items-center justify-center flex-col  *:sm:text-3xl *:text-lg  gap-3 *:text-[var(--logo-text)]   sm:text-xl *:text-center">

     
      <span>I’m a UI/UX Designer.</span><span>
        UI design is my creative playground.</span><span>
        UX design is where my discipline come in.</span><span>
        Life? Well, that’s my testing ground.</span><span>
        Welcome to the home of my design brain,</span><span>

        where creativity meets strategy!</span> </div>
        <button className="w-[180px] h-[42px] text-lg  font-light   bg-white border-[var(--logo-text)] hover:text-white hover:bg-black/85 transition-colors duration-350 ease-in border-[1px] " style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>About Me</button>
    </div>
  );
}
const DivThree = () => {
  return (
   <div  style={{ fontFamily: 'Caudex, serif' }} className=" px-6 sm:px-20 py-5   sm:py-24 flex flex-col items-center justify-center gap-4 ">
    <h1 className='text-center text-3xl sm:text-[42px] font-[400] text-black/80  ' >My Projects</h1>
     <div className=" sm:hidden  flex flex-col items-center justify-center text-center pb-4 text-lg text-black/80">
      <span>Welcome to my portfolio. Here you’ll find a selection of my work.Explore my projects to learn more about what I do.</span>
    </div>
    <div className=" hidden sm:flex flex-col items-center justify-center text-center  text-xl text-black/80">
      <span>Welcome to my portfolio. Here you’ll find a selection of my work.</span>
      <span>Explore my projects to learn more about what I do.</span>
    </div>
< ProjectMainContainer />
   </div>
  );
}




 

