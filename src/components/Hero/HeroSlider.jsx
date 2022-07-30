import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroSliderItem from './HeroSliderItem';
import 'swiper/css/navigation';
import AMD from '../../images/Hero-Slider/AMD.webp';
import NVIDIA from '../../images/Hero-Slider/NVIDIA.webp';
import INTEL from '../../images/Hero-Slider/Intel.webp';

import { Navigation, A11y, Autoplay } from 'swiper';

const HeroSlider = () => {
	const images = [AMD, NVIDIA, INTEL];
	return (
		<Swiper
			slidesPerView={1}
			modules={[Navigation, A11y, Autoplay]}
			navigation
			allowTouchMove={false}
			loop={true}
			autoplay={{
				delay: 4000,
				disableOnInteraction: false,
			}}>
			{images.map((image, i) => (
				<SwiperSlide key={i}>
					<HeroSliderItem image={image}></HeroSliderItem>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeroSlider;
