import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/effect-cards'
import s from './ShowroomSwiper.module.scss'
import { Product } from 'application/domain/entities/product/Product'
import Link from 'next/link'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'
import { MobileContainer } from 'application/presentation/components/uiComponents/AdaptiveContainers'

type MobileShowroomSwiperProps = {
  products: Product[]
}

const MobileShowroomSwiper = ({ products }: MobileShowroomSwiperProps) => {
  return (
    <MobileContainer>
      <Swiper effect={'cards'} modules={[EffectCards]} className={s.swiper} speed={300}>
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
                <div className={s.shadow}></div>
                <div className={s.product_name}>{product.name}</div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </MobileContainer>
  )
}

export default MobileShowroomSwiper
