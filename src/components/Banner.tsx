"use client"
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/app/styles/slider.css';
import 'swiper/css/navigation';
// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation} from 'swiper/modules';

const Banner = () => {
  
  return (
    <div className='h-screen w-[90%] mx-auto'>
   <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 70,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow,  Autoplay, Pagination, Navigation]}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/006/966/135/small/medicine-doctor-holding-red-heart-shape-in-hand-with-medical-icon-network-connection-modern-virtual-screen-interface-service-mind-and-medical-technology-network-concept-photo.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://millenniummedicalcare.com/wp-content/uploads/primary-medical-care-2106.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://medtechpioneers.org/wp-content/uploads/2023/02/healthcare-or-medicalcare.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://marketplace.canva.com/EAGS_jwHgMU/1/0/400w/canva-blue-and-white-illustrative-medical-healthcare-presentation-DkscyQ5__N8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.icumed.com/media/djij5djt/ivtherapybanner_mobile.png?format=webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKmA9V_doJcqjFq5JXz_8rgA_8ockjz-ITfr93-qMjeM97Q_omlSAy6-HRxcshipx1gE&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/id/1437830105/photo/cropped-shot-of-a-female-nurse-hold-her-senior-patients-hand-giving-support-doctor-helping.jpg?s=612x612&w=0&k=20&c=oKR-00at4oXr4tY5IxzqsswaLaaPsPRkdw2MJbYHWgA=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQ8rvCC43_L9lliQ7jxeFlS7Fy_2w4g3IdQ&s" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/02/full/1712057601-6389.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner