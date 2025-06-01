import CustomVideo from '@/app/components/CustomVideo';
import DetailsDiv from '@/app/components/DetailsDiv';
import Header from '@/app/components/Projectcomponents/header';
import SmartImage from '@/app/components/SmartImage';
import TabledDetailsDiv from '@/app/components/TabledDetailsDiv';
import Title from '@/app/components/Title';
import { projectData } from '@/data/data';
import React from 'react'
 
export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>
}) {
  const { project } = await params 
const data= projectData[project] || projectData['balan-dosa'];
  const { header, heroImage, gridRightImage,tabledDetails } = data;   
  return (
    <div className=" animate-view-in flex flex-col w-full mb-40 px-6 sm:px-12 py-5   sm:py-16 ">
        <Header data={header} />
        <SmartImage
            src={data.heroImage.mainSrc  }
            lowQualitySrc={ data.heroImage.dummySrc }
            alt='Balan Dosa'
            width={1920}
            height={1080}
            className='w-full   my-10  '
            styleHeight={data.heroImage.styleHeight ??undefined} // Use custom height if provided

            priority={true}
        />
{ data.tabledDetails && <div className="flex flex-col gap-4 mb-10 px-4 sm:px-22 bg-white  divide-y-1 divide-y-black/85"> 
        {data.tabledDetails.map((item:any, index:number) => (
    <TabledDetailsDiv key={index} title={item.title} subTextUrl={item?.subTextUrl} subTextUrlText={item?.subTextUrlText} subText={item.subText} descriptionData={item.descriptionData} supportImages={item.supportImages} />
     
        ))} 
    </div>}
 {data.details && data.details.map((item:any, index:number) => (
        <DetailsDiv key={index} title={item.title} subTextUrl={item?.subTextUrl} subTextUrlText={item?.subTextUrlText} subText={item.subText} descriptionData={item.descriptionData} supportImages={item.supportImages} />
      ))}
   <div  style={{ fontFamily: 'Caudex, serif' }} className=" px-6 sm:px-20 py-5   sm:py-16 flex flex-col items-center justify-center gap-4 ">
     <div className="   flex flex-col items-center justify-center text-center pb-4 text-[30px] sm:w-[88%] font-[400] text-black">
      <span>{data.myOpinion}</span>
    </div>
 
   </div>
        { data.videoSrc && <CustomVideo  src={data.videoSrc?.src} mainSrc={data?.videoSrc?.mainSrc} dummySrc={data.videoSrc?.dummySrc} />}
         <div className="  grid  sm:grid-cols-12 gap-12 lg:gap-24 sm:py-16 box-border h-fit  ">
 
  <div className="  sm:flex sm:col-span-6  flex-col gap-32">
    <div className="flex flex-col gap-4 ">
    <Title title={'Color Pallets'} />
    {/* <div className="grid  grid-cols-2 w-full border-[2px] border-black/50 rounded-lg p-4 shadow-normal gap-3  ">
         <SmartImage
            src={'/balan/balan-yellow.avif'}
            lowQualitySrc={'/balan/balan-yellow-dummy.png'}
            alt='Balan Dosa'
            width={1920}
            height={1080}
            className='w-full    '
            priority={true}
        /> <SmartImage
            src={'/balan/balan-green.avif'}
            lowQualitySrc={'/balan/balan-green-dummy.png'}
            alt='Balan Dosa'
            width={1920}
            height={1080}
            className='w-full  '
            priority={true}
        />
    </div> */}

    </div>
      <div className="flex flex-col gap-4 ">
    <Title title={'View Prototype'} />
    <a 
  href="/nihar-portfolio.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-[44px] py-[8px] w-fit text-black/80   font-light bg-white/30 border-[var(--logo-text)] hover:text-white hover:bg-black/85 transition-colors duration-350 ease-in border-[1px]" 
  style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}
>
  View Design
</a>
  <span className=' font-light'   style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}> <span className='font-bold'>*Note -</span> Press Z to adjust the design to fit your device."</span>

    </div>
  </div>
  <div className=" sm:flex sm:col-span-6  flex-col gap-32">
    {  data.gridRightImage && <SmartImage
            src={data.gridRightImage.mainSrc}
            lowQualitySrc={data.gridRightImage.dummySrc}
            // lowQualitySrc={'/balan/Balan-Dosa-dummy.avif'}
            alt='Balan Dosa'
            width={900}
            height={2080}
            // styleHeight='2080px'
            className='w-full    '
            priority={true}
        />}
  </div>

  
  </div>
    </div>
  )
}

