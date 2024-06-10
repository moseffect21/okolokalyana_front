import { Links } from 'application/domain/entities/links/Link'
import cocolocoPng from 'images/brandsLogo/cocoloco.png'
import musthavePng from 'images/brandsLogo/musthave.png'
import koressPng from 'images/brandsLogo/koress.png'
import burnPng from 'images/brandsLogo/burn.png'

export const linksData: { all: Links; personal: Links; support: Links; connect: Links } = {
  all: [
    {
      id: 1,
      name: 'Telegram-канал ВЛАД ОКОЛОКАЛЬЯНА',
      url: 'https://t.me/okolokalyana',
      type: 'telegram',
    },
    {
      id: 2,
      name: 'Telegram-чат ВЛАД ОКОЛОКАЛЬЯНА',
      url: 'https://t.me/okolokalyana_chat',
      type: 'telegram',
    },
    {
      id: 3,
      name: 'YouTube ОКОЛОКАЛЬЯНА',
      url: 'https://www.youtube.com/@okolokalyana',
      type: 'youtube',
    },
    {
      id: 4,
      name: 'YouTube ОКОЛОКАЛЬЯНА Live',
      url: 'https://www.youtube.com/@okolokalyana_live',
      type: 'youtube',
    },
    {
      id: 5,
      name: 'Twitch',
      url: 'https://www.twitch.tv/nosachev_vs',
      type: 'twitch',
    },
    {
      id: 6,
      name: 'ВКонтакте',
      url: 'https://vk.com/blog_hookah',
      type: 'vk',
    },
    {
      id: 7,
      name: 'Сайт',
      url: 'https://околокальяна.рф',
      type: 'browser',
    },
  ],
  personal: [
    {
      id: 1,
      name: 'Telegram-канал',
      url: 'https://t.me/nosachev_live',
      type: 'telegram',
    },
    {
      id: 2,
      name: 'Instagram',
      url: 'https://www.instagram.com/nosachev_vs',
      type: 'instagram',
    },
    {
      id: 3,
      name: 'ВКонтакте',
      url: 'https://vk.com/nosachev_vs',
      type: 'vk',
    },
    {
      id: 4,
      name: 'YouTube',
      url: 'https://www.youtube.com/@nosachev_vs',
      type: 'youtube',
    },
    {
      id: 5,
      name: 'Twitch',
      url: 'https://www.twitch.tv/nosachev_vs',
      type: 'twitch',
    },
  ],
  support: [
    {
      id: 1,
      name: 'DonationAlerts',
      url: 'https://www.donationalerts.com/r/vs_nosachev',
      type: 'donationalert',
    },
    {
      id: 2,
      name: 'Магазин на Wildberries',
      url: 'https://www.wildberries.ru/seller/1396324',
      type: 'wildberries',
    },
    {
      id: 3,
      name: 'Магазин на Ozon',
      url: 'https://www.ozon.ru/seller/okolokalyana-885784/products/?miniapp=seller_885784',
      type: 'ozon',
    },
  ],
  connect: [
    {
      id: 1,
      name: 'Менеджер',
      url: 'https://t.me/okolomanager',
      type: 'telegram',
    },
    {
      id: 2,
      name: 'Влад',
      url: 'https://t.me/nosachev_vs',
      type: 'telegram',
    },
  ],
}

export const partnersData = [
  {
    id: 1,
    name: 'burn',
    image: burnPng,
    url: 'https://t.me/burntobaccoofficial',
  },
  {
    id: 2,
    name: 'cocoloco',
    image: cocolocoPng,
    url: 'https://cocoloco.cc/',
  },
  {
    id: 5,
    name: 'koress',
    image: koressPng,
    url: 'http://koresshookahs.ru/',
  },
  {
    id: 6,
    name: 'musthave',
    image: musthavePng,
    url: 'https://musthave.ru/',
  },
]
