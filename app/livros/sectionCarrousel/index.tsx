import Styles from './CarosselLivros.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import CardsInfo from './data/cardsInfo.json';
import Card from './cards/card';


export default function SectionCarrousel() {
    return (
        <>
            <Swiper
                className={'mySwiper'}
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={'auto'}
                spaceBetween={15}
                navigation={true}
                loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1080: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                pagination={{ clickable: true }}
            >

                {CardsInfo.map(item => (
                    <SwiperSlide key={item.id}>
                        <Card {...item} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}