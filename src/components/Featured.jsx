import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index)=> {
    cards[index].start({y: "0"});
  }
  const handleHoverEnd = (index)=> {
    cards[index].start({y: "100%"});
  }

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 '>
            <h1 className='text-6xl font-["Neue_Montreal_Regular"] tracking-tight'>Featured projects</h1>
        </div>

        <div className='px-20'>
          <div className="cards w-full flex gap-10 mt-10">
            <motion.div onHoverStart={()=> handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className='cardcontainer relative w-1/2 h-[75vh] '>
              <h1 className='absolute flex text-[#fff] font-["Neue Montreal"] font-semibold overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl leading-none tracking-tight'>
                {"FYDE".split('').map((item,index) =>
              <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0, 0.55, 0.45, 1], delay: index*.01}} className="inline-block">{item}</motion.span>)}
              </h1>

              <div className="card w-full h-full rounded-[12px] overflow-hidden">
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
              </div>
            </motion.div>

            <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[75vh] '>
              <div className="card w-full h-full rounded-[12px] overflow-hidden">
                  <h1 className='absolute flex overflow-hidden text-[#fff] font-["Neue Montreal"] font-semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl leading-none tracking-tight'>
                  {"TRAWA".split('').map((item,index) =>
                  <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0, 0.55, 0.45, 1], delay: index*.01}} className="inline-block">{item}</motion.span>)}
                  </h1>

                <img className='w-full h-full bf-cover' src="https://ochi.design/wp-content/uploads/2023/08/TRAWA_WEB_1-1340x740.jpg" alt="" />
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  )
}
export default Featured