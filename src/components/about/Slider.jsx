import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
    
const ImageSlider = () => {
    return (
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src="./aboutImg/AboutUs-1.webp" alt="Image 1" /></SwiperSlide>
            <SwiperSlide><img src="./aboutImg/AboutUs-2.webp" alt="Image 2" /></SwiperSlide>
            <SwiperSlide><img src="./aboutImg/AboutUs-3.webp" alt="Image 3" /></SwiperSlide>
            <SwiperSlide><img src="./aboutImg/AboutUs-4.webp" alt="Image 4" /></SwiperSlide>
        </Swiper>
    );
}

export default ImageSlider;