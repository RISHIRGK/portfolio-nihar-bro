import ProjectContainer from "./ProjectContainer";

const ProjectMainContainer = () => {
  const projects = [
  {
    img: '/vr.avif',
    header: 'ImmersiFit VR Interface',
    desc: 'Vision OS - VR UI Design - Visual Design - Interaction Design',
    
  },
  {
    img: '/poonam-cottage.avif',
    header: 'ERP Poonam Coatings Case Study',
    desc: 'SaaS Dashboard - Product Design - UX Research - UI/UX Design - Visual Design - Prototyping',
    video:'poonam-cootage.mp4'
  },
  {
    img: '/parallelax.avif',
    header: 'Parallax UI Design',
    desc: 'Parallax Design - Animation Design - User Interface Design - Visual Design',
  },
  {
    img: '/taj.avif',
    header: 'Taj Gandhinagar Resort and Spa',
    desc: 'UX Case Study - Luxury Hotel Website - UI Design - Visual Design - Interaction Design - Wireframing - Prototyping - Responsive Web Design',
    video:'taj.mp4'
  },
  {
    img: '/edit-inside.avif',
    header: 'Edit Inside Case Study',
    desc: 'User Experience Design - Responsive Design - UI Design - Visual Design',
    video:"inside.mp4"
  },
  {
    img: '/balan.avif',
    header: 'Balan Dosa',
    desc: 'UI Design - Visual Design - Animated Design -Interaction Design',
    video:'balan.mp4'
  },
  {
    img: '/midnight-pulse.avif',
    header: 'Midnight Pulse',
    desc: 'Dark Theme Landing Page - UI Design - Visual Design - Interaction Design',
  },
];

return(
   <div className=" sm:grid sm:grid-cols-12 gap-12 lg:gap-24 sm:py-16 box-border  ">
    <div className=" flex flex-col col-span-12 sm:hidden gap-8 ">
      {projects.map((project, index) => (
        <ProjectContainer key={index} {...project} />
        
      ))}
    </div>
  <div className=" hidden sm:flex sm:col-span-6  flex-col gap-32">
    {projects.slice(0, 3).map((project, index) => (
      <ProjectContainer key={index} {...project} />
    ))}
  </div>
  <div className="col-span-6 hidden sm:flex flex-col gap-32">
    {projects.slice(3).map((project, index) => (
      <ProjectContainer key={index + 3} {...project} />
    ))}
  </div>
</div>

)

}
export default ProjectMainContainer