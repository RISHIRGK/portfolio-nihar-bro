const BackgroundVideo = ({src,opacity=true}:{src:string,opacity?:boolean}) => {
  return (
    <div className="absolute  h-full w-full -z-10 ">
      <video autoPlay muted loop playsInline className={`w-full h-full object-cover ${opacity && 'opacity-38'}  `}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
 
export default BackgroundVideo;