import React from 'react'
import LogoSvg from 'images/logo.svg'
import s from './Header.module.scss'

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <LogoSvg />
      </div>
    </div>
  )
}
