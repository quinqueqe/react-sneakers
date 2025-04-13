import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import slide from '../../assets/stan-slide.png'


const Slider = () => {
	return (
		<Swiper
		width={1000}
			modules={[Navigation, Pagination]}
			spaceBetween={20}
			slidesPerView={1}
			// navigation
			// pagination={{ clickable: true }}
			// onSlideChange={() => console.log('Слайд изменен')}
		>
			<SwiperSlide><img src={slide} alt="img" /></SwiperSlide>
			<SwiperSlide><img src={slide} alt="img" /></SwiperSlide>
			<SwiperSlide><img src={slide} alt="img" /></SwiperSlide>
		</Swiper>
	)
}

export default Slider
