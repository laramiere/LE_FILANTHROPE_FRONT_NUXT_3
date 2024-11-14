import type { Time, Category, Board, POIInterface } from '../interfaces'
import { IconKeys } from '../interfaces'
export const richTextAccueil = `
<p>
Bistrot le Filanthrope est né en 2018, C’est avant tout une belle équipe qui aime bien rigoler et qui trinque facilement.
</p>
<p>
Nous cuisinons des produits frais et locaux. Nous sommes très fiers de travailler avec nos producteurs, ce sont eux qui en travaillant la terre de manière responsable, nous fournissent de quoi vous cuisiner nos plats de saison.
</p>
<p>
Nous vous invitons, le midi, à venir déguster une cuisine simple mais exigeante où nous mêlons recette de grand-mère et convivialité. Un lieu de vie épicurien qui espère être un reflet de notre magnifique terroir.
</p>
<p>
Le soir l’ambiance est à la fête, conversation interminable, rires, on écoute vos blagounettes avec joyeuseté !
Bar restaurant avec terrasse à Villeurbanne,Ouvert 7 jours sur 7 de 11h00 à 01h00 ;)
Pensez à réserver !!
</p>
`
export const timetable : Time[] = [
 {
    title: 'LUN',
    timeSlot1: 'Fermé',
    picture: {
        url: '/pictures/picture_1.jpg',
        alt: 'Miam'
    }
 },
 {
    title: 'MAR',
    timeSlot1: '09H00 - 01H00',
    picture: {
        url: '/pictures/picture_2.jpg',
        alt: 'Miam'
    }
 },
 {
    title: 'MER',
    timeSlot1: '09H00 - 01H00',
    picture: {
        url: '/pictures/picture_3.jpg',
        alt: 'Miam'
    }
 },
 {
    title: 'JEU',
    timeSlot1: '09H00 - 01H00',
    picture: {
        url: '/pictures/picture_4.jpg',
        alt: 'Miam'
    }
 },
 {
    title: 'VEN',
    timeSlot1: '09H00 - 01H00',
    picture: {
        url: '/pictures/picture_5.jpg',
        alt: 'Miam'
    }
 },
 {
    title: 'SAM',
    timeSlot1: '09H00 - 01H00',
    picture: {
        url: '/pictures/picture_8.jpg',
        alt: 'Miam'
    }
 },
 {
    title: 'DIM',
    timeSlot1: '09H00 - 01H00',
    picture: {
        url: '/pictures/picture_9.jpg',
        alt: 'Miam'
    }
 }
]

export const boardCategory: Category[]  = [
    {
        id: 'njiofe675nj8',
        title: 'Le Midi'
    },
    {
        id: 'njiofe675nj890',
        title: 'Le Soir'
    },
    {
        id: 'njiofe6',
        title: 'Vin',
        subCategory: [
            {
                id: 'lmdsji89ggy',
                title: 'Au verre'
            },
            {
                title: 'Rouge',
                id: 'lmdsji89ggppMkjh0%y_W',
                subtitle: 'Toutes nos belles bouteilles de rouges',
                subCategory: [
                    {
                        title: 'Beaujolais',
                        id: 'lmdsji89gionkjnjiez897',
                        itemsCategory: [
                            {
                                title: 'Chardonnay',
                                subtitle: 'Sébastien DEMONT - 2020 Un chardonnay dans la tradition',
                                price: {
                                    amount: 20.00,
                                    currency: 'eur'
                                }
                            },
                            {
                                title: 'Le P’tit Grosbit',
                                subtitle: 'Nicolas Chemarin - 2020 Notes d\'amande fraîche et de fruits secs au nez. On sent l\'empreinte minérale aussi. La bouche impose une belle amplitude et une grande sensation de puissance.',
                                price: {
                                    amount: 28.00,
                                    currency: 'eur'
                                }
                            }
                        ]
                    },
                    {
                        title: 'Ardèche',
                        id: 'lmdsji89ggppMkjh0y',
                        itemsCategory: [
                            {
                                title: 'L’inattendu',
                                subtitle: 'Domaine Les Accoles – 2021 Cuvée de carignan gris très aromatique. Le nez nous invite à la dégustation avec ses notes de fleurs blanches et de fruits. La bouche est pleine de charme avec de fines notes boisées élégantes et des fruits juteux et gourmands.',
                                price: {
                                    amount: 38.00,
                                    currency: 'eur'
                                }
                            }
                        ]
                    },
                    {
                        id: 'lmdsji89ggppMkjh0y34',
                        title: 'Côte du rhône'
                    },
                    {
                        id: 'lmdsji89ggppMkjh0y_W',
                        title: 'Languedoc'
                    },
                    {
                        id: 'lmdsji89ggppMiobhhW',
                        title: 'Bourgogne'
                    }
                ]
            },
            {
                id: 'lmdsji89gio',
                title: 'Blanc'
            },
            {
                id: 'lmdsji89ggRzy',
                title: 'Rosé'
            }
        ]
    }
]

