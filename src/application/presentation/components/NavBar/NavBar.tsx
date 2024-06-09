import React from 'react'
import s from './NavBar.module.scss'
import SearchField from './components/SearchField'
import NavList from './components/NavList'
import SocialLinks from './components/SocialLinks'

export default function NavBar() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <SearchField />
        <NavList />
        <SocialLinks />
      </div>
    </div>
  )
}
