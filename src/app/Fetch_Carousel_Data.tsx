import Carousel from '@/components/Carousel'
import React from 'react'

export type carouselDataType = {
  id: number
  firstLine: string
  secondLine: string
  thirdLine: string
  fourthLine: string
  fifthLine: string
  linkText:string
  image: string
  backgroundColor: string
  fontSize: string
  ctaBackgroundColor: string
  textColor: string
  ctaArrowColor: string
  socialIconsColor: string
  paginationDotsColorActive: string
  paginationDotsColorNonActive: string
  headerColor: string
}

export interface carouselInterface {
  carouselData: carouselDataType[]
}

async function fetchCarouselData() {
  // let res = await fetch('http://localhost:3000/api/carouselData')
  let res = await fetch('https://hashsoftwares.io/api/carouselData')

  return res.json()
}

const CarouselData = async () => {
  const carousel: carouselInterface = await fetchCarouselData()

  return <Carousel carouselData={carousel.carouselData} />
}

export default CarouselData
