import React from 'react'
import LogoSvg from 'images/logo.svg'
import Login from 'images/icons/login.svg'
import s from './Header.module.scss'
import NavBar from '../NavBar'
import Link from 'next/link'
import Button from '../uiComponents/Button'

const Header = () => {
  return (
    <>
      <NavBar />
      <header className={s.header}>
        <div className={s.headerLeft}></div>
        <Link className={s.logo} href="/">
          <LogoSvg />
        </Link>
        <Button className={s.loginBtn} containerClassName={s.btnContainer}>
          <Login />
          Войти
        </Button>
      </header>
    </>
  )
}

export default Header
