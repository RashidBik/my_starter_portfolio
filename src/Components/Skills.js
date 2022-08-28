import React from 'react'
import {skills} from '../data'
import Carousel from 'nuka-carousel';

const Skills = () => {
  return (
    <div className='py-12 bg-gray-900'>
      <Carousel className='grid grid-cols-6 md:grid-flow-row ' 
        speed={200}
        cellAlign="right"
         >
        {skills.map((skill, index) =>{
            return (
                <div className='flex items-center
                justify-center ' key={index}>
                    <img src={skill.image} alt=""/>
                </div>
            )
        })}
      </Carousel>
     
    </div>
  )
}

export default Skills
