/* eslint-disable @next/next/no-img-element */
'use client'
import Breadcrums from '@/components/Breadcrums'
import Footer from '@/components/Footer'
import Testinomials from '@/components/Testinomials'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projectsData = [
  {
    name: 'Astra Digitals',
    image: '/project01.png',
    id: 'projectImage1',
    tag: 'Store Management / Email Marketing',
  },
  {
    name: 'Blackpods Official',
    image: '/project02.png',
    id: 'projectImage2',
    tag: 'Website / SEO',
  },
  {
    name: 'Lorem ipsum',
    image: '/project03.png',
    id: 'projectImage3',
    tag: 'Website / Branding',
  },
  {
    name: 'TrendUX',
    image: '/project04.png',
    id: 'projectImage4',
    tag: 'Web / Mobile App',
  },
  {
    name: 'e.Oliver',
    image: '/project05.png',
    id: 'projectImage5',
    tag: 'Store / SEO / Website / Content Writing / Email Marketing',
  },
]

const variants = {
  initial: { y: 150 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.2,
    },
  },
}

const page = () => {
  return (
    <div className=''>
      <div className='  w-full relative pt-48 pl-10 pb-16 xl:pb-48 lg:pl-20  xl:pt-48  2xl:pl-96'>
        <Image
          priority
          src={'/image05.png'}
          fill={true}
          className='  object-cover -z-10  '
          alt=''
        />
        <div className=' max-w-xs md:max-w-md xl:max-w-2xl '>
          <b className=' font-extrabold text-5xl md:text-6xl lg:text-7xl overflow-hidden inline-block'>
            <motion.p variants={variants} initial='initial' animate='animate'>
              Projects.
            </motion.p>
          </b>

          <div className=' inline-block overflow-hidden'>
            <motion.p
              variants={variants}
              initial='initial'
              animate='animate'
              className='mt-5 leading-[29px] mb-5 text-base font-medium '
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </div>
          <div className='  inline-block overflow-hidden'>
            <motion.button
              variants={variants}
              initial='initial'
              animate='animate'
              className='flex items-center pl-5 pr-7 text-base py-3 border border-black '
            >
              <span className='mr-5'>Hire Us</span>
              <svg
                className=''
                xmlns='http://www.w3.org/2000/svg'
                width='5.976'
                height='10.453'
                viewBox='0 0 5.976 10.453'
              >
                <path
                  id='Icon_ionic-ios-arrow-back'
                  data-name='Icon ionic-ios-arrow-back'
                  d='M15.425,11.419,11.47,7.467a.747.747,0,0,1,1.058-1.055l4.481,4.478a.746.746,0,0,1,.022,1.03l-4.5,4.509a.747.747,0,1,1-1.058-1.055Z'
                  transform='translate(-11.251 -6.194)'
                  fill='#202020'
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <Breadcrums />
      <div className='  max-w-xl mx-auto relative max-h-44 py-14 xl:pl-20  grid place-items-center mt-14'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=' font-bold grid place-content-center text-[80px] sm:text-7xl md:text-8xl mx-auto absolute inset-0 ml-auto text-[#F2F2F2] '
        >
          projects
        </motion.h1>
        <div className='z-0 mt-5 sm:mt-2 inline-block overflow-hidden'>
          <motion.h2
            variants={variants}
            initial='initial'
            animate='animate'
            className='z-0 md:text-5xl  text-4xl text-center font-extrabold   '
          >
            Great Portfolio
          </motion.h2>
          <motion.p
            variants={variants}
            initial='initial'
            animate='animate'
            className='z-0 text-center text-base'
          >
            Around Our Agency
          </motion.p>
        </div>
      </div>
      {/* Feature Projects */}
      <div className='grid sm:max-w-xl  mx-auto  md:grid-cols-2 grid-cols-1 gap-7 max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl  mt-12'>
        <Link
          href={`/projects/${projectsData[0].name}`}
          className='relative hover:from-transparent  overflow-hidden hover:rotate-2 hover:scale-105 duration-500 hover:to-gray-900/50 hover:bg-gradient-to-b  transition-all  '
        >
          <motion.img
            // whileHover={{
            //   rotate: 2,
            //   scale: 1.05,
            //   transition: { duration: 0.5 },
            // }}
            src={projectsData[0].image}
            // fill={true}
            className=' ml-auto  z-0  mix-blend-overlay '
            alt=''
          />

          <motion.div
            initial={{ y: 100 }}
            whileHover={{
              y: 0,
              rotate: -2,
              transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.4,
              },
            }}
            className='absolute inset-0 text-white'
          >
            <div className='absolute bottom-5 left-24'>
              <h2 className=' bottom-0 font-bold  text-xl'>
                {projectsData[0].name}
              </h2>
              <p className='  font-normal  text-sm'>{projectsData[0].tag}</p>
            </div>
          </motion.div>
        </Link>
        <Link
          href={`/projects/${projectsData[1].name}`}
          className=' md:row-span-2 relative '
        >
          <img src={projectsData[1].image} alt='' />
        </Link>
        <Link
          href={`/projects/${projectsData[2].name}`}
          className=' ml-auto md:row-span-2 relative '
        >
          <img src={projectsData[2].image} alt='' />
        </Link>

        <Link
          href={`/projects/${projectsData[3].name}`}
          className='relative mt-0 '
        >
          <img src={projectsData[3].image} alt='' className='' />
        </Link>
        <Link
          href={`/projects/${projectsData[4].name}`}
          className=' md:col-span-2 col-span-1 mx-auto mt-[-35px] xl:mt-[-50px] relative '
        >
          <img src={projectsData[4].image} alt='' />
        </Link>
      </div>
      {/* View More Button */}
      <div className='grid place-items-center mb-14'>
        <button className=' px-16 text-base py-3 border border-gold text-gold  text-center  mx-auto '>
          View More
        </button>
      </div>
      {/* Testimonials Section */}
      <Testinomials />
      <Footer />
    </div>
  )
}

export default page
