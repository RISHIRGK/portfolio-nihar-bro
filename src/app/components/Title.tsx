
const Title =({title,subText,subTextUrl,subTextUrlText}:{title:string,subText?:string,subTextUrlText?:string,subTextUrl?:string})=>{
    return (
        <div className="flex flex-col gap-4  ">
            <div className="flex flex-col gap-2  ">
            <span className='text-3xl' style={{ fontFamily: 'Caudex, serif' }} >{title}</span>
            <span className="w-10 h-[3px] bg-black"></span>
        </div>
            {subText && (
                <span className="text-lg sm:w-[60%]  text-black/80" style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>
                    {subText}
                </span>
            )}
               {subTextUrl &&   (
              <a
  href={subTextUrl} 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-[44px] py-[8px] w-fit text-black/80   font-light bg-white/30 border-[var(--logo-text)] hover:text-white hover:bg-black/85 transition-colors duration-350 ease-in border-[1px]" 
  style={{ fontFamily: 'AvenirLTW01-Light, sans-serif' }}>{subTextUrlText}</a>
            )}
        </div>
    );
    }
export default Title;