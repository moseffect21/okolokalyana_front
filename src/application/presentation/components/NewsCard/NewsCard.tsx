import React from 'react'
import s from './NewsCard.module.scss'
import Link from 'next/link'
import type { News } from 'application/domain/entities/news/News'

type NewsCardProps = {
  item: News
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <Link href={`/news/${item.id}`} className={s.newCard}>
      <div className={s.newCardDate}>
        <span>{item.created_at}</span>
      </div>
      <div className={s.newCardDescription}>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    </Link>
  )
}

export default NewsCard
