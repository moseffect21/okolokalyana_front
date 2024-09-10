import React from 'react'
import StoredImage from '../StoredImage'
import Link from 'next/link'
import s from './Cards.module.scss'

type Card = {
  id: number
  name: string
  photo?: string | null
  slug?: string
}

type CardItemProps<T> = {
  card: T
  cardLinkPrefix: string
}

function BowlItem<T extends Card>({ card, cardLinkPrefix }: CardItemProps<T>) {
  return (
    <Link className={s.card} href={`${cardLinkPrefix}${card.slug || card.id}`}>
      <div className={s.photo_container}>
        <StoredImage src={card.photo || ''} alt="" width={200} height={200} className={s.photo} />
      </div>
      <div className={s.name}>
        <div>{card.name}</div>
      </div>
    </Link>
  )
}

type CardsProps<T> = {
  data: T[]
  cardLinkPrefix: string
}

function Cards<T extends Card>({ data, cardLinkPrefix }: CardsProps<T>) {
  return (
    <div className={s.container}>
      {data.map(item => (
        <BowlItem key={`card_item_${item.id}`} card={item} cardLinkPrefix={cardLinkPrefix} />
      ))}
    </div>
  )
}

export default Cards
