import { PageData } from "@/types/projectData";
import { main } from "motion/react-client";

export const projectData: Record<string, PageData> = {
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
      details: [
    {
     title:'Competitive Analysis',
     descriptionData:{
      'text':'To see how similar luxury and wellness websites present their services, exploring ways to enhance the Taj Gandhinagar site with a refined user experience. By studying top hospitality brands, we aim to elevate Taj’s online presence, focusing on usability, elegance, and the special wellness experience that sets Taj apart.',
     },supportImages:[
      {
        mainSrc:'/taj/8b741d_2d20039193254030ab10d4bc3f56bd4f~mv2.avif',
        dummySrc:'/taj/8b741d_2d20039193254030ab10d4bc3f56bd4f~mv2.png',
        className:'w-full  ',
        alt:'Competitive Analysis Image 1',
      }
     ]
     
  },{
    title:'Wireframes',
    descriptionData:{
      'text':'In my wireframe for Taj Gandhinagar’s wellness and spa section, I focused on creating a smooth and inviting experience that reflects Taj’s luxury and warmth. I structured the layout to guide users effortlessly through the wellness offerings, with clear sections for treatments, spa details, and wellness packages. High-quality imagery is prioritized to capture the ambiance, while straightforward calls-to-action make booking easy. This design brings the serene, indulgent experience of Taj’s wellness services right to the forefront, allowing guests to feel connected before they even step inside.'},
      supportImages:[
      {
        mainSrc:'/taj/8b741d_80548a4af0d24f0993be6fad3022bcaa~mv2.avif',
        dummySrc:'/taj/8b741d_80548a4af0d24f0993be6fad3022bcaa~mv2.jpg',
        className:'w-full  ',
        alt:'Wireframe Image',
      } 
     ]
  },
  {
    title:'User Flow',
    subText:'Taj Gandhinagar website User flow',
    descriptionData:{
      text:'The user flow for Taj Gandhinagar’s wellness and spa website is designed to offer a seamless, intuitive experience. Visitors start at the homepage, where they can easily navigate to key sections like the "J Wellness Circle" page, which highlights spa and wellness offerings. The “Rooms and Suites” page allows users to explore accommodation options, while the “Packages for Spa and Wellness” page helps them discover tailored treatments. Other essential hotel pages are also accessible, ensuring users can smoothly explore all services and make bookings effortlessly.'
  },
   supportImages:[
      {
        mainSrc:'/taj/8b741d_ffb2f16b05864de58df0a79409f109fc~mv2.avif',
        dummySrc:'/taj/8b741d_ffb2f16b05864de58df0a79409f109fc~mv2.png',
        className:'w-full  ',
        alt:'User Flow Image',
      }]
  },
  {
    title:'User Interview Findings',
    subText:'Interview with guests',
    descriptionData:{
      'text':'The user interview findings for the Taj Gandhinagar wellness and spa website reveal key insights into how visitors interact with the wireframe, highlighting areas of strength and potential improvements for an enhanced user experience.',
      "list":["Users found the overall navigation easy and intuitive, with clear sections for wellness, spa, and accommodations.",
"The homepage successfully captured attention, with users appreciating its clean design and luxury feel.",
"The 'J Wellness Circle' page effectively conveyed the wellness services, though some users suggested more visual emphasis on specific treatments.",
"Users felt that the transition between room information and wellness options could be smoother to maintain engagement.",
"The booking process was simple, but users requested more clarity in combining wellness packages with room bookings.",
"Users felt the design effectively represented Taj Gandhinagar’s luxury and exclusivity, though some wanted a more emotional connection to the wellness offerings.",
"High-quality images and an elegant layout were well-received, though some users wanted more personalized visuals related to wellness.",
"The “Book Now” buttons were visible but could be made more prominent, especially on wellness-related pages.",
"Users expressed interest in seeing customer reviews or stories to better connect with the brand’s wellness experience."],
      'text2':'These findings provide valuable direction for refining the design, ensuring that it not only meets user expectations but also elevates the luxury experience that Taj is known for.',
   
    },
       supportImages:[
      {
        mainSrc:'/taj/8b741d_0d1de9d0600d440996528335c6f9c81b~mv2.avif',
        dummySrc:'/taj/8b741d_0d1de9d0600d440996528335c6f9c81b~mv2.png',
        className:'w-full  ',
        alt:'User Interview Findings Image',
      }]

  },
  {title:'Typography',
    subText:'We handcrafted each and every component of the system to make a full-featured design system to ensure scalability, flaxibility, and consistency of the platform.',
    descriptionData:{
      'text':'The typography for the Taj Gandhinagar website is carefully selected to reflect the luxury and elegance of the brand. The primary font, AvenirLTW01-Light, is used for body text, ensuring readability and a modern feel. For headings, Caudex is employed to add a touch of sophistication and tradition, aligning with the hotel’s heritage. This combination creates a harmonious balance between contemporary design and classic luxury, enhancing the overall user experience.'
    },
  },
  {
    title:'Color Pallets',
    descriptionData:{
  }}
  ,
  {
    title:'High Fidelity Mockup',
    subTextUrl:'/',
    subTextUrlText:'View Design',
    descriptionData:{
      'text':'My high-fidelity designs focus on creating smooth, intuitive user experiences that feel natural and engaging. Each design pays attention to details like typography, color, and layout to ensure a cohesive look that aligns with the brand. Explore designs that prioritize functionality and keep users at the center.'
    },
     supportImages:[
          {
        mainSrc:'/taj/8b741d_fc7dd8829c1b44d7bb3e7300afcb1eda~mv2.avif',
        dummySrc:'/taj/8b741d_ffb2f16b05864de58df0a79409f109fc~mv2.avif',
        className:'w-full  ',
        alt:'User Interview Findings Image',
      },
      {
        mainSrc:'/taj/8b741d_30dd45e866c54b41b290c528ca3d9dcb~mv2.avif',
        dummySrc:'/taj/8b741d_30dd45e866c54b41b290c528ca3d9dcb~mv2.jpg',
        className:'w-full  ',
        alt:'User Interview Findings Image',
      }
    ]
  }

]
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
    },
  videoSrc:{src:'/waveflow-parallax-ui/Waveflow_Parallax_UI.mp4',mainSrc:'/waveflow-parallax-ui/8b741d_c3b83f2febd3421faf4c019dbb08bdbff000.avif',dummySrc:'/waveflow-parallax-ui/8b741d_c3b83f2febd3421faf4c019dbb08bdbff000.jpg'},
  myOpinion:'My goal for this project was to develop my skills in parallax and animated UI design while gaining hands-on experience and a deeper understanding of creating dynamic, engaging interfaces.',

}}