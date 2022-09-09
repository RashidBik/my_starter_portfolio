import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
// import SwiperCore, {Grid, Pagination} from 'swiper';
import Carousel from 'nuka-carousel'

SwiperCore.use([Pagination]);

const Swiperslide = () => {
  return (
    <>
      <Carousel
      // modules={[Grid]}
      // slidesPerView={3}
      // grid={{rows:2, fill: "row"}}
      // spaceBetween={30}
      // pagination={{clickable: true}}
      // scrollbar={{draggable: true}}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide changed')}
      // className="mySwiper" 
      >
        <div className='w-[400px] h-[400px] bg-blue-500'>some text 1 </div>
        <div className='w-[400px] h-[400px] bg-green-500'>some text 1</div>
        <div className='w-[400px] h-[400px] bg-red-500'>some text 1  </div>
      </Carousel>
    </>
  )
}

export default Swiperslide