export const board: Board = {
    title: 'La carte',
    subtitle: 'Retrouvez ici tout ce que le filanthrope a de meilleur à vous proposer',
    category: boardCategory
}

const POIMonChervet : POIInterface = {
    id: 1,
    documentId:'bbvuje89',
    title: 'GAEC de Montchervet',
    content: '<p>Nous vous proposons des produits de nos animaux nés, élevés, finis et transformés à la ferme. Choisissez parmi la charcuterie, la boucherie et la fromagerie issus de nos cochons, de nos vaches laitières Montbéliardes et de nos poules pondeuses.</p>',
    lat: 44.353060,
    lng: 1.878860,
    pin: IconKeys.Food,
    picture: {
        documentId: 'bhdfieu56',
        id: 123,
        name: 'GAEC',
        provider: 'toto',
        url: '/pictures/picture_montchervet.png',
        alternativeText: 'Gaec de Montchervet'
    },
    link: 'http://google.fr'
}
const brasserie : POIInterface = {
    id: 2,
    documentId:'bbvuje893',
    title: 'Brasserie du Pilat',
    content: '<p>La Brasserie du Pilat brasse en Auvergne Rhône-Alpes des bières artisanales 100% bio depuis 2002. À la frontière entre l’Ardèche et la Loire, venez visiter notre bar et déguster l’une de nos 13 bières artisanales dans le cadre chaleureux d’un bâtiment en bois et découvrir notre brasserie artisanale.</p>',
    lat: 49.258327,
    lng: 4.031696,
    pin: IconKeys.Drink,
    picture: {
        documentId: 'bhdfieu356',
        id: 1223,
        name: 'Brasserie',
        provider: 'toto',
        url: '/pictures/picture_2.jpg',
        alternativeText: 'Brasserie'
    },
    link: 'https://www.brasseriedupilat.com/'
}
const poisson : POIInterface = {
    id: 3,
    documentId:'b4bvuje89',
    title: 'Murgat',
    content: '<p>Notre pisciculture est implantée, depuis 1898, au pied des contreforts alpins, sur les sources naturelles des Fontaines de l’Oron. Nous vous proposons tout au long de l’année des Truites Fario, Ombles Chevaliers, Saumons de Fontaine et Truites Arc-en-Ciel.</p>',
    lat: 45.877129,
    lng: 5.91122,
    pin: IconKeys.Drink,
    picture: {
        documentId: 'bhdfieu7356',
        id: 786,
        name: 'Charles Murgat',
        provider: 'toto',
        url: '/pictures/picture_3.jpg',
        alternativeText: 'Charles Murgat'
    },
    link: 'https://www.charlesmurgat.com/'
}
export const POI: POIInterface[] = [
    POIMonChervet,
    brasserie,
    poisson
]