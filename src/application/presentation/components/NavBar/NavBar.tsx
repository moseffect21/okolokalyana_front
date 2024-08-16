import React from 'react'
import s from './NavBar.module.scss'
import SearchField from './components/SearchField'
import NavList from './components/NavList'
import SocialLinks from './components/SocialLinks'
import { DesktopContainer } from '../uiComponents/AdaptiveContainers'

export default function NavBar() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <DesktopContainer>
          <SearchField />
        </DesktopContainer>
        <NavList />
        <SocialLinks />
      </div>
    </div>
  )
}
