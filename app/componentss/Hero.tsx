import React from 'react'
import Image from 'next/image'
import { Store, Truck, WalletCards } from 'lucide-react'

const Hero = () => {
    return (
        <div id='home'>
            <div className='flex pt-16 justify-center bg-gray-200'>
                <div className='relative flex flex-col items-center overflow-hidden group'>
                    <img src='man.jpeg' alt='man' className='w-[420px] h-[500px] transition-transform duration-300 group-hover:scale-110' />
                    <p className='absolute bottom-1/2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-green-500 px-4 py-2 border border-green-500'>MAN</p>
                </div>
                <div className='relative flex flex-col items-center overflow-hidden group'>
                    <img src='woman.jpg' alt='woman' className='w-[420px] h-[500px] transition-transform duration-300 group-hover:scale-110' />
                    <p className='absolute bottom-1/2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-green-500 px-4 py-2 border border-green-500'>WOMAN</p>
                </div>
                <div className='relative flex flex-col items-center overflow-hidden group'>
                    <img src='kids.jpeg' alt='kids' className='w-[420px] h-[500px] transition-transform duration-300 group-hover:scale-110' />
                    <p className='absolute bottom-1/2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-green-500 px-4 py-2 border border-green-500'>KIDS & BABY</p>
                </div>
            </div>
            
        </div>
      )
}

export default Hero