// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }
const carouselData = [
  {
    id: 1122,
    firstLine: 'HOUSE OF DIGITAL world',
    secondLine: 'Enabling organizations',
    thirdLine: 'to grow',
    fourthLine: `We are a creative studio specializing in UI/UX design, developmentand strategy. `,
    fifthLine: 'See details',
    linkText: 'Let’s create something together',
    image: '/image01.png',
    backgroundColor: 'bg-gray-900',
    fontSize: 'text-base',
    textColor: 'text-gray-300',
    ctaBackgroundColor: 'bg-white',
    ctaArrowColor: '#000000',
    socialIconsColor: '#e9e9e9',
    paginationDotsColorActive: 'bg-white',
    paginationDotsColorNonActive: 'bg-gray-600',
    headerColor: '#fcbd00',
  },
  {
    id: 3344,
    firstLine: 'the proud designers',
    secondLine: 'We’re a full-range',
    thirdLine: 'design agency.',
    fourthLine: `A product team which creates amazing UI/UX experiences, by crafting top-notch user experience. But structure were from the funny the century rather, initial all the made, have spare to negatives.`,
    fifthLine: 'Schedule a Call',
    linkText: '',
    image: '/image02.png',
    backgroundColor: 'bg-gold',
    ctaBackgroundColor: 'bg-black',
    fontSize: 'text-base',
    textColor: 'text-gray-900',
    ctaArrowColor: '#fff',
    socialIconsColor: '#202020',
    paginationDotsColorActive: 'bg-white',
    paginationDotsColorNonActive: 'bg-[#FEE18C]',
    headerColor: '#202020',
  },
  {
    id: 5566,
    firstLine: 'we’re the hash softwares agency',
    secondLine: 'Strategy. Design.',
    thirdLine: 'Develop. Scale.',
    fourthLine: `Using year-over-year approaches and the latest technologies, we will ensure that your new website will be visible, accessible, and treads lightly.`,
    fifthLine: 'Get Started',
    linkText: '',
    image: '/image03.png',
    backgroundColor: 'bg-white',
    fontSize: 'text-base',
    ctaBackgroundColor: 'bg-black',
    textColor: 'text-gray-900',
    ctaArrowColor: '#fff',
    socialIconsColor: '#202020',
    paginationDotsColorActive: 'bg-black',
    paginationDotsColorNonActive: 'bg-[#919191]',
    headerColor: '#fcbd00',
  },
]
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ carouselData: carouselData })
}
