import React from 'react'
import s from './NavList.module.scss'
import ActiveLink from '../../uiComponents/ActiveLink'

const links = [
  { id: 1, name: 'Статьи', link: '/blog/articles' },
  { id: 2, name: 'Видео', link: '/blog/video' },
  { id: 3, name: 'Большой ЗАБИВОЧНЫЙ ЦЕХ', link: '/mixes' },
  { id: 4, name: 'Шоурум', link: '/showroom' },
  { id: 2, name: 'Taplink', link: '/links' },
  { id: 5, name: 'О нас', link: '/about' },
  { id: 6, name: 'Партнеры', link: '/partners' },
  { id: 7, name: 'Новости', link: '/news' },
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
