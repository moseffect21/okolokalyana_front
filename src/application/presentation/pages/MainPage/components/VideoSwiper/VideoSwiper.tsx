/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import s from './VideoSwiper.module.scss'

const VideoSwiper = () => {
  return (
    <div className={s.container}>
      <Swiper
        slidesPerView={1}
        className={s.swiper_container}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
      >
        <SwiperSlide>
          <div className={s.video_item}>
            <video
              className={s.img}
              preload="auto"
              autoPlay
              loop
              muted
              poster="/videos/promo_main_poster.jpg"
            >
              <source
                src="/videos/promo_main.mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
            </video>
            <div className={s.shadow} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default VideoSwiper
