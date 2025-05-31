
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
}
export interface PageData{
    header: header;
    heroImage: Images;
    gridRightImage?: Images;
}