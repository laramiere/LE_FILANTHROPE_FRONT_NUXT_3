import type { Media } from '../../../../interfaces'
export interface GlobalInfo {
    id: number;
    maplink: string;
    street: string;
    zipcode: string;
    city: string;
    phone: string;
}
export interface GlobalLink {
    id: number;
    link: string;
    name: string;
    visible: boolean;
    picture: Media;
}

export interface GlobalSocialLink extends Omit<GlobalLink, 'picture'> {
    picto: string;
    globalDisplay: boolean;
}

export type GlobalGiftLink = Omit<GlobalLink, 'picture'>
export interface Global {
    data: {
        Info: GlobalInfo;
        Gift: GlobalGiftLink;
        Navigation: GlobalLink[];
        Social: GlobalSocialLink[];
    }
}
