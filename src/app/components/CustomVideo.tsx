'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CustomVideo = ({ src, mainSrc, dummySrc }: any) => {
  const [hasError, setHasError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    console.log('hasError:', hasError, 'videoLoaded:', videoLoaded);
  }, [hasError, videoLoaded]);

  return (
    <div className="relative h-full w-full ">
        <div
    className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:3px_3px]"
  />
      {/* Show fallback image until video is loaded */}
      {!videoLoaded && (
        <Image
          src={mainSrc}
          blurDataURL={dummySrc}
          placeholder="blur"
          width={1920}
          height={1080}
          alt="Fallback preview"
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-300 ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto" // 👈 add this
        className={`w-full h-full object-cover z-10 transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={() => {
          console.warn('Video load error');
          setHasError(true);
        }}
        onCanPlayThrough={() => {
          // 👈 more reliable than onLoadedData
          console.log('Video can play through');
          setVideoLoaded(true);
        }}
        onLoadedData={() => {
          console.log('Video loaded');
          setVideoLoaded(true);
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CustomVideo;
