import React from 'react'
import s from './ShowRoomSwiper.module.scss'
import ShowMoreLink from 'application/presentation/components/uiComponents/ShowMoreLink'
import { Product } from 'application/domain/entities/product/Product'

import DesktopShowroomSwiper from './components/DesktopShowroomSwiper'
import MobileShowroomSwiper from './components/MobileShowroomSwiper'

type ShowRoomSwiperProps = {
  products: Product[]
}

const ShowRoomSwiper = ({ products }: ShowRoomSwiperProps) => {
  return (
    <section className={s.container}>
      <div className={s.inner}>
        <div className={s.title}>Шоурум</div>
        <DesktopShowroomSwiper products={products} />
        <MobileShowroomSwiper products={products} />
        <ShowMoreLink color="black" href="/showroom" className={s.more} />
      </div>
    </section>
  )
}

export default ShowRoomSwiper
