import React from 'react'
export async function generateMetadata() {
return {
  title: 'About Me | Nihar Kapadiya',
  description: 'Learn more about Nihar Kapadiya, a passionate UX Designer based in Ahmedabad, India. Explore my journey, skills, and design philosophy.',
    openGraph: {
        title: 'About Me | Nihar Kapadiya',
        description: 'Learn more about Nihar Kapadiya, a passionate UX Designer based in Ahmedabad, India. Explore my journey, skills, and design philosophy.',
        images: [
        {
            url: '/hero-image.avif ',  
            alt: 'About Me Hero Image',
        },
        ],
        keywords: 'UX Designer, Nihar Kapadiya, About Me, Design Philosophy, Ahmedabad, India, Portfolio, User Experience, UI Design, Visual Design, Interaction Design',
        type: 'website',
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/about-me`,
        siteName: 'Nihar Kapadiya Portfolio',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Me | Nihar Kapadiya',
        description: 'Learn more about Nihar Kapadiya, a passionate UX Designer based in Ahmedabad, India. Explore my journey, skills, and design philosophy.',
        images: ['/hero-image.avif'],
    },
    keywords: 'Nihar Kapadiya, UX Designer, Portfolio, Ahmedabad, India, UI Design, Visual Design, Interaction Design, User Experience, Web Design, Mobile App Design, Case Study, Design Process, Prototyping, Wireframing, Responsive Design, Design Thinking, User Research, Usability Testing, Creative Design, Digital Design, Frontend Development, Figma, Adobe XD, Sketch',
    metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://nihar-portfolio.vercel.app'),
    authors: [{ name: 'Nihar Kapadiya', url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}` }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/about-me`,
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
    verification: {
        google: 'google-site-verification-code',
        yandex: 'yandex-verification-code',
    },
    themeColor: '#ffffff',
    manifest: '/manifest.json',
    // appleWebApp: {
    //     capable: true,
    //     title: 'Nihar Kapadiya Portfolio',
    //     statusBarStyle: 'default',
    //     startupImage: '/apple-touch-startup-image.png',
    // },
     
    // viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    // formatDetection: {
    //     telephone: false, // Disable automatic detection of phone numbers
    // },  
    // twitterCard: 'summary_large_image',
    // twitterSite: '@nihar_kapadiya',
    // twitterCreator: '@nihar_kapadiya',
    // twitterImage: '/hero-image.avif',
    // applicationName: 'Nihar Kapadiya Portfolio',
    // colorScheme: 'light dark', 
    

}
}
const layout =async  ({children}:{children:React.ReactNode}) => {
  return ({children})
}

export default layout