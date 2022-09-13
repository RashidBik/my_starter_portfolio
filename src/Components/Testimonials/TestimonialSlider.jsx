import React from 'react'
import {testimonials} from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import SwiperCore, {Pagination} from 'swiper';


SwiperCore.use([Pagination]);


const TestimonialSlider = () => {
  return (
    <>
      <Swiper
           loop={true}
           autoplay={{
               delay: 5000,
               disableOnInteraction: false,
               pauseOnMouseEnter:true,
               stopOnLastSlide:false
           }}
           slidesPerView={1}
           className='mySwiper m-0 flex justify-center'
          >  
         {testimonials.map((item, index) => {
            const {authorImg, authorText, authorName, authorPosition} = item;
            return (
               <SwiperSlide key={index} >
                <div className='flex flex-col lg:flex-row mt-4 lg:mt-12 lg:gap-2 px-2 lg:px-28'>
                 <img className='rounded-2xl' src={authorImg} alt='' />
                   <div className='flex flex-col text-center max-w-3xl ' >
                     <div className='text-center mb-4'>
                        <p className='text-xl font-bold'>{authorName}</p>
                        <p>{authorPosition}</p>
                      </div>
                      <h5 className='font-body text-xl lg:text-2xl mb-9 italic font-normal' >
                        {authorText}
                      </h5>
                    </div>
                </div> 
              </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  )
}

export default TestimonialSlider
