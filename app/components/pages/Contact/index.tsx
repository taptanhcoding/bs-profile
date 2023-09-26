import React from 'react'
import PageLayout from '../layouts/pageLayout'
import {CgMail} from 'react-icons/cg'
import {SiZalo} from 'react-icons/si'
import Link from 'next/link'

export  function Contact() {
  return (
    <PageLayout description='GET IN TOUCH' title="Contact">
      <div className='flex flex-row'>
        <div className='flex-1'>
          <div className='flex flex-row items-center text-[#2c98f0] mb-2'>
              <div className='w-[100px] h-[100px] bg-[#f2f3f7] inline-flex items-center justify-center'>
                <CgMail className="text-3xl "/>
              </div>
              <Link href="mailto:chuyendev@gmail.com" className='ml-2'>
                chuyendev@gmail.com
              </Link>

          </div>
          <div className='flex flex-row items-center text-[#2c98f0]'>
              <div className='w-[100px] h-[100px] bg-[#f2f3f7] inline-flex items-center justify-center'>
                <SiZalo className="text-3xl "/>
              </div>
              <span className='ml-2'>
                0349820402
              </span>
          </div>
        </div>
        <div className='flex-1'>Any idea for you website? Please contact.</div>
      </div>
    </PageLayout>
  )
}
