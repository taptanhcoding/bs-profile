"use client"

import React from 'react'
import { childrenProps } from '../interfaces/childrenProps'
import Sidebar from './sidebars/sideabar'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


export default function ProfileLayout({children}:childrenProps) {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className='max-w-full w-[1136px] my-0 mx-auto bg-white relative'>
        <Sidebar/>
        <div className='md:ml-[300px]'>{children}</div>
    </div>
  )
}
