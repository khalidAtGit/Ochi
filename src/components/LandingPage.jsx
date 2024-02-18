import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return ( 
    <div data-scroll data-scroll-speed="-.4" className='w-full h-screen pt-1'>
      <div className='textstructure mt-52 px-20'>
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index)=>{
          return (
            <div key={index} className="masker">
              <div className="w-fit flex item-end overflow-hidden">
                {index === 1 && (
                  <motion.div initial= {{width: 0}} animate= {{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className="mr-[.5vw] w-[8vw] rounded-[3px] h-[5.8vw] top-[.82vw] relative bg-red-500"></motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75]  font-['Founders_Grotesk_X'] font-medium" >
                   {item}
                </h1>
              </div>
            </div>
        );
        })}    
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20" >
        {["For public and private companies","From the first pitch to IPO"].map((item,index) => (
        <p className="text-md font-light tracking-tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light  text-md rounded-full uppercase">START THE PROJECT</div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className='rotate-[45deg]'>
            <FaArrowUpLong/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage