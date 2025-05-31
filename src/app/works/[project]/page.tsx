import Header from '@/app/components/Projectcomponents/header';
import SmartImage from '@/app/components/SmartImage';
import React from 'react'

interface subHeaderDetail{
    title: string;
    value: string;
}
export interface header{
    title: string;
    subHeaderDetails:subHeaderDetail[];
    description: string;
}
interface Images{
    mainSrc: string;
    dummySrc: string;
    styleHeight?: string; // Optional property for custom height
}
interface PageData{
    header: header;
    heroImage: Images;
    gridRightImage?: Images;
}
const projectData: Record<string, PageData> = {
  'balan-dosa': {
    header: {
      title: 'Balan Dosa',
      subHeaderDetails: [
        { title: 'Project Type', value: 'Landing Page' },
        { title: 'Timeline', value: '3 Day' },
        { title: 'Tasks', value: 'UI Design, Visual Design, Animated Design, Interaction Design' },
      ],
      description:
        'Bhavan Dosa was redesigned to feel more welcoming and alive, capturing the warmth of South Indian culture. I wanted to create a space that reflects the vibrant energy of the food and the people, showcasing their delicious dishes in an engaging way. The new design invites customers to explore the menu while celebrating the rich traditions behind each meal. It’s all about making the experience enjoyable and memorable, so diners feel a true connection to the restaurant and its offerings.',
    },
    heroImage: {
      mainSrc: '/balan/main-hero.avif',
      dummySrc: '/balan/main-hero-dummy.avif',
    },
    gridRightImage: {
      mainSrc: '/balan/Balan-Dosa.avif',
        dummySrc: '/balan/Balan-Dosa-dummy.avif',
    },
  },
'midnight-pulse':{
    header: {
      title: 'Midnight Pulse',
      subHeaderDetails: [
        { title: 'Project Type', value: 'Landing Page' },
        { title: 'Timeline', value: '1 Day' },
        { title: 'Tasks', value: 'UI Design, Visual Design, Black Theme UI Design, Interaction Design' },
      ],
      description:
        'For Midnight Pulse, a high-energy nightclub based in Las Vegas, I created a dark, edgy website that captures the thrill of the club scene. The black and grey color scheme gives it a sleek, modern feel, with a layout that guides visitors smoothly through events, table bookings, and exclusive shows. Each detail is crafted to reflect the club’s unique vibe, making the site feel like an extension of the Midnight Pulse experience. This project let me dive into combining style with usability, giving visitors a true sense of the club’s atmosphere from the moment they land on the page.',
    },
    heroImage: {
      mainSrc: '/midnight-pulse/midnight-pulse-main.avif',
      dummySrc: '/midnight-pulse/midnight-pulse-main-dummy.avif',
        // styleHeight: '1040px', // Custom height for the hero image
    },
    gridRightImage: {
      mainSrc: '/midnight-pulse/midnight-pulse-1.avif',
      dummySrc: '/midnight-pulse/midnight-pulse-1-dummy.avif',
    },
  },
  'immersi-fit':{
    header: {
      title: 'ImmersiFit VR Design',
      subHeaderDetails: [
        { title: 'Project Type', value: 'VR Application Design' },
        { title: 'Timeline', value: '7 Day' },
        { title: 'Tasks', value: 'VR UI Design, Visual Design, Interaction Design, Virtual Reality,Vision OS' },
      ],
      description:
        'ImmersiFit is my latest design for a VR headset that transforms the workout experience. I focused on creating a platform that offers a diverse range of workouts, targeting muscle groups, cardio, and flexibility, with options for users to customize intensity and duration. Whether someone is just beginning their fitness journey or looking to enhance their routine, ImmersiFit caters to all fitness levels. The application not only tracks progress, providing valuable insights, but also immerses users in engaging environments with motivating instructors. My goal was to make home workouts enjoyable and personalized, making fitness accessible and exciting for everyone.',
    },
    heroImage: {
      mainSrc: '/immersi-fit/hero-vr.avif',
      dummySrc: '/immersi-fit/hero-vr-dummy.jpg',
    },
 
  },
  'taj':{
    header: {
      title: 'Taj Gandhinagar',
      subHeaderDetails: [
        { title: 'Project Type', value: 'Responsive Website Design' },
        { title: 'Timeline', value: '3 Weeks' },
        { title: 'Tasks', value: 'UI Design, Visual Design, Wireframe, Prototyping, Responsive design for mobile and Tablet' },
      ],
      description:
        "Taj Gandhinagar's redesign was centered around elevating its elegance and sophistication. I crafted a design that highlights the hotel's luxury, using a rich color palette and clean typography to reflect its premium feel. The new layout enhances the browsing experience, making it more user-friendly and visually appealing. This redesign brings a fresh, upscale touch while staying true to the Taj brand’s essence.",
    },
    heroImage: {
      mainSrc: '/taj/taj-main.avif',
      dummySrc: '/taj/taj-main-dummy.jpg',
    },
  },
  "edit-inside":{
    header: {
      title: 'Edit Inside',
      subHeaderDetails: [
        { title: 'Project Type', value: 'Responsive Website Design' },
        { title: 'Timeline', value: '2 Months' },
        { title: 'Tasks', value: 'User Interface Design, User Experience design, Visual Design, Responsive Design for mobile and tablet' },
      ],
      description:
        "Edit Inside offers professional English editing, proofreading, and publication support services tailored to researchers, scientists, and authors. This website provides customized editing plans, including Publish-ready Services, Scientific Services, and Premium Services. Additionally, it offers plagiarism checks and extensive re-editing support, making these services ideal for authors aiming to publish in prestigious journals.",
    },
    heroImage: {
      mainSrc: '/edit-inside/edit-inside.avif',
      dummySrc: '/edit-inside/edit-inside-dummy.jpg',
    },
  },
  'erp-poonam-coatings':{
    header: {
      title: 'ERP Poonam Coatings',
      subHeaderDetails: [
        { title: 'Project Type', value: 'Enterprice Resourse Planning(ERP)' },
        { title: 'Timeline', value: "Feb'24 to July'24" },
        { title: 'Tasks', value: 'Product Design, UX Research, UI/UX Design, Visual Design, Prototyping' },
      ],
      description:
        "Poonam Coatings, a coating and paint solutions company for industries, seeks to implement a comprehensive resource planning portal to efficiently manage its products, streamline operations, and facilitate a smooth transition within the organization. They want an Enterprise Resource Planning (ERP) system for their organization that stores data on products, buyers, suppliers, sales and purchases, calendar management, payment management, and more.",
    },
    heroImage: {
      mainSrc: '/erp-poonam-coatings/erp-poonam-coatings-main.avif',
      dummySrc: '/erp-poonam-coatings/erp-poonam-coatings-main-dummy.jpg',
    },
  },
  'waveflow-parallax-ui':{
    header: {
      title: 'Waveflow Parallax UI',
      subHeaderDetails: [
        { title: 'Project Type', value: 'Parallax Design' },
        { title: 'Timeline', value: '1 Day' },
        { title: 'Tasks', value: 'Parallax UI Website, Interactive Design, UI Design' },
      ],
      description:
        "WaveFlow is a premium surfing lifestyle brand that focuses on eco-friendly surfboards, stylish apparel, and performance-driven accessories. For this project, I designed a parallax UI to create an immersive digital experience that reflects the brand’s vibrant and adventurous spirit. The design features smooth scrolling effects and interactive elements that capture the essence of surfing—the freedom, flow, and energy of the waves. By blending striking visuals with a seamless user experience, I aimed to showcase WaveFlow’s high-end appeal while staying true to its eco-conscious and performance-driven ethos.",
    },
    heroImage: {
      mainSrc: '/waveflow-parallax-ui/waveflow-parallax-ui.avif',
      dummySrc: '/waveflow-parallax-ui/waveflow-parallax-ui-dummy.jpg',
    },}
}
export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>
}) {
  const { project } = await params 
const data= projectData[project] || projectData['balan-dosa'];
  const { header, heroImage, gridRightImage } = data;   
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


const Title =({title}:{title:string})=>{
    return (
            <div className="flex flex-col gap-2  ">
            <span className='text-3xl' style={{ fontFamily: 'Caudex, serif' }} >{title}</span>
            <span className="w-10 h-[2px] bg-black"></span>
        </div>
    );
    }