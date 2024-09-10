import React from 'react'
import s from './Footer.module.scss'
import NavList from '../NavBar/components/NavList'
import LogoSvgFooter from 'images/logoSvgFooter.svg'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <NavList direction='horizontal' fontSize='1rem' color='#FFFFFF33'/>
      <LogoSvgFooter />
    </footer>
  )
}

export default Footer