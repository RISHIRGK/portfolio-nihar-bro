import React from 'react'
import Title from './Title'
import SmartImage from './SmartImage';

const DetailsDiv = ({title,subText,descriptionData,supportImages    ,subTextUrl,subTextUrlText }:any) => {
  return (
    <div className="animate-view-in flex flex-col w-full     py-5 sm:py-8">
<div className="relative grid grid-cols-12 sm:px-10 my-10 gap-4">
    <div className="col-span-12 sm:col-span-6 flex flex-col gap-4">
   <Title title={title} subText={subText} subTextUrl={subTextUrl} subTextUrlText={subTextUrlText} />
    </div>
<div className="col-span-12 sm:col-span-6 flex flex-col gap-2">
  {Object.keys(descriptionData).map((item: any, index: number) => {
    const value = descriptionData[item];

    return Array.isArray(value) ? (
      <ul key={index} className="list-disc list-inside text-[18px] leading-relaxed text-black/80" style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>
        {value.map((liItem: string | number, liIndex: number) => (
          <li key={liIndex}>{liItem}</li>
        ))}
      </ul>
    ) : (
      <p key={index} className="text-[18px] leading-relaxed text-black/80" style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>
        {value}
      </p>
    );
  })}
</div>
    </div>
    <div className="flex flex-col gap-4 mt-2 sm:mt-10 ">

  {  supportImages?.length > 0 && ( supportImages?.map((data:any,index:any)=>{
      return <SmartImage key={index} width={1080} height={1920} src={data.mainSrc} lowQualitySrc={data.dummySrc} alt={data.alt} className={data.className} />
    })
)}
</div>
</div>
  )
}

export default DetailsDiv