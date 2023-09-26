"use client"

import React, { useEffect, useState } from 'react'
import { menu } from '../../data/sidebar'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './siderbar.module.scss'

interface sidebarProps {

}

const cx = classNames.bind(styles)
export default function Sidebar() {
  const [activeLink,setActiveLink] = useState<string>("home")
  useEffect(()=>{
    const homeElement = document.getElementById('home')
    const aboutElemn = document.getElementById('about')
    const skillElement = document.getElementById('skill')
    const experienceElement = document.getElementById('experience')
    const contactElement = document.getElementById('contact')
    function handleScroll() {
      const homeTop = homeElement.getBoundingClientRect().top;
      const aboutTop = aboutElemn.getBoundingClientRect().top;
      const skillTop = skillElement.getBoundingClientRect().top;
      const experienceTop = experienceElement.getBoundingClientRect().top;
      const contactTop = contactElement.getBoundingClientRect().top;
      const wdToTop = window.innerHeight

      console.log({
        homeTop,
        aboutTop,
        skillTop,
        experienceTop,
        contactTop,
        wdToTop
      });
      
      if(homeTop <= wdToTop && aboutTop > 0) {
          setActiveLink('home')
      }
      else if(aboutTop <= wdToTop && skillTop >0) {
        setActiveLink('about')
      }
      else if(skillTop <= wdToTop && experienceTop>0) {
        setActiveLink('skill')
      }
      else if(experienceTop <= wdToTop && contactTop >0) {
        setActiveLink('experience')
      }
      else if(contactTop <= wdToTop) {
        setActiveLink('contact')
      }
    }

  document.getElementById('contain').addEventListener('scroll',handleScroll)

  
  return () => document.getElementById('contain').removeEventListener('scroll',handleScroll)

  },[])

  console.log(activeLink);
  
  return (
    <aside className='absolute w-[300px] bg-[#f2f3f7] top-0 left-0 h-screen pt-[3em] pb-[40px] flex flex-col text-center overflow-y-scroll'>
        <div>
          <div className="w-[150px] h-[150px] my-0 mx-auto mb-[30px] rounded-full bg-[url('https://i.pinimg.com/564x/e7/dd/38/e7dd38a1b683199ac047b78ef26f9fef.jpg')] bg-center"></div>
          <h1 className='text-[22px] font-bold font-fair_play'>Lee Cong Chuyen</h1>
          <span className="mb-[2em]">
              Website developer
          </span>
          <ul>
            {menu.map((item,i)=> <li key={i} className="flex justify-center py-2">
              <Link href={item.link} className={cx(`relative w-fit text-[12px] uppercase block py-1 `,'link',activeLink == item.id && 'active')}>
                {item.title}
              <div className={cx("absolute h-[1px] bottom-0 w-full","line")}></div>
              </Link>
            </li>)}
          </ul>
        </div>
    </aside>
  )
}
