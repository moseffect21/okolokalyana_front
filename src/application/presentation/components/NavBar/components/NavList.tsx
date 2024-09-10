import React from 'react'
import s from './NavList.module.scss'
import ActiveLink from '../../uiComponents/ActiveLink'
import cn from 'classnames'

const links = [
  { id: 1, name: 'Статьи', link: '/blog/articles' },
  { id: 2, name: 'Видео', link: '/blog/video' },
  { id: 3, name: 'Прокурочный цех', link: '/smokingroom' },
  { id: 4, name: 'Шоурум', link: '/showroom' },
  { id: 6, name: 'Taplink', link: '/links' },
  { id: 7, name: 'О нас', link: '/about' },
  { id: 8, name: 'Партнеры', link: '/partners' },
  { id: 9, name: 'Новости', link: '/news' },
]

type NavListProps = {
  direction?: 'horizontal' | 'vertical'
  className?: string
  padding?: string
  fontSize?: string
  color?: string
}

export default function NavList({
  direction = 'vertical',
  className,
  padding,
  fontSize,
  color,
}: NavListProps) {
  const style = {
    '--padding': padding,
    '--font-size': fontSize,
    '--color': color,
  } as React.CSSProperties

  return (
    <div className={cn(s.container, s[direction], className)} style={style}>
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
