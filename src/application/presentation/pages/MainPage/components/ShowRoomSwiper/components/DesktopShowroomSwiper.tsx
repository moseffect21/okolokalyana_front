import { DesktopContainer } from 'application/presentation/components/uiComponents/AdaptiveContainers'
import { Swiper, SwiperSlide } from 'swiper/react'
import NextBtn from 'images/icons/next-button.svg'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'
import cn from 'classnames'
import s from './DesktopShowroomSwiper.module.scss'
import { Product } from 'application/domain/entities/product/Product'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

type DesktopShowroomSwiperProps = {
  products: Product[]
}

const DesktopShowroomSwiper = ({ products }: DesktopShowroomSwiperProps) => {
  const swiperRef = useRef<any>()
  const [slideIndex, setSlideIndex] = useState<number>(0)
  const onBtnClick = (type: 'next' | 'prev') => () => {
    if (type === 'next') {
      swiperRef.current.slideNext()
    } else {
      swiperRef.current.slidePrev()
    }
  }
  return (
    <DesktopContainer>
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
        className={s.swiper}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChangeTransitionEnd={swiper => setSlideIndex(swiper.activeIndex)}
      >
        {products.map(product => {
          const image = product.images ? JSON.parse(product.images)[0] : ''
          return (
            <SwiperSlide key={`product_${product.id}`} className={s.slide}>
              <Link
                href={`/showroom/${product.category?.slug || 'product'}/${
                  product.slug || product.id
                }`}
                className={s.product}
              >
                <StoredImage src={image} alt="" width={240} height={240} className={s.img} />
                <div className={s.product_name}>{product.name}</div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div
        className={cn(s.prevBtn, { [s.disabled]: slideIndex === 0 })}
        onClick={onBtnClick('prev')}
      >
        <NextBtn />
      </div>
      <div
        className={cn(s.nextBtn, { [s.disabled]: slideIndex === products.length - 1 })}
        onClick={onBtnClick('next')}
      >
        <NextBtn />
      </div>
    </DesktopContainer>
  )
}

export default DesktopShowroomSwiper
