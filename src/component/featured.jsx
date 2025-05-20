import React, { useState } from 'react'
import { motion } from 'framer-motion' 
import { time } from 'framer-motion/client'

function featured() {
    const [ishover , sethover] = useState(false) ;
    const [ishover2 , sethover2] = useState(false) ;

  return (
    <div className='w-full py-10 bg-zinc-900'>
        <div className="w-full px-14 pb-6 text-[3.3vw] border-b-[0.09rem] border-zinc-600 " >Featured projects</div>
        <div className="relative w-full py-10 px-14 flex gap-8 ">
            <h1 className='absolute overflow-hidden  top-1/2 left-[49%] translate-x-[-50%] translate-y-[-50%]'>
            {"FIDE".split("").map((item , index) => (
                <motion.span className='inline-block text-[6rem] font-bold text-[#bad752]' initial={{y: "100%"}} animate={ishover ? ({y:0}) : ({y:"100%"})} transition={{ease: [0.33, 1, 0.68, 1], delay: index*0.05 , durarion:8}} >{item}</motion.span>
            ))}
            </h1>
            <h1 className='absolute overflow-hidden top-1/2 left-[51%] translate-x-[-50%] translate-y-[-50%]'>
            {"VISE".split("").map((item , index) => (
                <motion.span className='inline-block text-[6rem] font-bold text-[#cdea68]' initial={{y: "100%"}} animate={ishover2 ? ({y:0}) : ({y:"100%"})} transition={{ease: [0.33, 1, 0.68, 1], delay: index*0.05}}>{item}</motion.span>
            ))}
            </h1>

            <div onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} className="w-1/2 h-[80vh] flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                    <div className="h-[0.8vw] w-[0.8vw] rounded-full bg-white"></div>
                    <span className='uppercase leading-none text-[1.15rem] font-extralight'>cardboard spaceship</span>
                </div>
                <div className="w-full h-[75vh] rounded-md overflow-hidden">
                    <div className="h-full w-full rounded-md">
                        <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                    </div>
                </div>
                <div className=""></div>
            </div>
            <div onMouseEnter={() => sethover2(true)} onMouseLeave={() => sethover2(false)} className="w-1/2 h-[80vh] flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                    <div className="h-[0.8vw] w-[0.8vw] rounded-full bg-white"></div>
                    <span className='uppercase leading-none text-[1.15rem] font-extralight'>ah2 & matt horn</span>
                </div>
                <div className="w-full h-[75vh] rounded-md overflow-hidden">
                    <div className="h-full w-full rounded-md">
                        <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    </div>
  )
}

export default featured 