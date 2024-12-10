"use client"
import React from 'react'
import Link from 'next/link';

const BackBtn = () => 
{
  return (
   <Link href={"/"} className='text-4xl '>{"🔙"}</Link>
  )
}

export default BackBtn
