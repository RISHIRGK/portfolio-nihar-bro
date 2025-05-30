import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProjectContainer = ({
  img,
  header,
  desc,
  video,
}: {
  img: string;
  header: string;
  desc: string;
  video?: string;
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [initialHover, setInitialHover] = useState(false);
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
    <div
      style={{ fontFamily: 'Caudex, serif' }}
      className="flex flex-col items-center justify-center gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="overflow-hidden relative w-full h-[240px] sm:h-auto">
        {video && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
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
      </div>

      <div className="text-center text-2xl font-[400] text-black/80">
        {header}
      </div>
      <div
        style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}
        className="text-center text-sm font-[400] text-black/80"
      >
        {desc}
      </div>
    </div>
  );
};


export default ProjectContainer