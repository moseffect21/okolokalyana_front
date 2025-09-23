export type Link = {
  id: number
  name: string
  url: string
  type: LinkType
}

export type LinkType =
  | 'telegram'
  | 'vk'
  | 'twitch'
  | 'youtube'
  | 'browser'
  | 'instagram'
  | 'donationalert'
  | 'wildberries'
  | 'ozon'
  | 'yandex_market'

export type Links = Link[]
