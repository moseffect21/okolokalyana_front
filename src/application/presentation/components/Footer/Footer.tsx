import React from 'react'
import s from './Footer.module.scss'
import NavList from '../NavBar/components/NavList'
import LogoSvgFooter from 'images/logoSvgFooter.svg'
import Link from 'next/link'
import SocialLinks from '../NavBar/components/SocialLinks'

const footerLinks = [
  { id: 1, name: 'Статьи', link: '/blog/articles' },
  { id: 2, name: 'Видео', link: '/blog/video' },
  { id: 3, name: 'Прокурочный цех', link: '/smokingroom' },
  { id: 4, name: 'Шоурум', link: '/showroom' },
  { id: 6, name: 'Taplink', link: '/links' },
  { id: 7, name: 'О нас', link: '/about' },
  { id: 8, name: 'Партнеры', link: '/partners' },
  { id: 9, name: 'Новости', link: '/news' },
]

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.links}>
        {footerLinks.map(item => (
          <Link key={`footer_link_${item.id}`} href={item.link}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className={s.bottom}>
        <LogoSvgFooter />
        <SocialLinks className={s.social} />
      </div>
    </footer>
  )
}

export default Footer
