import React from 'react'
import LogoSvg from 'images/logo.svg'
import s from './Header.module.scss'
import NavBar from '../NavBar'

const Header = () => {
  return (
    <>
      <NavBar />
      <div className={s.header}>
        <div className={s.logo}>
          <LogoSvg />
        </div>
      </div>
    </>
  )
}

export default Header
