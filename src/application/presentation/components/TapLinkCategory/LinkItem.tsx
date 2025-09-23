import type { Link as LinkProps, LinkType } from 'application/domain/entities/links/Link'
import React from 'react'
import s from './LinkItem.module.scss'
import Link from 'next/link'
import BrowserSvg from 'images/linksIcons/browser.svg'
import YoutubeSvg from 'images/linksIcons/youtube.svg'
import InstSvg from 'images/linksIcons/instagram.svg'
import WbSvg from 'images/linksIcons/wildberries.svg'
import OzonSvg from 'images/linksIcons/ozon.svg'
import TwitchSvg from 'images/linksIcons/twitch.svg'
import DonationalertSvg from 'images/linksIcons/donationalerts.svg'
import VkSvg from 'images/linksIcons/vk.svg'
import TgSvg from 'images/linksIcons/telegram.svg'
import YmSvg from 'images/linksIcons/yandex_market.svg'

type Props = {
  data: LinkProps
}

const LinkIcon = ({ type }: { type: LinkType }) => {
  switch (type) {
    case 'donationalert':
      return <DonationalertSvg />
    case 'instagram':
      return <InstSvg />
    case 'ozon':
      return <OzonSvg />
    case 'telegram':
      return <TgSvg />
    case 'twitch':
      return <TwitchSvg />
    case 'vk':
      return <VkSvg />
    case 'wildberries':
      return <WbSvg />
    case 'youtube':
      return <YoutubeSvg />
    case 'yandex_market':
      return <YmSvg />
    default:
      return <BrowserSvg />
  }
}

const LinkItem = ({ data }: Props) => {
  return (
    <Link className={s.container} href={data.url}>
      <div className={s.background}>
        <div className={s.inner}>
          <div className={s.icon_container}>
            <LinkIcon type={data.type} />
          </div>
          <div className={s.text_container}>
            <div className={s.title}>{data.name}</div>
            <div className={s.subtitle}>{data.url}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default LinkItem
