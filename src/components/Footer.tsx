'use client'
import React from 'react'
import {
  FacebookSvg,
  FooterShuriken,
  InstagramSvg,
  LogoShuriken,
  TwitterSvg,
} from './Svgs'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const path = usePathname()
  return (
    <footer
      className={`${
        path === '/' ? 'hidden' : 'grid relative  overflow-hidden bg-gray-800'
      }`}
    >
      <div className='absolute left-[-6.25rem] top-[-1.875rem]'>
        <FooterShuriken />
      </div>
      <div className='  py-24 text-center z-0 '>
        <div className='flex justify-center'>
          <LogoShuriken />
        </div>
        <p className=' mt-16 text-lg text-gray-400 font-normal leading-8 max-w-xl mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam quis nostrud.
        </p>
        <div className='flex mt-9 justify-center '>
          <div className=' pr-9'>
            <FacebookSvg fillColor='fill-gray-400' />
          </div>
          <div className=' pr-7'>
            <TwitterSvg fillColor='fill-gray-400' />
          </div>

          <InstagramSvg fillColor='fill-gray-400' />
        </div>
      </div>
      <p className='bg-gray-900 text-center text-lg font-normal text-gray-400 py-9'>
        © All right reserved 2020. Hash Softwares - Design & Development Agency.
      </p>
    </footer>
  )
}

export default Footer
