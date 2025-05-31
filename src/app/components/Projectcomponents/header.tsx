import { header } from "@/app/works/[project]/page";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const Header= ({data}:{data:header}) => {
    
    return (
        <div className="flex flex-col sm:flex-row   gap-8  sm:justify-between w-full   ">
       <div className=' flex flex-col flex-1 gap-4'  style={{ fontFamily: 'Caudex, serif' }} >
                   <h1 className=" z-10 text-4xl  whitespace-nowrap  sm:text-5xl font-[500]    sm:block    " style={{ fontFamily: 'Caudex, serif' }}>{data.title}</h1>

{data.subHeaderDetails && data.subHeaderDetails.map((item: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; value: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
            <div key={index} className="flex flex-col gap-1">
                <span className=' text-lg '>{item.title}</span>
                <span style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }} className='font-light'>{item.value}</span>
            </div>
        ))}
        {/* <div className="flex flex-col gap-1">
            <span className=' text-lg '>Project Type</span>
            <span  style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }} className='font-light'>Landing Page</span>
        </div>
                <div className="flex flex-col gap-1">
            <span className=' text-lg '>Timeline</span>
            <span  style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }} className=' font-light '>3 Day</span>
        </div>
           <div className="flex flex-col gap-1">
            <span className=' text-lg '>Tasks</span>
            <span  style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }} className='font-light'>UI Design, Visual Design, Animated Design, Interaction Design
</span>
        </div> */}
       </div>
       <div className=' flex-1  max-w-[540px]'>
        <span     style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}
        className=" text-lg font-[400] text-black/80     ">
{data.description}</span>
       </div>
        
        </div>
    )
    }
    export default Header;