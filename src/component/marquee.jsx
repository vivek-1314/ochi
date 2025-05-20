import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'

function marquee() {
  return ( 
    <div data-scroll data-scroll-section data-scroll-speed="-0.4" className='relative top-[23rem] w-full py-10 bg-[#004d43] rounded-tr-3xl rounded-tl-3xl'>
        <div className="text pb-4 mt-10 mb-16 border-t-[0.08rem] border-b-[0.08rem] border-zinc-400 flex overflow-hidden w-full whitespace-nowrap">
            <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ duration: 10, ease: 'linear', repeat: Infinity }} className='text-[27.18vw] uppercase font-["Founders_Grotesk"] leading-[19vw] font-semibold mr-8'>
                We are ochi 
            </motion.h1>
            <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ duration: 10, ease: 'linear', repeat: Infinity }} className='text-[27.18vw] uppercase font-["Founders_Grotesk"] leading-[19vw] font-semibold'>
                We are ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default marquee