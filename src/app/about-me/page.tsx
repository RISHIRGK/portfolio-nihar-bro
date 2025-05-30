import React from 'react'
import BackgroundVideo from '../components/BackgroundVideo'
import Image from 'next/image'

const page = () => {
  return (
    <div className=" animate-view-in   relative flex flex-col items-center justify-center min-h-fit py-14 sm:py-20 px-4 max-h-[800px]">
          
   <BackgroundVideo opacity={false} src={'About-me.mp4'} />
             {/* hero section */}
             <div style={{ fontFamily: 'Caudex, serif' }} className="w-full h-full     flex items-center justify-center flex-col  gap-6 sm:gap-10 text-lg px-4 sm:text-xl *:text-center  ">
           <h1 className=' text-3xl sm:text-5xl'>About Me</h1>
           <div className="flex flex-col text-center  items-center  justify-center px-4  gap-4 sm:gap-2 max-w-[760px]" >
            <span className=' text-xl sm:text-3xl'>Hey There, I am Nihar!</span>
            <span className=' text-xs sm:text-lg'   style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>A Passionate UX Designer based in Ahmedabad, India. With a blend of creativity and strategy, I craft digital experiences that are not just visually captivating but also deeply user-focused. My journey spans web design, mobile apps, and immersive experiences, where I’ve honed my skills in UX research, interaction design, and visual storytelling.
I thrive on turning complex challenges into seamless designs, and collaborating with clients and development teams to bring ideas to life. Beyond pixels and prototypes, I’m a lifelong learner, exploring the crossroads of design and technology, with a growing passion for XR design.</span>
           <span  className=' text-xs sm:text-lg '   style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>Let’s connect and create something extraordinary together.</span>

           </div>
<a 
  href="/nihar-portfolio.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-[20px] py-[10px] text-sm font-light bg-white/30 border-[var(--logo-text)] hover:text-white hover:bg-black/85 transition-colors duration-350 ease-in border-[1px]" 
  style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}
>
  Download Resume
</a>

             
             </div>
   
           </div>
            )
}

export default page




// Hey There, I am Nihar!
// A Passionate UX Designer based in Ahmedabad, India. With a blend of creativity and strategy, I craft digital experiences that are not just visually captivating but also deeply user-focused. My journey spans web design, mobile apps, and immersive experiences, where I’ve honed my skills in UX research, interaction design, and visual storytelling.
// I thrive on turning complex challenges into seamless designs, and collaborating with clients and development teams to bring ideas to life. Beyond pixels and prototypes, I’m a lifelong learner, exploring the crossroads of design and technology, with a growing passion for XR design.
// Let’s connect and create something extraordinary together.