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
            <SwiperSlide><img src="./AboutUs-1.png" alt="Image 1" /></SwiperSlide>
            <SwiperSlide><img src="./AboutUs-2.png" alt="Image 2" /></SwiperSlide>
            <SwiperSlide><img src="./AboutUs-3.png" alt="Image 3" /></SwiperSlide>
            <SwiperSlide><img src="./AboutUs-4.png" alt="Image 4" /></SwiperSlide>
        </Swiper>
    );
}

export default ImageSlider;