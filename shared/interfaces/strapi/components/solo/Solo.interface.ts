import type { BaseComponent } from '../components.interface'

export interface SoloComponent extends BaseComponent {
    content: {
        id: number;
        body: string;
    }
}