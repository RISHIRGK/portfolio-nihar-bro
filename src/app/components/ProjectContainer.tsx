import { useScroll,motion, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProjectContainer = ({
  img,
  header,
  desc,
  video,
  route = '',
}: {
  img: string;
  header: string;
  desc: string;
  video?: string;
  route?: string;
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [initialHover, setInitialHover] = useState(false);
  const containerRef=useRef(null);
  const {scrollYProgress }=useScroll({
    target:containerRef, offset: ["start 105%","start 95%"],
  })
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
const translateY = useTransform(smoothProgress, [0, 1.1], [60, 0],{clamp:false}); // you can tweak these
  const videoRef = useRef<HTMLVideoElement>(null);
useEffect(() => {
  console.log("videoLoaded changed:", videoLoaded);
}, [videoLoaded]);

  const handleMouseEnter = () => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMouseMove = () => {
    if (!initialHover) {
      setInitialHover(true);
    }
  };

  return (
    
    <motion.div 
    ref={containerRef}
    style={{y:translateY}}
    transition={{duration:1.5,type:'spring'}}
    >
    <Link
    href={route}
      style={{ fontFamily: 'Caudex, serif' }}
      
      className="flex flex-col items-center justify-center gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <motion.div  
       className="overflow-hidden relative w-full h-[240px] sm:h-auto">
        {video && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => {
              console.log("video")
              setVideoLoaded(true);
            }}
            className={`${
              videoLoaded && initialHover ? 'z-10' : '-z-10'
            } hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover hover:scale-110 transition-transform duration-1100`}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <Image
          alt="project-image"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-1100"
          src={img}
          height={400}
          width={600}
        />
      </motion.div>

      <div className="text-center text-2xl font-[400] text-black/80">
        {header}
      </div>
      <div
        style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}
        className="text-center text-sm font-[400] text-black/80"
      >
        {desc}
      </div>
    </Link>
    
</motion.div>
  );
};


export default ProjectContainer