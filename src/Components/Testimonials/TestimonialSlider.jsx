import React from 'react'
import {testimonials} from '../../data'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/grid";
// import SwiperCore, {Grid, Pagination} from 'swiper';
import Carousel from 'nuka-carousel'


// SwiperCore.use([Pagination]);


const TestimonialSlider = () => {
  return (
    <>
      <Carousel 
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // modules={[Grid,Pagination]}
          // pagination = {{ clickable: true,}}
          // slidesPerView={3}
          // grid={{rows:1, fill: "row"}}
          // spaceBetween={30}
          // className='mySwiper'
          >  
         {testimonials.map((item, index) => {
            const {authorImg, authorText, authorName, authorPosition} = item;
            return (
               <div key={index} className='mySwiper'>
                <div className='flex flex-col lg:flex-row mt-4 lg:mt-12 lg:gap-2 px-28'>
                 <img className='rounded-2xl' src={authorImg} alt='' />
                   <div className='flex flex-col text-center max-w-3xl ' >
                     <div className='text-center mb-4'>
                        <p className='text-xl font-bold'>{authorName}</p>
                        <p>{authorPosition}</p>
                      </div>
                      <h5 className='font-body text-2xl mb-9 italic font-normal' >
                        {authorText}
                      </h5>
                    </div>
                </div> 
              </div>
            )
        })}
      </Carousel>
    </>
  )
}

export default TestimonialSlider
