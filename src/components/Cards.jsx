import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-[#40A2D8] flex items-center px-16 gap-5'>

        <div className='cardcontainer w-1/2  h-[56vh]'>

            <div className='card relative rounded-xl w-full h-full bg-[#0B60B0] flex items-center justify-center shadow-2xl'>

                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-[#CDEA68] text-[#CDEA68]'>&copy;1997-2024</button>
            </div>
        </div>

        <div className='cardcontainer flex gap-5 justify-center w-1/2  h-[56vh]'>

            <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center shadow-2xl'>

              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 tracking-tighter'>RATING 5.0 ON CLUTCH</button>

            </div>

            <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center shadow-2xl'>

            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;1997-2024</button>

            </div>
        </div>
    </div>
  )
}
export default Cards