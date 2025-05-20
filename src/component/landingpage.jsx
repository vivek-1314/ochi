import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpLong } from "react-icons/fa6";

function landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-20">
            <div className="masker">
                  {["we create", "eye-opening", "presentation"].map((item, index) => {
                    return (
                    <div key={index} className="flex items-center text-center">
                      {index === 1 && (<motion.div initial={{width:0}} animate={{width:'9.5%'}} transition={{ease: [0.85, 0, 0.15, 1] , duration: 0.8 , delay: 1}} className="h-[5.6vw] w-[8vw] overflow-hidden relative top-[0.53vw] rounded-md mr-2 bg-red-400">
                        <img className='h-full w-full bg-cover' src="https://i.pinimg.com/736x/9b/ea/67/9bea67b08810012f4f30878a11a2f6ef.jpg" alt="" />
                      </motion.div>)}
                      <h1 className="text-[9vw] uppercase font-founders-grotesk leading-[7.5vw]">
                          {item}
                      </h1>
                    </div>);
                  })}
            </div>
        </div>
        <div className="border-t-[1px] border-zinc-100  text-2xl mt-20 flex justify-between px-20 items-center pt-2">
          {["For public and private companies" , "From the first pitch to IPO"].map((item, index) => (
            <p key={index} className="text-zinc-300 text-[1rem] font-light tracking-tighter">
              {item}
            </p>
          ))}
          <div className="start flex items-center gap-2">
            <div className="px-4 py-1 uppercase border-[1px] leading-[1.5rem] border-zinc-500 text-[1rem] font-light tracking-tighter rounded-full">start the project</div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center border-[1px] border-zinc-500">
              <span className="rotate-[45deg]"><FaArrowUpLong/></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default landingpage