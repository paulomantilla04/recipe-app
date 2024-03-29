import React from 'react'
import Container from '../components/Container'
import plate from '../assets/plate.svg';
import sad from '../assets/sad.svg';

const Error = () => {
  return (
    <div className='parent h-screen flex items-center justify-center gap-10 bg-[#F0F5EF] max-[640px]:flex-col select-none'>
        <div><img src={sad} className="w-72 animate-spin-slow drop-shadow-xl max-[640px]:w-60"alt="" /></div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-7xl font-error'>OOPS!</h1>
            <h2 className='text-xl font-primary font-medium'>PÁGINA NO ENCONTRADA</h2>
            <h1 className='text-5xl font-primary font-black'>404</h1>
        </div>
    </div>
  )
}

export default Error