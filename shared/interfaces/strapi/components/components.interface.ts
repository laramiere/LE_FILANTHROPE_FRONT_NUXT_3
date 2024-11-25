import type { ComponentKeys } from './componentKeys'

export type TimetableComponentName = ComponentKeys.Timetable
export type BoardComponentName = ComponentKeys.Board
export type SoloComponentName = ComponentKeys.Solo
export type TestimonialComponentName = ComponentKeys.Testimonial

export type ComponentName = TimetableComponentName | BoardComponentName | SoloComponentName | TestimonialComponentName

export interface BaseComponent {
    __component: ComponentName;
    id: number;
}

export interface Media {
    id: number;
    alternativeText?: string;
    url: string;
    name: string;
    documentId: string;
    provider: string;
}
export interface Picture {
    id: string;
    file: {
        alternativeText: string;
        url: string;
        id?: number;
        documentId?: string;
    }
}