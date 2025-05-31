'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

type SmartImageProps = {
  src: string;
  lowQualitySrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  styleHeight?: string;
};

export default function SmartImage({
  src,
  lowQualitySrc,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  styleHeight
}: SmartImageProps) {
  const [isLoaded, setIsLoaded] = useState(false); 
  const imageStyle = styleHeight ? { height: styleHeight,width:'100%'} : undefined;

  return (
    <div className={cn('relative   ', className)}>
      <Image
        src={src}
        alt="blur-placeholder"
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        style={imageStyle}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        placeholder="blur"
        loading='eager'
        blurDataURL={lowQualitySrc}
        className={cn("object-full    w-full     ", )}
      />

      {/* <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        style={imageStyle}
        className={cn(
          'object-fill transition-opacity duration-700 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'w-full  ',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoadingComplete={() => setIsLoaded(true)}
        priority={priority}
      /> */}
    </div>
  );
}
