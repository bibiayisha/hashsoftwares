/* eslint-disable @next/next/no-img-element */
'use client'
import Breadcrums from '@/components/Breadcrums'
import Footer from '@/components/Footer'
import Testinomials from '@/components/Testinomials'
import { useNavbarContext } from 'context/NavbarContext'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import HeroImage from './../../../public/image05.png'
import ProjectImage1 from './../../../public/project01.png'
import ProjectImage2 from './../../../public/project02.png'
import ProjectImage3 from './../../../public/project03.png'
import ProjectImage4 from './../../../public/project04.png'
import ProjectImage5 from './../../../public/project05.png'

const projectsData = [
  {
    name: 'Astra Digitals',
    image: ProjectImage1,
    id: 'projectImage1',
    tag: 'Store Management / Email Marketing',
  },
  {
    name: 'Blackpods Official',
    image: ProjectImage2,
    id: 'projectImage2',
    tag: 'Website / SEO',
  },
  {
    name: 'Lorem ipsum',
    image: ProjectImage3,
    id: 'projectImage3',
    tag: 'Website / Branding',
  },
  {
    name: 'TrendUX',
    image: ProjectImage4,
    id: 'projectImage4',
    tag: 'Web / Mobile App',
  },
  {
    name: 'e.Oliver',
    image: ProjectImage5,
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

const Projects = () => {
  const { setcolor, color } = useNavbarContext()
  useEffect(() => {
    setcolor('#202020')
  })
  console.log('Projects page', color)
  return (
    <div className=''>
      {/* Hero section */}
      <div className='  w-full relative pt-48 pl-10 pb-16 xl:pb-48 lg:pl-20  xl:pt-48  2xl:pl-96'>
        <Image
          priority
          placeholder='blur'
          src={HeroImage}
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
      {/* Main heading */}
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
          className='relative hover:from-transparent  overflow-hidden hover:rotate-2 hover:scale-105 duration-500 hover:to-gray-900/50 hover:bg-gradient-to-b  transition-all max-w-[570px] ml-auto '
        >
          <Image
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
            <div className='absolute bottom-5 left-10'>
              <h2 className=' bottom-0 font-bold  text-xl'>
                {projectsData[0].name}
              </h2>
              <p className='  font-normal  text-sm'>{projectsData[0].tag}</p>
            </div>
          </motion.div>
        </Link>
        <Link
          href={`/projects/${projectsData[1].name}`}
          className=' md:row-span-2 relative hover:from-transparent  overflow-hidden hover:rotate-2 hover:scale-105 duration-500 hover:to-gray-900/50 hover:bg-gradient-to-b  transition-all max-w-[570px] '
        >
          <Image
            src={projectsData[1].image}
            alt=''
            className='mix-blend-overlay '
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
            <div className='absolute bottom-5 left-10'>
              <h2 className=' bottom-0 font-bold  text-xl'>
                {projectsData[1].name}
              </h2>
              <p className='  font-normal  text-sm'>{projectsData[1].tag}</p>
            </div>
          </motion.div>
        </Link>
        <Link
          href={`/projects/${projectsData[2].name}`}
          className=' ml-auto md:row-span-2 relative hover:from-transparent  overflow-hidden hover:rotate-2 hover:scale-105 duration-500 hover:to-gray-900/50 hover:bg-gradient-to-b  transition-all max-h-[596px] '
        >
          <Image
            src={projectsData[2].image}
            alt=''
            className='mix-blend-overlay '
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
            <div className='absolute bottom-5 left-10'>
              <h2 className=' bottom-0 font-bold  text-xl'>
                {projectsData[2].name}
              </h2>
              <p className='  font-normal  text-sm'>{projectsData[2].tag}</p>
            </div>
          </motion.div>
        </Link>

        <Link
          href={`/projects/${projectsData[3].name}`}
          className='relative hover:from-transparent  overflow-hidden hover:rotate-2 hover:scale-105 duration-500 hover:to-gray-900/50 hover:bg-gradient-to-b  transition-all mt-0 max-w-[570px] max-h-[534px]  '
        >
          <Image
            src={projectsData[3].image}
            alt=''
            className='mix-blend-overlay '
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
            <div className='absolute bottom-5 left-10'>
              <h2 className=' bottom-0 font-bold  text-xl'>
                {projectsData[3].name}
              </h2>
              <p className='  font-normal  text-sm'>{projectsData[3].tag}</p>
            </div>
          </motion.div>
        </Link>
        <Link
          href={`/projects/${projectsData[4].name}`}
          className=' md:col-span-2 col-span-1 mx-auto relative hover:from-transparent max-h-[596px]  overflow-hidden hover:rotate-1 hover:scale-105 duration-500 hover:to-gray-900/50 hover:bg-gradient-to-b  transition-all '
        >
          <Image
            src={projectsData[4].image}
            alt=''
            className='mix-blend-overlay '
          />
          <motion.div
            initial={{ y: 100 }}
            whileHover={{
              y: -50,
              rotate: -1,
              transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.4,
              },
            }}
            className='absolute inset-0 text-white'
          >
            <div className='absolute bottom-5 left-10'>
              <h2 className=' bottom-0 font-bold  text-xl'>
                {projectsData[4].name}
              </h2>
              <p className='  font-normal  text-sm'>{projectsData[4].tag}</p>
            </div>
          </motion.div>
        </Link>
      </div>
      {/* View More Button */}
      <div className='grid place-items-center mb-14 mt-14'>
        <button className=' px-16 text-base py-3 border border-gold text-gold  text-center  mx-auto '>
          View More
        </button>
      </div>
      {/* Testimonials Section */}
      <Testinomials />
    </div>
  )
}

export default Projects
