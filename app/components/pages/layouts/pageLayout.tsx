import React from 'react'
import { childrenProps } from '../../interfaces/childrenProps'

interface pageLayoutProp extends childrenProps {
description?: string;
title?: string;
}

export default function PageLayout({children,description,title} : pageLayoutProp) {
  return (
    <div className='pt-[60px] pb-[135px] px-10 min-h-screen'>
        <span className='block mb-[15px] text-[10px] uppercase text-[#999999] font-[500] tracking-[5px]'>{description}</span>
        <h2 className="text-[18px] mb-16 font-bold uppercase leading-[1.8] tracking-[5px] font-fair_play">{title}</h2>
        {children}
    </div>
  )
}
