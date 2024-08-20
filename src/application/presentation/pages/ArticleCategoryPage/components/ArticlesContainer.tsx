import React from 'react'
import s from './ArticlesContainer.module.scss'
import { ArticleCategory } from 'application/domain/entities/article/ArticleCategory'
import { sortArticles } from 'application/domain/useCases/article/sortArticles'
import ArticleCard from 'application/presentation/components/ArticleCard'
import cn from 'classnames'

type ArticlesContainerProps = {
  articleCategory: ArticleCategory
}

const ArticlesContainer = ({ articleCategory }: ArticlesContainerProps) => {
  const category = articleCategory.slug
  const articles = articleCategory.articles.data
  const sortedArticles = sortArticles(articles)

  return (
    <div className={s.article_container}>
      {sortedArticles.map((item, index: number) => {
        const isReverse = index % 2 === 1
        return (
          <div
            className={cn(s.row_container, { [s.reverse]: isReverse })}
            key={`articles_row_${item[0]?.id || index}`}
          >
            <div className={s.row}>
              <div className={cn(s.column, s.long)}>
                <div className={s.sub_row}>
                  {!isReverse
                    ? item[0] && <ArticleCard item={item[0]} type="long" categSlug={category} />
                    : item[3] && <ArticleCard item={item[3]} type="long" categSlug={category} />}
                </div>
                <div className={s.sub_row}>
                  {item[1] && <ArticleCard item={item[1]} type="short" categSlug={category} />}
                  {item[2] && <ArticleCard item={item[2]} type="short" categSlug={category} />}
                </div>
              </div>
              <div className={cn(s.column, s.short)}>
                {!isReverse
                  ? item[3] && <ArticleCard item={item[3]} type="high" categSlug={category} />
                  : item[0] && <ArticleCard item={item[0]} type="high" categSlug={category} />}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ArticlesContainer
