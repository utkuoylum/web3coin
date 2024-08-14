'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '@/components/Transition'


export default function Template({children}) {
  return (
    <AnimatePresence mode='wait'>
    <motion.div className='h-full'>
      <Transition />
      {children}
    </motion.div>
  </AnimatePresence>

  )
}
