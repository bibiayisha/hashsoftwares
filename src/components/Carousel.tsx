/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
// import Navbar from '../Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { carouselInterface, carouselDataType } from '@/app/Fetch_Carousel_Data'
import Image from 'next/image'
import { useNavbarContext } from 'context/NavbarContext'

// type AnimatedWordsProps = {
//   text: string
// }

// const AnimatedWords = ({ text }: AnimatedWordsProps) => {
//   return (
//     <motion.span
//       className='block overflow-hidden'
//       initial={{ y: 100 }}
//       animate={{
//         y: 0,
//         transition: {
//           ease: [0.6, 0.01, 0.05, 0.95],
//           duration: 1,
//         },
//       }}
//     >
//       {text}
//     </motion.span>
//   )
// }

const variants = {
  initial: { y: 150 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
  exit: {
    y: 150,
    transition: {
      // ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.2,
    },
  },
}

const Carousel = ({ carouselData }: carouselInterface) => {
  const { setcolor, color } = useNavbarContext()

  const [carouselIndex, setCarouselIndex] = useState(0)
  const [isopen, setisopen] = useState(false)
  // const [index, setIndex] = useState()

  const handelClickForward = () => {
    if (carouselIndex >= carouselData.length - 1) {
      return setCarouselIndex(0)
    }
    setCarouselIndex(carouselIndex + 1)
  }
  const handelClickBackward = () => {
    if (carouselIndex <= 0) {
      return setCarouselIndex(carouselData.length - 1)
    }
    setCarouselIndex(carouselIndex - 1)
  }
  const top = {
    animate: {
      rotate: isopen ? 45 : 0,
      y: isopen ? 30 : 0,

      transition: {
        duration: 0.8,
      },
    },
  }
  const bottom = {
    animate: {
      rotate: isopen ? -45 : 0,
      y: isopen ? -20 : 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  useEffect(() => {
    isopen === false
      ? overflowBody()
      : (document.body.style.overflow = 'hidden')
  }, [isopen])
  const overflowBody = () => {
    const scrollbar = setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 1000)
    return () => {
      clearInterval(scrollbar)
    }
  }
  useEffect(() => {
    setcolor(carouselData[carouselIndex].headerColor)
  }, [carouselIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselIndex >= carouselData.length - 1) {
        return setCarouselIndex(0)
      }
      setCarouselIndex(carouselIndex + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselIndex, carouselData.length])

  console.log('COMPONENT RERENDER')

  const boldWords = (text: string): JSX.Element[] => {
    const wordsToBold = ["visible", "accessible", "treads lightly", "creates amazing UI/UX experiences", "the century rather"];
    const regex = new RegExp(`(${wordsToBold.join("|")})`, "gi");
    return text.split(regex).map((part, i) =>
      wordsToBold.some(word => word.toLowerCase() === part.toLowerCase()) ? <b key={i}>{part}</b> : part
    ) as JSX.Element[];
  };
  

  return (
    <div
      className={`${carouselData[carouselIndex].backgroundColor}  ${carouselData[carouselIndex].textColor} relative grid  h-screen grid-cols-2 overflow-hidden pl-5 text-base    lg:pl-16 `}
    >
      <div className=' h-screen pt-40 md:pt-60 xl:pt-80  '>
        <div className='  mb-2 font-semibold uppercase tracking-[3.58px]  inline-block overflow-hidden'>
          {/* <AnimatedWords text={carouselData[carouselIndex].firstLine} /> */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={carouselData[carouselIndex].firstLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              // transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              {carouselData[carouselIndex].firstLine}{' '}
            </motion.div>
          </AnimatePresence>
        </div>

        <b className=' text-xl capitalize leading-[31px] tracking-[-2.18px] lg:text-6xl lg:leading-[72px] block overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.p
              key={carouselData[carouselIndex].secondLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='  overflow-hidden '
            >
              {carouselData[carouselIndex].secondLine}
            </motion.p>

            <motion.p
              key={carouselData[carouselIndex].thirdLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className=' overflow-hidden '
            >
              {carouselData[carouselIndex].thirdLine}
            </motion.p>
          </AnimatePresence>
        </b>
        <div className=' tranc md:text-base mt-[14px] max-w-[560px] text-sm font-medium leading-[29px] overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={carouselData[carouselIndex].fourthLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              // transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div>
                {boldWords(carouselData[carouselIndex].fourthLine)}
                <a href='#' className='text-gold underline font-bold'>{carouselData[carouselIndex].linkText}</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className=' mt-10  flex items-center  font-semibold tracking-[-0.4px]  overflow-hidden '>
          <AnimatePresence mode='wait'>
            <motion.div
              key={carouselData[carouselIndex].fifthLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              // transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div><a href='/'>{carouselData[carouselIndex].fifthLine}</a></div>
            </motion.div>

            <motion.div
              key={carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className={`ml-[11px] grid h-[47px]  w-[47px] place-items-center rounded-full ${carouselData[carouselIndex].ctaBackgroundColor}`}
            >
              <a href='/'>
              <svg
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
                  fill={carouselData[carouselIndex].ctaArrowColor}
                />
              </svg>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className=' mt-10 flex overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.svg
              key={carouselIndex + 'facebook'}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='mr-[38px]'
              xmlns='http://www.w3.org/2000/svg'
              width='9.379'
              height='17.512'
              viewBox='0 0 9.379 17.512'
            >
              <path
                id='Icon_awesome-facebook-f'
                data-name='Icon awesome-facebook-f'
                d='M10.374,9.851l.486-3.169H7.819V4.625A1.585,1.585,0,0,1,9.606,2.912h1.383V.214A16.859,16.859,0,0,0,8.535,0C6.03,0,4.393,1.518,4.393,4.266V6.681H1.609V9.851H4.393v7.662H7.819V9.851Z'
                transform='translate(-1.609)'
                fill={carouselData[carouselIndex].socialIconsColor}
              />
            </motion.svg>

            <motion.svg
              key={carouselIndex + 'twitter'}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='mr-[38px]'
              xmlns='http://www.w3.org/2000/svg'
              width='21.562'
              height='17.512'
              viewBox='0 0 21.562 17.512'
            >
              <path
                id='Icon_awesome-twitter'
                data-name='Icon awesome-twitter'
                d='M19.345,7.745c.014.192.014.383.014.575A12.487,12.487,0,0,1,6.786,20.893,12.488,12.488,0,0,1,0,18.909a9.142,9.142,0,0,0,1.067.055,8.85,8.85,0,0,0,5.486-1.888,4.427,4.427,0,0,1-4.132-3.065,5.573,5.573,0,0,0,.835.068,4.674,4.674,0,0,0,1.163-.15A4.42,4.42,0,0,1,.876,9.592V9.537a4.45,4.45,0,0,0,2,.561A4.426,4.426,0,0,1,1.5,4.188a12.561,12.561,0,0,0,9.112,4.624A4.989,4.989,0,0,1,10.507,7.8a4.423,4.423,0,0,1,7.648-3.024,8.7,8.7,0,0,0,2.8-1.067,4.407,4.407,0,0,1-1.943,2.435,8.859,8.859,0,0,0,2.545-.684,9.5,9.5,0,0,1-2.216,2.285Z'
                transform='translate(0 -3.381)'
                fill={carouselData[carouselIndex].socialIconsColor}
              />
            </motion.svg>

            <motion.svg
              key={carouselIndex + 'instagram'}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              xmlns='http://www.w3.org/2000/svg'
              width='18.877'
              height='18.873'
              viewBox='0 0 18.877 18.873'
            >
              <path
                id='Icon_awesome-instagram'
                data-name='Icon awesome-instagram'
                d='M9.435,6.835a4.839,4.839,0,1,0,4.839,4.839A4.831,4.831,0,0,0,9.435,6.835Zm0,7.985a3.146,3.146,0,1,1,3.146-3.146A3.152,3.152,0,0,1,9.435,14.82ZM15.6,6.637a1.129,1.129,0,1,1-1.129-1.129A1.126,1.126,0,0,1,15.6,6.637Zm3.2,1.145a5.585,5.585,0,0,0-1.524-3.954A5.622,5.622,0,0,0,13.327,2.3c-1.558-.088-6.229-.088-7.787,0a5.614,5.614,0,0,0-3.954,1.52A5.6,5.6,0,0,0,.061,7.779c-.088,1.558-.088,6.229,0,7.787A5.585,5.585,0,0,0,1.586,19.52,5.629,5.629,0,0,0,5.54,21.044c1.558.088,6.229.088,7.787,0a5.585,5.585,0,0,0,3.954-1.524,5.622,5.622,0,0,0,1.524-3.954c.088-1.558.088-6.224,0-7.782Zm-2.013,9.454A3.185,3.185,0,0,1,15,19.031c-1.242.493-4.19.379-5.563.379s-4.325.109-5.563-.379a3.185,3.185,0,0,1-1.794-1.794c-.493-1.242-.379-4.19-.379-5.563s-.109-4.325.379-5.563A3.185,3.185,0,0,1,3.872,4.317c1.242-.493,4.19-.379,5.563-.379S13.76,3.829,15,4.317a3.185,3.185,0,0,1,1.794,1.794c.493,1.242.379,4.19.379,5.563S17.285,16,16.793,17.237Z'
                transform='translate(0.005 -2.238)'
                fill={carouselData[carouselIndex].socialIconsColor}
              />
            </motion.svg>
          </AnimatePresence>
        </div>
      </div>
      <div className=' grid grid-cols-12 '>
        <div className='  col-span-12   lg:col-span-10'>
          <motion.div className=' overflow-hidden'>
            <motion.div
              initial={{ width: '0%' }}
              animate={{
                width: '100%',
                x: `-${carouselIndex * 100}%`,
              }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className=' flex h-screen relative'
            >
              {carouselData.map((data: carouselDataType) => (
                <Image
                  priority
                  width={800}
                  height={100}
                  // fill={true}
                  key={data.id}
                  className='   min-w-full  object-cover'
                  src={data.image}
                  alt='Carousel Image'
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className=' relative col-span-12  flex flex-col  items-end justify-center  lg:col-span-1 '>
          <div className='absolute bottom-0 left-0 right-0 flex  justify-around lg:relative lg:block'>
            {carouselData.map(({ id }, i) => (
              <div
                onClick={() => setCarouselIndex(i)}
                key={id}
                className={` h-1.5 w-1.5 cursor-pointer rounded-full ${
                  carouselIndex === i
                    ? carouselData[carouselIndex].paginationDotsColorActive
                    : carouselData[carouselIndex].paginationDotsColorNonActive
                }  mb-[35px] `}
              />
            ))}
          </div>
          <div className=' absolute bottom-[5%] hidden flex-col lg:right-[-33%] lg:flex xl:right-[-30%]'>
            <motion.div
              // animate={{
              //   borderWidth: ['1px', '5px', '9px'],
              //   transition: {
              //     ease: 'easeIn',
              //     duration: 3,
              //     repeat: Infinity,
              //   },
              // }}
              onClick={() => handelClickForward()}
              className='ml-[11px] mb-[21px] grid h-[47px] w-[47px] cursor-pointer place-items-center rounded-full border border-gray-600'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='5.976'
                height='10.453'
                viewBox='0 0 5.976 10.453'
              >
                <path
                  style={{ width: '75%', borderWidth: '60%' }}
                  id='Icon_ionic-ios-arrow-back'
                  data-name='Icon ionic-ios-arrow-back'
                  d='M15.425,11.419,11.47,7.467a.747.747,0,0,1,1.058-1.055l4.481,4.478a.746.746,0,0,1,.022,1.03l-4.5,4.509a.747.747,0,1,1-1.058-1.055Z'
                  transform='translate(-11.251 -6.194)'
                  fill='#4d4d4d'
                />
              </svg>
            </motion.div>
            <div
              onClick={() => handelClickBackward()}
              className='ml-[11px] grid h-[47px] w-[47px] cursor-pointer place-items-center  rounded-full border border-gray-600'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='5.976'
                height='10.453'
                viewBox='0 0 5.976 10.453'
              >
                <path
                  id='Icon_ionic-ios-arrow-back'
                  data-name='Icon ionic-ios-arrow-back'
                  d='M13.052,11.419l3.955-3.952a.747.747,0,1,0-1.058-1.055L11.468,10.89a.746.746,0,0,0-.022,1.03l4.5,4.509A.747.747,0,1,0,17,15.374Z'
                  transform='translate(-11.251 -6.194)'
                  fill='#4d4d4d'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
