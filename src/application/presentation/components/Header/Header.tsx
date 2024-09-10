import React, { useEffect, useState } from 'react'
import LogoSvg from 'images/logo.svg'
import Burger from 'images/icons/burger_icon.svg'
import Close from 'images/icons/close_icon.svg'
import s from './Header.module.scss'
import NavBar from '../NavBar'
import Link from 'next/link'
import { DesktopContainer, MobileContainer } from '../uiComponents/AdaptiveContainers'
import cn from 'classnames'
import Router from 'next/router'

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>()
  const burgerClickHandler = () => setShowMenu(prev => !prev)

  useEffect(() => {
    document.body.className = showMenu ? 'modal_opened' : ''
  }, [showMenu])

  useEffect(() => {
    const handleRouteDone = () => setShowMenu(false)

    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return (
    <>
      <DesktopContainer>
        <NavBar />
        <header className={s.header}>
          <div className={s.headerLeft}></div>
          <Link className={s.logo} href="/">
            <LogoSvg />
          </Link>
          <div className={s.btnContainer}></div>
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
          <div className={s.headerRight}></div>
        </header>
        <div className={cn(s.mobileMenu, { [s.opened]: showMenu })}>
          <NavBar />
        </div>
      </MobileContainer>
    </>
  )
}

export default Header
