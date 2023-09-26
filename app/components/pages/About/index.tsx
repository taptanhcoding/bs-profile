import React from 'react'
import PageLayout from '../layouts/pageLayout'

export  function About() {
  return (
    <PageLayout description='about me' title='Who i am ?'>
      <span className="font-bold">{"Hi, I'm Le Cong Chuyen"}</span>, a website developer. If you have an idea for creating a website to address certain issues but don't know how to go about it, I can assist you. I have experience in developing websites for various purposes such as economy, business, film, and more.
    </PageLayout>
  )
}
