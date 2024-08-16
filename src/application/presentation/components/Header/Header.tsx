import React, { useEffect, useState } from 'react'
import LogoSvg from 'images/logo.svg'
import Login from 'images/icons/login.svg'
import Burger from 'images/icons/burger_icon.svg'
import Close from 'images/icons/close_icon.svg'
import s from './Header.module.scss'
import NavBar from '../NavBar'
import Link from 'next/link'
import Button from '../uiComponents/Button'
import { DesktopContainer, MobileContainer } from '../uiComponents/AdaptiveContainers'
import cn from 'classnames'

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>()
  const burgerClickHandler = () => setShowMenu(prev => !prev)
  useEffect(() => {
    document.body.className = showMenu ? 'modal_opened' : ''
  }, [showMenu])
  return (
    <>
      <DesktopContainer>
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
      </DesktopContainer>
      <MobileContainer>
        <header className={s.header}>
          <div className={s.headerLeft} onClick={burgerClickHandler}>
            {showMenu ? <Close /> : <Burger />}
          </div>
          <Link className={s.logo} href="/">
            <LogoSvg />
          </Link>
          <div className={s.headerRight}>
            <Login />
          </div>
        </header>
        <div className={cn(s.mobileMenu, { [s.opened]: showMenu })}>
          <NavBar />
        </div>
      </MobileContainer>
    </>
  )
}

export default Header
