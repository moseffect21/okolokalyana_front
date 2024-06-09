import React from 'react'
import VkSvg from 'images/icons/vk.svg'
import InstSvg from 'images/icons/inst.svg'
import TgSvg from 'images/icons/tg.svg'
import YoutubeSvg from 'images/icons/youtube.svg'
import s from './SocialLinks.module.scss'
import Link from 'next/link'

const links = [
  { id: 1, icon: <VkSvg />, link: 'https://vk.com/blog_hookah' },
  { id: 2, icon: <TgSvg />, link: 'https://t.me/okolokalyana' },
  { id: 3, icon: <InstSvg />, link: 'https://www.instagram.com/nosachev_vs' },
  { id: 4, icon: <YoutubeSvg />, link: 'https://www.youtube.com/@okolokalyana' },
]

export default function SocialLinks() {
  return (
    <div className={s.container}>
      {links.map(item => (
        <Link key={`social_link_${item.id}`} href={item.link} className={s.item}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
