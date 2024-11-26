import type { IconType } from '../../components'
import type { Media } from '../../components/components.interface'

export interface POIInterface {
  title: string
  content: string
  link: string
  lat: number
  lng: number
  pin: IconType
  picture: Media
  id: number
  documentId: string
}
