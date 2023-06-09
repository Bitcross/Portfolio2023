import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 text-purple-700 flex items-center justify-center
        rounded-full text-2xl font-bold border border-solid border-purple-700 hover:text-purple-400 hover:border-purple-400
        '
        >CM</MotionLink>
    </div>
  )
}

export default Logo