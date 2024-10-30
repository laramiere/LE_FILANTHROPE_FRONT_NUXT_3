import type { Media } from '../../components/components.interface'
import type { TimetableComponent } from '../../components/components.interface'
export interface ArticleItem {
    title: string;
    content: string;
    media: Media;
    visible: boolean;
    id: number;
    documentId: string;
    slug: string;
    horaire_restaurant: TimetableComponent;
}