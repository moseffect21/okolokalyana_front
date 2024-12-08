import React from 'react'
import s from './NavList.module.scss'
import ActiveLink from '../../uiComponents/ActiveLink'

const links = [
  { id: 1, name: 'Главная', link: '/' },
  { id: 2, name: 'Статьи', link: '/blog/articles' },
  // { id: 3, name: 'Видео', link: '/blog/video' },
  { id: 4, name: 'Прокурочный цех', link: '/smokingroom' },
  // { id: 5, name: 'Шоурум', link: '/showroom' },
  { id: 6, name: 'Taplink', link: '/links' },
  { id: 7, name: 'О нас', link: '/about' },
  { id: 8, name: 'Партнеры', link: '/partners' },
  // { id: 9, name: 'Новости', link: '/news' },
]

export default function NavList() {
  return (
    <div className={s.container}>
      {links.map(item => (
        <ActiveLink
          key={`navlink_${item.id}`}
          className={s.item}
          activeClassName={s.active}
          href={item.link}
        >
          {item.name.toLocaleUpperCase()}
        </ActiveLink>
      ))}
    </div>
  )
}
