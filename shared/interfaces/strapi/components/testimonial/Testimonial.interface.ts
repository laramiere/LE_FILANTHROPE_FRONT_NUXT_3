import type {
    BaseComponent,
    Picture
} from '../components.interface'
import type { TestimonialItem } from '../../contentTypes/collectionTypes'

export interface TestimonialComponent extends BaseComponent {
    avis_clients: TestimonialItem[];
    pictures?: Picture[];
    title: string;
}