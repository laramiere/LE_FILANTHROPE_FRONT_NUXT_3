import type { Media } from '../../components/components.interface'
import type { IconType } from '../../components'

export interface POIInterface {
    title: string;
    content: string;
    link: string;
    latlng: [number, number];
    pin: IconType;
    media: Media;
}