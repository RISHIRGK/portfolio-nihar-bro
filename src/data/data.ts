import { PageData } from "@/types/projectData"; 

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
      tabledDetails:[
      {title:'Problem',descriptionData:{
        "text":'Taj Gandhinagar’s website provided essential information but didn’t capture the luxurious atmosphere that defines the hotel experience. The current design lacked the elegance that would engage users and align with Taj’s high-end image. Moreover, the wellness and spa services a unique highlight of the hotel were not emphasized enough, missing an opportunity to showcase a key brand feature. A redesign was needed to create a more inviting, premium feel that fully reflects the Taj Gandhinagar experience.'
        }},
        {title:'Our Goal',descriptionData:{
        "text":'Our goal was to create a user-friendly, luxury design that truly reflects the elegance and value of the Taj brand. We wanted to make the website easy to navigate while ensuring it felt as luxurious as the hotel itself. A key focus was to highlight the wellness and spa services, which are a unique feature of Taj Gandhinagar, making them more prominent and accessible to visitors. The redesign aimed to enhance the overall experience, from browsing to booking.'
        }},
        {title:'Solution',descriptionData:{
        "text":"Our solution was to create a refined, intuitive UI that captures the luxury of the Taj experience. We simplified navigation, allowing users to explore rooms, dining, and amenities with ease, while adding high-quality visuals to bring the ambiance of the hotel to life. Special attention was given to the wellness and spa sections, highlighting them with dedicated visuals and engaging content. The result is a seamless, inviting design that aligns with Taj’s premium brand and enhances user engagement."
        }}
    ],
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
    tabledDetails:[
      {title:'Problem',descriptionData:{
        "text":'Researchers, scientists, and authors often struggle with language barriers and formatting requirements when preparing their manuscripts for publication. Non-native English speakers, in particular, face challenges ensuring their work meets professional standards. Existing platforms are not always intuitive for older professionals with limited time and technological expertise. There is a pressing need for a user-friendly platform that simplifies navigation, streamlines service selection, and ensures seamless interaction with subject-matter expert editors.'
        }},
        {title:'Our Goal',descriptionData:{
        "text":'The goal of Edit Inside was to create a platform tailored to the needs of researchers and authors, focusing on simplicity and efficiency. By providing clear service descriptions, easy navigation, and personalized support, the platform aimed to empower users to submit their work confidently. Features like secure data handling, flexible payment modes, and access to experienced editors were prioritized to build trust and enhance usability.'
        }},
        {title:'Solution',descriptionData:{
        "text":'Edit Inside was designed with a user-centric approach, focusing on the needs of professional researchers and authors. The platform offers easy-to-navigate interfaces, clear package descriptions, and an efficient quotation process. With competitive features like subject-matter expert editors, advanced data security, and diverse service plans (Publish-ready, Scientific, and Premium), the platform ensures a seamless and professional experience for users.'
        }}
    ],
        details: [
    {
     title:'Competitive Analysis',
     descriptionData:{
      'text':"Edit Inside's competitive analysis reveals strengths and gaps by benchmarking against industry leaders Enago and Editage. Both platforms excel in professional editing services and user trust but differ in service personalization, navigation ease, and pricing transparency. Insights from their strengths and weaknesses informed Edit Inside's user-friendly and streamlined design approach.",
     },supportImages:[
      {
        mainSrc:'/edit-inside/8b741d_42e5ebca7e0d43c68e76ac3fe41c9990~mv2.png',
        dummySrc:'/edit-inside/8b741d_42e5ebca7e0d43c68e76ac3fe41c9990~mv2b.png',
        className:'w-full  ',
        alt:'Competitive Analysis Image 1',
      }
     ]
     
  },{
    title:'Wireframes',
    descriptionData:{
      'text':'For Edit Inside, the wireframes were designed to ensure a simple, intuitive experience. They focus on clear navigation, quick access to service packages, a seamless quotation process, and transparent editor profiles, addressing user needs effectively.'},
      supportImages:[
      {
        mainSrc:'/edit-inside/8b741d_e85efcfb618e44279e7283fb4f09d2a0~mv2.jpg',
        dummySrc:'/edit-inside/8b741d_e85efcfb618e44279e7283fb4f09d2a0~mv2b.jpg',
        className:'w-full  ',
        alt:'Wireframe Image',
      } 
     ]
  },
  {
    title:'User Flow',
    subText:'Edit Inside User Flow',
    descriptionData:{
      text:'The user flow for Edit Inside prioritizes simplicity and clarity. Users start by selecting a service (Publish-ready, Scientific, or Premium) from a clearly displayed menu. After entering manuscript details, they receive a tailored quotation. Next, they are guided to review editor profiles, ensuring transparency. Payment and submission steps are streamlined, with clear instructions and secure data handling. The final step allows users to track their order status, ensuring a smooth and transparent process.'
  },
   supportImages:[
      {
        mainSrc:'/edit-inside/8b741d_2fb02a14a4674a26a071c716899d9845~mv2.png',
        dummySrc:'/edit-inside/8b741d_2fb02a14a4674a26a071c716899d9845~mv2b.png',
        className:'w-full  ',
        alt:'User Flow Image',
      }]
  },
  {
    title:'User Interview Findings',
    subText:'Interview with guests',
    descriptionData:{
      'text':'Through user interviews, we gained valuable insights that shaped the design of Edit Inside. Here are the key findings:',
      "list":["Time Constraints: Most users, especially researchers and authors, are short on time and prefer a platform that minimizes the steps required to get a quotation or service.",
"Clarity in Services: Clear descriptions of service packages and pricing are essential. Ambiguity often discourages users from proceeding further.",
"Editor Transparency: Users highly value knowing the qualifications and expertise of the editors handling their manuscripts.",
"Ease of Navigation: An intuitive and simple interface is critical, as many target users are not very tech-savvy and prefer straightforward navigation.",
"Data Security: Authors and researchers emphasized the importance of secure handling of their manuscripts, considering the sensitive nature of their content.",
"Trust in Expertise: Non-native English-speaking users prefer platforms that assure native, field-experienced editors for high-quality editing.",
"Simplified Payment Options: Flexibility in payment methods, including international options, adds convenience and trust for global users."
,
"Personalization: Users appreciate being able to select specific editors or services tailored to their unique requirements."],
      'text2':'These findings reinforced the need to create a user-friendly, transparent, and secure platform that resonates with the specific needs of researchers and authors.',
   
    },
       supportImages:[
      {
        mainSrc:'/edit-inside/8b741d_427618a235cc4ec9bf6b4d30164adab1~mv2.png',
        dummySrc:'/edit-inside/8b741d_427618a235cc4ec9bf6b4d30164adab1~mv2b.png',
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
        mainSrc:'/edit-inside/8b741d_8e0a0369af4f4183b5db123c88da29ef~mv2.jpg',
        dummySrc:'/edit-inside/8b741d_8e0a0369af4f4183b5db123c88da29ef~mv2b.jpg',
        className:'w-full  ',
        alt:'User Interview Findings Image',
      },
      {
        mainSrc:'/edit-inside/8b741d_33cf39b9abac4893a936e428e12b02a8~mv2.jpg',
        dummySrc:'/edit-inside/8b741d_33cf39b9abac4893a936e428e12b02a8~mv2b.jpg',
        className:'w-full  ',
        alt:'User Interview Findings Image',
      }
    ]
  }

]
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
     tabledDetails:[
      {title:'Problem',descriptionData:{
        "text":'They were looking for an Enterprise Resource Planning (ERP) system for their organization. While they were using the Odoo platform for resource planning, it operated independently and didn’t fully meet their specific needs. That’s why they wanted to create their own system, which would provide a smoother transition and better align with their unique work processes.'
        }},
        {title:'Our Goal',descriptionData:{
        "text":'Our goal was to design a system that allows for smooth interactions tailored to the unique processes at Poonam Coatings. We aimed to create a solution that truly reflects their needs and desires, using the data they provided to enhance how they work. By focusing on delivering an intuitive and user-friendly system, we want to ensure they have the best experience possible, supporting their business goals and helping them grow.'
        }},
        {title:'Solution',descriptionData:{
        "text":"Our solution started with in-depth research into Poonam Coatings' specific needs, allowing us to understand how they operate. We looked at their processes to identify what would help them achieve a smooth transition. Drawing inspiration from their existing Odoo platform, we examined what worked well and what extra features they might need. By combining this insight, we aimed to create a user-friendly interface that aligns perfectly with their unique requirements and improves their workflow."
        }}
    ],
         details: [
    {
     title:'Competitive Analysis',
     descriptionData:{
      'text':"We conducted a competitive analysis with two key ERP platforms, Odoo and TranZact, to gain insights into their workflows and identify ideas we could adapt. By closely examining these systems, we learned how they handle inventory, manage roles, and streamline day-to-day operations, allowing us to see what worked effectively and where they could improve. This helped our team spot practical features and best practices to integrate, tailoring them specifically for Poonam Coating’s needs. The analysis was essential in guiding us to design a more intuitive and efficient ERP solution that aligned closely with the client’s workflow.",
     },supportImages:[
      {
        mainSrc:'/erp-poonam-coatings/8b741d_e06ec3d885994a159cf8260559a3ba4f~mv2.jpg',
        dummySrc:'/erp-poonam-coatings/8b741d_e06ec3d885994a159cf8260559a3ba4f~mv2b.jpg',
        className:'w-full  ',
        alt:'Competitive Analysis Image 1',
      }
     ]
     
  },{
    title:'Wireframes',
    descriptionData:{
      'text':'Here’s the low-fidelity Wireframe for the Poonam Coating ERP system. This initial layout was designed to simplify task flows, inventory tracking, and reporting, focusing on a clean, easy-to-navigate structure. Created based on early stakeholder feedback, this prototype helped us refine the system to better fit their everyday needs.'},
      supportImages:[
      {
        mainSrc:'/erp-poonam-coatings/8b741d_6f7b0a3eeed04565beab0619679d1a12~mv2.jpg',
        dummySrc:'/erp-poonam-coatings/8b741d_6f7b0a3eeed04565beab0619679d1a12~mv2b.jpg',
        className:'w-full  ',
        alt:'Wireframe Image',
      } 
     ]
  },  {
    title:'User Interview',
    subText:'Interview with CEO and Managers',
    descriptionData:{
      'text':'For the Poonam Coating ERP Project, our team conducted interviews with the CEO and managers to get a clear picture of their needs. We showed them initial wireframes, and their honest feedback helped us refine the system. Here’s what we gathered as a team:',
      "list":["Smoother Task Flows: They wanted a seamless task flow, minimizing steps and ensuring smooth handoffs between team members.",
"Quick Data Snapshots: Real-time dashboards were a must-have, allowing them to monitor essential metrics at a glance without digging through layers.",
"Customizable User Access: Each role had different requirements, so they asked for role-specific access to simplify views and keep data secure.",
"Proactive Inventory Alerts: Real-time updates and low-stock notifications were vital to prevent production delays.",
"Intuitive Interface: They preferred a clean, user-friendly interface that would be easy for everyone to use, regardless of tech skill level.",
"One-click Reporting: Quick access to performance reports was essential to keep managers informed and help them respond faster to any issues.",
"Handy Shortcuts and Tools: Personalized support tools and shortcuts would help each user access relevant features faster, reducing repetitive manual work."],
      'text2':'With these insights, our team reworked the design, prioritizing simplicity and functionality to ensure the ERP system felt intuitive and truly beneficial to their daily workflows.',
   
    },
        

  },
  {
    title:'User Flow',
    subText:'ERP Poonam Coatings User Flow',
    descriptionData:{
      text:'The ERP begins with a Dashboard Overview displaying essential metrics and quick links. Through Product and Inventory Management, users easily view, update, and track stock levels. Sales and Purchase Orders make order handling seamless, with real-time updates. Reports and Insights offer valuable, customizable data for smarter decisions, while Settings and Customization let users personalize the system to match their workflow.'
  },
    supportImages:[
          {
        mainSrc:'/erp-poonam-coatings/8b741d_dd357f969c3749ce8355aa792abc9a06~mv2.jpg',
        dummySrc:'/erp-poonam-coatings/8b741d_dd357f969c3749ce8355aa792abc9a06~mv2b.jpg',
        className:'w-full  ',
        alt:'User Interview Findings Image',
      },
      
    ]
    
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
        mainSrc:'/erp-poonam-coatings/8b741d_f03050cf3c034449b23be3462da7f0f3~mv2.jpg',
        dummySrc:'/erp-poonam-coatings/8b741d_f03050cf3c034449b23be3462da7f0f3~mv2b.jpg',
        className:'w-full  ',
        alt:'User Interview Findings Image',
      },
      {
            mainSrc: '/erp-poonam-coatings/erp-poonam-coatings-main.avif',
      dummySrc: '/erp-poonam-coatings/erp-poonam-coatings-main-dummy.jpg',
        className:'w-full  ',
        alt:'User Interview Findings Image',
      }
    ]
  }

]
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