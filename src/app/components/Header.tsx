'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {AnimatePresence, motion }from "motion/react"
import { usePathname, useRouter} from 'next/navigation';
import Link from 'next/link';
 const routes=[
      {title:'Home',route:'/'},
      {
        title:'Works',childRoutes: [
          { route: '/works/immersi-fit', title: 'ImmersiFit VR Design' },
          { route: '/works/taj', title: 'Taj Gandhinagar' },
          { route: '/works/edit-inside', title: 'Edit Inside' },
          { route: '/works/erp-poonam-coatings', title: 'ERP Poonam Coatings' },
  {  route: '/works/balan-dosa', title: 'Balan Dosa' },
  { route: '/works/waveflow-parallax-ui', title: 'Waveflow Parallax UI' },
  { route: '/works/midnight-pulse', title: 'Midnight Pulse Landing Page' },

]
      },{
        title:'About me',route:'/about-me'
      }
    ]
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openChildRoutes, setOpenChildRoutes] = useState(false)
const router=useRouter()
    const pathname = usePathname()
   
    
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
<div onMouseLeave={()=>{
  setOpenChildRoutes(false)
}} className={` z-30 sticky ${isOpen?'sm:-top-25 top-0':'top-0'}   transition-all duration-300  flex w-full h-[94px] border-b-2 bg-white opacity-100 px-[40px]  border-b-[var(--header-border)]  items-center justify-between`} style={{fontFamily: 'Caudex, serif', fontWeight: '400', lineHeight:'16px'}}>
  <div className="flex h-full items-center  max-sm:justify-between     max-sm:w-full    text-[var(--header-text)]  gap-6">
 <CloseButton/>
  <Image
    src="/logo.svg"
    alt="Logo"
    width={100}
    height={50}
    className="ml-4 mt-2 w-[68px] cursor-pointer " onClick={()=>{
      router.push('/')
    }} />
<span className='    text-[var(--logo-text)]    font-extralight    '   style={{fontFamily:'AvenirLTW01-Light',lineHeight:' 22.4px'}}>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UX Designer</span>
  </div>
  <div className=" hidden sm:flex items-center ml-auto  font-[18px] gap-10 " style={{fontFamily: 'kepler-std-semicondensed-dis, serif',fontWeight: '400', lineHeight:'16px'}}>
    {routes.map((data,index)=>{
      return <div className='relative'  key={index} > <Link onMouseEnter={()=>{
        if(data.childRoutes?.length) {
          setOpenChildRoutes(true)
        }
      }} href={data.route??''} className={`text-lg  ${(pathname===data.route || pathname.startsWith("/"+data.title.toLowerCase()))?'text-[var(--logo-text)] ':'text-[var(--header-text)]'}  `} >{data.title}</Link>
      { (data.title==='Works' && data.childRoutes) &&  <HeaderDropdown onClose={()=>{setOpenChildRoutes(false)}} routes={data.childRoutes} isOpen={openChildRoutes} />}
      </div>
    })}
   

    </div>
