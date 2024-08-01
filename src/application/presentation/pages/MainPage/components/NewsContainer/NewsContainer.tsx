import React from 'react'
import s from './NewsContainer.module.scss'
import { newsTestData } from 'application/presentation/components/NewsCard/newsTestData'
import NewsCard from 'application/presentation/components/NewsCard'

export default function NewsContainer() {
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
          {
            newsTestData.map((item) => (
              <NewsCard
                key={item.id}
                date={item.date}
                title={item.title}
                content={item.content}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
