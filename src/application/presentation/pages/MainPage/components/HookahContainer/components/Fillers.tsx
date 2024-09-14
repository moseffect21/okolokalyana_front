import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation } from 'swiper/modules'
import 'swiper/css/effect-cards'
import s from './Fillers.module.scss'
import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'
import TobaccoFillerCard from 'application/presentation/components/TobaccoFillerCard'
import NextBtn from 'images/icons/next-button.svg'
import cn from 'classnames'

type FillersProps = {
  fillers: TobaccoFiller[]
}

const Fillers = ({ fillers }: FillersProps) => {
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
    <Swiper
      effect={'cards'}
      modules={[EffectCards, Navigation]}
      className={s.swiper}
      speed={300}
      onSwiper={swiper => (swiperRef.current = swiper)}
      onSlideChangeTransitionEnd={swiper => setSlideIndex(swiper.activeIndex)}
      navigation={{
        nextEl: `prev-btn`,
        prevEl: `next-btn`,
      }}
    >
      {fillers.map(filler => (
        <SwiperSlide className={s.slide} key={`filler_item_${filler.id}`}>
          <TobaccoFillerCard tobaccoFiller={filler} containerClassName={s.card} />
        </SwiperSlide>
      ))}
      <div className={s.sliderController}>
        <div
          className={cn('prev-btn', s.prevBtn, { [s.disabled]: slideIndex === 0 })}
          onClick={onBtnClick('prev')}
        >
          <NextBtn />
        </div>
        <div
          className={cn('next-btn', s.nextBtn, { [s.disabled]: slideIndex === fillers.length - 1 })}
          onClick={onBtnClick('next')}
        >
          <NextBtn />
        </div>
      </div>
    </Swiper>
  )
}

export default Fillers
