import React from 'react'
import CarouselData from './Fetch_Carousel_Data'
import { PageWrapper } from '@/components/Page-Wrapper'

const page = () => {
  return (
    /* @ts-expect-error Server Component */
    <CarouselData />
  )
}

export default page
