import { motion, transform } from 'framer-motion';
import React from 'react';
import {brands} from '../data'


function Brands() {
    

  return (
    <div className='min-h-[90px] flex items-center bg-gray-900'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap 
      justify-evenly'>
        {brands.map((brand, index) =>{
            return (
                <motion.div 
              
                whileTap={{
                  scale: 1.2,
                  transation:{
                    type: 'spring',
                    yoyo: 'infinity'
                  }
                }}
                key={index}>
                    <img src={brand.img} alt='' />
                </motion.div> 
            )
        })}
      </div>
    </div>
  )
}

export default Brands
