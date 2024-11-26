import type { TestimonialItem } from '../../contentTypes/collectionTypes'
import type {
  BaseComponent,
  Picture,
} from '../components.interface'

export interface TestimonialComponent extends BaseComponent {
  avis_clients: TestimonialItem[]
  pictures?: Picture[]
  title: string
}
