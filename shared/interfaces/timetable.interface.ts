import type { Picture } from './picture.interface'

export interface Time {
  title: string
  timeSlot1: string
  timeSlot2?: string
  picture?: Picture
}
