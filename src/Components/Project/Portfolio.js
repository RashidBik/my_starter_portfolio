import React from 'react'
import Projects from './Projects'


const Portfolio = () => {
  return (
    <section id='portfolio' 
    className='py-12 lg:py-32 min-h-[1000px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio 
          relative before:ablolute before:opacity-40
          before:-top-[2rem] before:-left-3/4 
          before:hidden before:lg:block text-3xl font-black'>My Latest Work
          </h2>
        <p>
          My Projects In Diffrent Feilds Are Listed Here
        </p>
        </div>
        <Projects />
      </div>
      
    </section>
  )
}

export default Portfolio

