'use client'

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    // <AnimatePresence initial={false}>
    // {/* // <LayoutGroup> */}
    <motion.div
      // layoutId={pathname?.toString()}
      layout
      initial={{ x: 2000 }}
      animate={{
        x: 0,
        transition: {
          duration: 1,
          ease: 'easeIn',
        },
      }}
      exit={{
        x: 2000,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      }}
      className=' min-h-screen overflow-hidden'
    >
      {children}
    </motion.div>
    // {/* // </LayoutGroup> */}
    // </AnimatePresence>
  )
}
