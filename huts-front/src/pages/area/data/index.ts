import restImg1 from '../../../assets/images/area/rest-1.png'
import restImg2 from '../../../assets/images/area/rest-1.png'
import restImg3 from '../../../assets/images/hut/outside-2.jpg'

import vestImg1 from '../../../assets/images/area/vest_1.png'
import vestImg2 from '../../../assets/images/area/vest_2.png'
import vestImg3 from '../../../assets/images/hut/prac-2.jpg'

import natureImg1 from '../../../assets/images/area/nature-1.png'
import natureImg2 from '../../../assets/images/area/nature-2.png'
import natureImg3 from '../../../assets/images/hut/inside-2.jpg'

import mapImg from '../../../assets/images/area/map.png'

const restImgs = [restImg1, restImg2, restImg3]
const vestImgs = [vestImg1, vestImg2, vestImg3]
const natureImgs = [natureImg1, natureImg2, natureImg3]

export const infoSections = [
    {
        title: 'Vesterborg',
        text: 'Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace.',
        imgArr: vestImgs
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
        imgArr: mapImg
    },
    {
        title: 'Restaurants & shopping',
        text: 'Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.',
        imgArr: restImgs
    },
    {
        title: 'Experiences in nature',
        text: 'Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower.',
        imgArr: natureImgs
    },
    {
        title: 'Go for a drive',
        text: 'Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower.',
        imgArr: natureImgs.reverse()
    },
]
