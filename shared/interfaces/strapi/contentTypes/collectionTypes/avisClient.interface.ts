import type { Picture } from '../../components/components.interface'
export interface TestimonialItem {
    content : string;
    date: string;
    documentId: string;
    id: string;
    rate: number;
    userName: string;
    picture: Picture;
}