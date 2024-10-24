import type { TimetableInterface } from './singleType.interface'
import { ComponentKeys } from './componentKeys'

export type TimetableComponentName = ComponentKeys.Timetable
export type BoardComponentName = ComponentKeys.Board
export type SoloComponentName = ComponentKeys.Solo
export type TestimonialComponentName = ComponentKeys.Testimonial

export type ComponentName = TimetableComponentName | BoardComponentName | SoloComponentName | TestimonialComponentName
export interface Component {
    __component: ComponentKeys;
    id: number;
}

export interface TimetableComponent extends Component {
    __component: TimetableComponentName;
    title?: string;
    subtitle?: string;
    horaire_restaurant?: {
        timetableItem: TimetableInterface[];
    };
    smallDisplay?: boolean;
}