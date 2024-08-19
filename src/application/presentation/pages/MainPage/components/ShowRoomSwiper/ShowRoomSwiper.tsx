import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import slide1 from 'images/showroomImg/showroom 180.png'
import slide2 from 'images/showroomImg/showroom 181.png'
import slide3 from 'images/showroomImg/showroom 182.png'
import slide4 from 'images/showroomImg/showroom 183.png'
import slide5 from 'images/showroomImg/showroom 184.png'
import BackArrow from 'images/icons/black_right_arrow.svg'
import NextBtn from 'images/icons/next-button.svg'
import PrevBtn from 'images/icons/prev-button.svg'
import Image from 'next/image'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import s from './ShowRoomSwiper.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import Link from 'next/link'
import ShowMoreLink from 'application/presentation/components/uiComponents/ShowMoreLink'

const imgData = [slide1, slide2, slide3, slide4, slide5]

const ShowRoomSwiper = () => {
  return (
    <section className={s.container}>
      <div className={s.showRoomSwiperInner}>
        <div className={s.black_text}>Шоурум</div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: false,
          }}
          navigation={{
            // nextEl: `.${s.nextBtn}`,
            // prevEl: `.${s.prevBtn}`,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Navigation]}
          className={s.swiper_container}
        >
          {imgData.map((item, index) => (
            <SwiperSlide key={index} className={s.swiperSlide}>
              <Link key={index} href="#">
                <Image src={item} alt="" />
              </Link>
            </SwiperSlide>
          ))}
          {/* <div className={s.sliderController}>
            <div className={s.prevBtn}>
              <PrevBtn />
            </div>
            <div className={s.nextBtn}>
              <NextBtn />
            </div>
          </div> */}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
        </Swiper>
        <ShowMoreLink color='black' href='/showroom' />
      </div>
    </section>
  )
}

export default ShowRoomSwiper
