import React from 'react'
import s from './NewsContainer.module.scss'
import NewsCard from 'application/presentation/components/NewsCard'
import { Article } from 'application/domain/entities/article/Article'

type NewsContainerProps = {
  news: Article[]
}

export default function NewsContainer({ news }: NewsContainerProps) {
  return (
    <section className={s.newsContainer}>
      <div className={s.newsInner}>
        <div className={s.titleContainer}>
          <h1>
            Последние обновления
            <br />
            ОКОЛОКАЛЬЯНА
          </h1>
        </div>
        <div className={s.newsBlock}>
          {news.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
