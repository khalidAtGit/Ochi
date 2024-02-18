import React from 'react';

function About() {
  return (
    <div className='bg-[#0B60B0]'>
        <div className='w-full p-20 bg-[#40A2D8] rounded-t-3xl text-black'>
            <h1 className="font-['Neue_Montreal_Regular'] text-[3vw] leading=[3vw] tracking-tight">
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds,
                sell products, explain complex ideas, and hire great people.
            </h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-16 border-zinc-800'>
            <div className="w-1/2 font-['Neue_Montreal_Regular']">
                <h1 className='text-[3vw]'>Our approach:</h1>
                <button className='flex gap-10 uppercase items-center px-10 py-6 bg-zinc-900 mt-5 rounded-full text-white'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
                <div className='w-1/2 h-[70vh] rounded-xl bg-[#0B60B0]'></div>
            </div>
        </div>
    </div>
  );
}
export default About