import React from 'react'
import s from './ArticlesMainContainer.module.scss'
import ArticleCard from 'application/presentation/components/ArticleCard'
import Link from 'next/link'
import { sortArticles } from 'application/domain/useCases/article/sortArticles'
import BackArrow from 'images/icons/black_right_arrow.svg'
import { Articles } from 'application/domain/entities/article/Article'

type ArticlesMainProps = {
  articles: Articles
}

export default function ArticlesMainContainer({ articles }: ArticlesMainProps) {
  const sortedArticles = sortArticles(articles)

  return (
    <section className={s.articlesContainer}>
      <div className={s.articlesInner}>
        <div className={s.back_text}>Статьи</div>

        <div className={s.article_container}>
          {sortedArticles.map((item: any, i: number) => {
            if (i === 0) {
              return (
                <div key={`article-row-${i}`} className={`${s.row_container}`}>
                  <div className={s.row}>
                    <div className={`${s.column} ${s.long}`}>
                      <div className={s.sub_row}>
                        {item[0] && <ArticleCard item={item[0]} type="long" categSlug="articles" />}
                      </div>
                      <div className={s.sub_row}>
                        {item[1] && (
                          <ArticleCard item={item[1]} type="short" categSlug="articles" />
                        )}
                        {item[2] && (
                          <ArticleCard item={item[2]} type="short" categSlug="articles" />
                        )}
                      </div>
                    </div>
                    <div className={`${s.column} ${s.short}`}>
                      <div className={s.short_row}>
                        {item[3] && <ArticleCard item={item[3]} type="long" categSlug="articles" />}
                      </div>
                      <div className={s.link_container}>
                        <Link href="/blog/articles" className={s.show_all}>
                          <span>Смотреть все</span> <BackArrow />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </section>
  )
}
