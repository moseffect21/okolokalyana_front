import React from 'react'

import s from './ArticleCard.module.scss'
import Link from 'next/link'
import StoredImage from '../uiComponents/StoredImage'
import dayjs from 'dayjs'
import { Article } from 'application/domain/entities/article/Article'
import PlaySvg from 'images/icons/play_button.svg'

type Props = {
  item: Article
  type?: 'long' | 'short' | 'high'
  categSlug: string
}
const ArticleCard = ({ item, type, categSlug }: Props) => {
  const isVideo = categSlug === 'video'
  return (
    <Link
      href={`/blog/${categSlug}/${item.slug}`}
      className={`${s.card} ${type === 'long' ? s.long : ''} ${type === 'short' ? s.short : ''} ${
        type === 'high' ? s.high : ''
      } ${categSlug === 'video' && s.video}`}
    >
      <StoredImage src={item.preview_img} width={600} height={300} className={s.back_img} alt="" />
      <div className={s.gradient} />
      <div className={s.shadow} />
      <div className={s.anim}>
        <div className={s.title}>{item.title}</div>
        <div className={s.description}>{item.preview_text}</div>
      </div>
      {isVideo ? (
        <div className={s.time_block}>
          <PlaySvg />
          <div className={s.time}>{item.time}</div>
        </div>
      ) : (
        <div className={s.info}>
          <div className={s.date}>{dayjs(item.created_at).format('DD MMMM YYYY')}</div>
          {item.authors && !!item.authors.length && (
            <div className={s.author}>Автор: {item.authors[0].name}</div>
          )}
        </div>
      )}
    </Link>
  )
}

export default ArticleCard
