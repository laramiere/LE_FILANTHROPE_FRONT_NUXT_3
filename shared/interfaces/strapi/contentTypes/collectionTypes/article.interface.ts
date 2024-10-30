import type { Picture } from '../../components/components.interface'
export interface ArticleItem {
    title: string;
    content: string;
    media: Picture;
    visible: boolean;
    id: number;
    documentId: string;
}