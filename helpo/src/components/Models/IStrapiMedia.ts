export interface IStrapiMedia {
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    mime: string;
    url: string;
    formats?: StrapiMediaFormats;
    createdAt: Date;
    updatedAt: Date;   
}

interface StrapiMediaFormats {
    thumbnail: IStrapiMedia;
}