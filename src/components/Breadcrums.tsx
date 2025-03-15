'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import Link from 'next/link'
type breadcrumstypes = {
  breadcrumb: string
  href: string
}

const variants = {
  initial: { x: -5000 },
  animate: {
    opacity: [0, 0.5, 1],

    x: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
}

const Breadcrums = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<breadcrumstypes[]>()

  const pathname = usePathname()
  useEffect(() => {
    if (pathname) {
      const linkPath = pathname.split('/')
      // console.log('Before Shift', linkPath)
      linkPath.shift()
      // console.log(linkPath)

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path.replace(/%20|-/g, ' '),
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [pathname])
  return (
    <motion.nav
      variants={variants}
      initial='initial'
      animate='animate'
      className='flex '
      aria-label='Breadcrumb'
    >
      <motion.ol
        animate={{ opacity: [0, 0.5, 1] }}
        transition={{ delay: 0.2 }}
        role='list'
        className='flex w-screen xl:max-w-6xl max-w-sm  sm:max-w-lg md:max-w-2xl lg:max-w-4xl mt-[-30px] z-0 shadow-2xl h-16 mx-auto space-x-4 rounded-md bg-white px-6 '
      >
        <li className='flex'>
          <div className='flex items-center'>
            <Link href='/' className='text-gray-400 hover:text-gray-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25.456'
                height='19.795'
                viewBox='0 0 25.456 19.795'
              >
                <path
                  id='Icon_awesome-home'
                  data-name='Icon awesome-home'
                  d='M12.389,7.389,4.242,14.1v7.242a.707.707,0,0,0,.707.707L9.9,22.036a.707.707,0,0,0,.7-.707V17.1a.707.707,0,0,1,.707-.707H14.14a.707.707,0,0,1,.707.707v4.226a.707.707,0,0,0,.707.709l4.95.014a.707.707,0,0,0,.707-.707V14.094L13.065,7.389A.539.539,0,0,0,12.389,7.389Zm12.87,4.561L21.565,8.9V2.784a.53.53,0,0,0-.53-.53H18.56a.53.53,0,0,0-.53.53V5.992L14.073,2.737a2.121,2.121,0,0,0-2.7,0L.191,11.95a.53.53,0,0,0-.071.747l1.127,1.37a.53.53,0,0,0,.747.072L12.389,5.577a.539.539,0,0,1,.676,0L23.46,14.139a.53.53,0,0,0,.747-.071l1.127-1.37a.53.53,0,0,0-.075-.748Z'
                  transform='translate(0.001 -2.254)'
                  fill='#8799a3'
                />
              </svg>

              <span className='sr-only'>Home</span>
            </Link>
          </div>
        </li>
        {breadcrumbs?.map(({ breadcrumb, href }) => (
          <motion.li
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{ delay: 1 }}
            key={breadcrumb}
            className='flex'
          >
            <div className='flex items-center'>
              <svg
                className='h-full w-6 flex-shrink-0 text-gray-200'
                viewBox='0 0 24 44'
                preserveAspectRatio='none'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
              </svg>
              <Link
                href={href}
                className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
              >
                {breadcrumb}
              </Link>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </motion.nav>
  )
}

export default Breadcrums