</div>
  )
}
const HeaderDropdown = ({onClose,routes,isOpen}:{onClose:()=>void,routes:{route:string,title:string}[],isOpen:boolean}) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: .3 }}
          animate={{ opacity: 1, scale: 1}}
          exit={{ opacity: 0, scale: .3 }}
          className="absolute  top-[200%]  overflow-hidden  left-1/2 min-w-[16rem] rounded-xl  border-[var(--logo-text)]  border-2  -translate-x-1/2 bg-white shadow-normal z-50"
        >
          <ul className=" ">
            {routes.map((route, index) => (
              <li key={index} aria-disabled={pathname===route.route} className={` py-2  px-4  ${pathname===route.route?'bg-black/80 text-white cursor-not-allowed ':'bg-white/30 '}  hover:text-white w-full text-black/80   font-light  hover:bg-black/80 text-center transition-colors duration-300 ease-in-out `}>
                <Link href={route.route??''} onClick={onClose} aria-disabled={pathname===route.route} className="text-lg   text-center   w-full ">
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Header


const CloseButton= () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showInner, setShowInner] = useState(false)
  const [openChildRoutes, setOpenChildRoutes] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
     if(isOpen)
     {
      document.body.style.overflow = 'hidden';
      }
      else
      {
        document.body.style.overflow = 'auto';
      }
  }, [isOpen])
 
  return (
    <>
    <AnimatePresence>
    {isOpen && <motion.div initial={{opacity:0}} animate={{opacity:1,  }} exit={{opacity:0}} onAnimationComplete={()=>{
      setShowInner(true)
    }}  className='fixed z-30 inset-0  overflow-scroll bg-white w-full h-full flex flex-col items-center justify-center ' >
        <AnimatePresence    onExitComplete={() => {
          // Once inner exits, close outer
          setIsOpen(false)
        }} >
    {showInner &&
   <motion.div  initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-50}} transition={{duration:.3, type: "spring" }}     className="  px-8 *:text-center  flex flex-col items-center  mt-[120px] h-full w-full    ">
      {routes.map((data,index)=>{
        return <div  key={index} className={`  ${index!==(routes.length-1)&&' border-b-[2px] border-gray-200 '} w-full`}>  <div  className={`py-13 flex flex-col w-full `}>
          <div className="flex">
            {data.childRoutes?.length &&  <div className=' flex-1/5' ></div>}
             <Link href={data.route??''} className={`text-[34px] ${data.childRoutes?.length?'flex-3/5':'flex-1'}    ${pathname===data.route?'text-[var(--active-link-mobile)] ':'text-[var(--logo-text)]'}  `} onClick={()=>{setShowInner(false)}} >
{data.title} 
        </Link>
            {data.childRoutes?.length &&  <div className=' flex-1/5 flex items-center justify-center' >
            <Image alt='logo' className={` size-4 ${openChildRoutes&& 'rotate-180'} transition-transform duration-300    `}onClick={()=>{setOpenChildRoutes((prev)=>!prev)}} src={'/arrow.svg'} height={32} width={32} />
            </div>}

          </div>
          {/* <ChildRoutes/> */}
          </div>
          <AnimatePresence>
          {(data.childRoutes?.length && openChildRoutes) && <ChildRoutes onClose={()=>{ setOpenChildRoutes(false); setShowInner(false)}} childRoutes={data.childRoutes} />}
           </AnimatePresence>
          </div>
      })}
      </motion.div>}
            </AnimatePresence>
      </motion.div>}
    </AnimatePresence>
   <div onClick={()=>{ if(!isOpen){ setIsOpen((prev)=>!prev)} setShowInner(false) }} className=" z-40 flex sm:hidden flex-col     gap-3 ">
      <div className={`w-5 h-1 origin-top-left bg-black rounded-full transition-all duration-150    ${isOpen?"rotate-45   translate-x-[6px] translate-y-[5px]":""}  `} style={{ transitionTimingFunction:'cubic-bezier(0.9, -0.6, 0.3, 1.6)'}}></div>
      <div className={`w-8 h-1  origin-center bg-black rounded-full transition-all duration-150 ${isOpen?"-rotate-45":""}  `}  style={{ transitionTimingFunction:'cubic-bezier(0.9, -0.6, 0.3, 1.6)'}}></div>
      <div className={`w-5 h-1  origin-bottom-right bg-black rounded-full transition-all duration-150 ${isOpen?"rotate-45  translate-x-[7px] translate-y-[-4px]":""} `}  style={{ transitionTimingFunction:'cubic-bezier(0.9, -0.6, 0.3, 1.6)'}}></div>
    </div>
    </>
  );
}
const ChildRoutes= ({onClose,childRoutes}:{onClose:()=>void,childRoutes:{title:string,route:string}[]}) => {
  const pathname = usePathname()

  return (
    
    <motion.div layout initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1 }} exit={{height:0,opacity:0}} className="flex flex-col  w-full overflow-hidden">
      {childRoutes.map((data,index)=>{
        return <div  key={index} className={` py-10 flex flex-col  w-full `}>
            
             <Link  
  style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}
              href={data.route??''} onClick={onClose} className={` w-full  text-[24px]  leading-6   font-light  sm:text-[28px]  flex-1      ${pathname===data.route?'text-[var(--active-link-mobile)] ':'text-[var(--logo-text)]'}  `}  >
{data.title} 
        </Link>
        </div>
      }
      )}
    </motion.div>
  )
}

