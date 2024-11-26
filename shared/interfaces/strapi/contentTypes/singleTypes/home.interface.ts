import type { BaseComponent, Hero, SeoInterface } from '../../components'

export interface HomeInterface {
  hero: Hero
  pageZone?: BaseComponent[]
  seo: SeoInterface
}
