import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".001" className='w-full py-16 bg-[#0B60B0] rounded-t-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[26vw] font-["Founders_Grotesk_X"] uppercase -mb-[10vw] pr-20'>WE ARE OCHI</motion.h1>

        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[26vw] font-["Founders_Grotesk_X"] uppercase -mb-[10vw] pr-20'>WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee