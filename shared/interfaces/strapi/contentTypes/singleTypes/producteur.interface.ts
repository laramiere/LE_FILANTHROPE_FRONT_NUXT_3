import type { Hero } from '../../components'
import type { POIInterface } from '../collectionTypes'
export interface ProducteurInterface {
    hero: Hero;
    content: string;
    filanthropePOI: POIInterface;
    producteurs: POIInterface[];
}