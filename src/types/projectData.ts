
export interface subHeaderDetail{
    title: string;
    value: string;
}
export interface header{
    title: string;
    subHeaderDetails:subHeaderDetail[];
    description: string;
}
export interface Images{
    mainSrc: string;
    dummySrc: string;
    styleHeight?: string; // Optional property for custom height
    alt?: string; // Optional property for image alt text
    className?: string; // Optional property for custom class names
}
export interface videoSrc{
    src:string;mainSrc?:string;dummySrc?:string
}
export interface PageData{
    header: header;
    heroImage: Images;
    gridRightImage?: Images;
    myOpinion?: string; // Optional property for personal opinion
    videoSrc?: videoSrc; // Optional property for video source
    tabledDetails?: {
        title: string; 
        descriptionData: any; 
    }[];
    details?: {
        title: string;
        subText?: string;
        subTextUrl?: string;
        subTextUrlText?: string;
        descriptionData: any;
        supportImages?: Images[];
    }[];
}