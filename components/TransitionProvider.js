'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from './Transition'
import { useRouter } from 'next/navigation'
export const TransitionProvider = () => {
    const router = useRouter()
  return (
    <AnimatePresence mode='wait'>
    <motion.div key={router.router + 'a'} className='h-full'>
      <Transition />
    </motion.div>
  </AnimatePresence>

  )
}
