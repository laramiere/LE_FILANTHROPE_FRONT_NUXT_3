import type { BaseComponent, Picture } from '../components.interface'
import { ComponentKeys } from '../componentKeys'

export interface TimetableItem {
    id: number;
    title: string;
    timeSlot1: string;
    timeSlot2?: string;
    picture?: Picture;
}
export interface TimetableComponent extends BaseComponent {
    __component: ComponentKeys.Timetable;
    title?: string;
    subtitle?: string;
    horaire_restaurant?: {
        timetableItem: TimetableItem[];
    };
    smallDisplay?: boolean;
}