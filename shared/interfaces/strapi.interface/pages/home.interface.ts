import type { Hero } from '../hero.interface'
import type { Component } from '../components.interface'

export interface HomeInterface {
    hero: Hero;
    pageZone?: Component[]
}