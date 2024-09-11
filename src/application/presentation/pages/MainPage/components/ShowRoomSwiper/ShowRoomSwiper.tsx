import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import NextBtn from 'images/icons/next-button.svg'
import PrevBtn from 'images/icons/prev-button.svg'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import s from './ShowRoomSwiper.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import Link from 'next/link'
import ShowMoreLink from 'application/presentation/components/uiComponents/ShowMoreLink'
import { Product } from 'application/domain/entities/product/Product'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'

type ShowRoomSwiperProps = {
  products: Product[]
}

const ShowRoomSwiper = ({ products }: ShowRoomSwiperProps) => {
  const swiperRef = useRef<any>()
  const onBtnClick = (type: 'next' | 'prev') => () => {
    if (type === 'next') {
      swiperRef.current.slideNext()
    } else {
      swiperRef.current.slidePrev()
    }
  }
  return (
    <section className={s.container}>
      <div className={s.showRoomSwiperInner}>
        <div className={s.black_text}>Шоурум</div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: `${s.nextBtn}`,
            prevEl: `${s.prevBtn}`,
          }}
          modules={[EffectCoverflow, Navigation]}
          className={s.swiper_container}
          onSwiper={swiper => (swiperRef.current = swiper)}
        >
          {products.map(product => {
            const image = product.images ? JSON.parse(product.images)[0] : ''
            return (
              <SwiperSlide key={`product_${product.id}`} className={s.swiperSlide}>
                <Link href={`/showroom/${product.slug || product.id}`} className={s.product}>
                  <StoredImage src={image} alt="" width={240} height={240} className={s.img} />
                  <div className={s.product_name}>{product.name}</div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className={s.sliderController}>
          <div className={s.prevBtn} onClick={onBtnClick('prev')}>
            <PrevBtn />
          </div>
          <div className={s.nextBtn} onClick={onBtnClick('next')}>
            <NextBtn />
          </div>
        </div>
        <ShowMoreLink color="black" href="/showroom" />
      </div>
    </section>
  )
}

export default ShowRoomSwiper
