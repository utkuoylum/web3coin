'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from './Transition'


export const TransitionProvider = ({children}) => {
    const path = usePathname()
  return (
    <AnimatePresence mode='wait'>
    <motion.div key={path} className='h-full'>
      <Transition />
      {children}
    </motion.div>
  </AnimatePresence>

  )
}
