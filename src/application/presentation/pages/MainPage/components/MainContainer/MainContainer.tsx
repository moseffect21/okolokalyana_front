import React from 'react'
import s from './MainContainer.module.scss'
import LogoSvg from 'images/logo.svg'
import MainPhoto from 'images/main-photo.png'
import Tattoo from 'images/tattoo.png'
import Image from 'next/image'

export default function MainContainer() {
  return (
    <section className={s.mainContainer}>
      <div className={s.mainInner}>
        <div className={s.titleContainer}>
          <LogoSvg />
          <p>
            Коммьюнити ценителей кальяна, которое станет твоим проводником в околокальянный мир, в
            целую культуру, которая намного шире и богаче, чем просто «попускать дымок»
          </p>
        </div>
        <div className={s.mainImgContainer}>
          <div className={s.shadow}></div>
          <Image className={s.mainImg} src={MainPhoto} alt="" />
          <Image className={s.tattooImg} src={Tattoo} alt="" />
        </div>
      </div>
    </section>
  )
}
