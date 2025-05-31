import { projectData } from '@/data/data';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata({
  params,
}: {
  params: { project: string };
}): Promise<Metadata> {
  const data = projectData[params.project];

  if (!data) {
    return {
      title: 'Project Not Found',
      description: 'This project does not exist.',
    };
  }

  return {
    title: `${data.header.title} | Nihar Kapadiya  `,
    description: data.header.description.slice(0, 150), // 150 char meta description
    openGraph: {
      title: data.header.title,
      description: data.header.description,
      images: [
        {
          url: data.heroImage.mainSrc,
          alt: data.header.title,
        },
      ],
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/works/${params.project}`,
      siteName: 'Nihar Kapadiya Portfolio',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.header.title,
      description: data.header.description,
      images: [data.heroImage.mainSrc],
    },
 keywords:' Nihar Kapadiya, nihar kapadiya,UX Designer, Portfolio, ahmedabad, India, UI Design, Visual Design, Interaction Design, User Experience, Web Design, Mobile App Design, Case Study, Design Process, Prototyping, Wireframing, Responsive Design, Design Thinking, User Research, Usability Testing, Creative Design, Digital Design, Frontend Development, Figma, Adobe XD, Sketch, UI/UX Trends, Design Inspiration',
    metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://nihar-portfolio.vercel.app'),
   
    authors: [{ name: 'Nihar Kapadiya', url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}` }],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/works/${params.project}`,
    },
    // verification: {
    //   google: 'google-site-verification-code',
    //   yandex: 'yandex-verification-code',
    // },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/logo.png',
      apple: '/logo.png',
    },
    themeColor: '#ffffff',
    applicationName: 'Nihar Kapadiya Portfolio',
    formatDetection: {
      telephone: false,
    },
    colorScheme: 'light dark',
    creator: 'Nihar Kapadiya',
    publisher: 'Kadam Rushigana',
    category: 'Design',
  };
}
const layout = async  ({children}:{  children:React.ReactNode}) => {

  return (
    <div>{children}</div>
  )
}

export default layout