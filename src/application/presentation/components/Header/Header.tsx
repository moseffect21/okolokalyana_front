import React from 'react'
import LogoSvg from 'images/logo.svg'
import s from './Header.module.scss'
import NavBar from '../NavBar'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <NavBar />
      <div className={s.header}>
        <Link className={s.logo} href="/">
          <LogoSvg />
        </Link>
      </div>
    </>
  )
}

export default Header
