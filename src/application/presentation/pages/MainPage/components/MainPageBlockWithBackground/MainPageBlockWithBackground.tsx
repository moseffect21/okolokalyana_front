import React from 'react'
import s from './MainPageBlockWithBackground.module.scss'
import Image from 'next/image'
import BackgroundImg from 'images/background2.jpg'

const MainPageBlockWithBackground = () => {
  return (
    <div className={s.mainPageBlockWithBackground}>
      <div className={s.mainPageBackgroundImg}>
        <Image
          src={BackgroundImg}
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
        <div className={s.mainPageShadow}></div>
      </div>
    </div>
  )
}

export default MainPageBlockWithBackground
