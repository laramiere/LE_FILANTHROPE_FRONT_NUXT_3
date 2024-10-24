export interface TimetableInterface {
    id: number;
    title: string;
    timeSlot1: string;
    timeSlot2?: string | null;
}