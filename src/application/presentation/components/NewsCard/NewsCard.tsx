import React from 'react'
import s from './NewsCard.module.scss'
import Link from 'next/link'
import { Article } from 'application/domain/entities/article/Article'
import dayjs from 'dayjs'

type NewsCardProps = {
  item: Article
}

const NewsCard = ({ item }: NewsCardProps) => {
  const date = dayjs(item.updated_at).format('DD.MM.YY')
  const href = `/blog/articles/${item.slug || item.id}`
  return (
    <Link href={href} className={s.newCard}>
      <div className={s.newCardDate}>
        <span>{date}</span>
      </div>
      <div className={s.newCardDescription}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </Link>
  )
}

export default NewsCard
