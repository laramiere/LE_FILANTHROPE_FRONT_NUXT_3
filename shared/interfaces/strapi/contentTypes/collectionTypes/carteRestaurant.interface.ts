import type { CardItem } from './carteItem.interface'

export interface BaseSectionLvl {
  title: string
  id: number
}
export interface SectionLvl1 extends BaseSectionLvl {
  sectionLvl2: SectionLvl2[]
}
export interface SectionLvl2 extends BaseSectionLvl {
  sectionLvl3: SectionLvl3
  description?: string
}
export interface SectionLvl3 extends BaseSectionLvl {
  carte_items: CardItem[]
}

export interface CardRestaurant {
  title: string
  subtitle?: string
  sectionLvl1: SectionLvl1[]
}
