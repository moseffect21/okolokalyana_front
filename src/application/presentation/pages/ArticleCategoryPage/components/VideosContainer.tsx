import { ArticleCategory } from 'application/domain/entities/article/ArticleCategory'
import React from 'react'
import s from './VideosContainer.module.scss'
import { sortVideos } from 'application/domain/useCases/article/sortArticles'
import ArticleCard from 'application/presentation/components/ArticleCard'

type VideosContainerProps = {
  articleCategory: ArticleCategory
}

const VideosContainer = ({ articleCategory }: VideosContainerProps) => {
  const category = articleCategory.slug
  const articles = articleCategory.articles.data
  const sortedArticles = sortVideos(articles)
  return (
    <div className={s.video_container}>
      {sortedArticles.map((item, index: number) => {
        return (
          <div
            className={`${s.row} ${index % 2 === 1 ? s.reverse : ''}`}
            key={`video_row_${item.long?.id || index}`}
          >
            <div className={`${s.column} ${s.long}`}>
              {item.long && <ArticleCard item={item.long} type="long" categSlug={category} />}
            </div>
            <div className={`${s.column} ${s.short}`}>
              {item.short?.length &&
                item.short.map(shortItem => (
                  <ArticleCard
                    key={`short_item_${shortItem.id}`}
                    item={shortItem}
                    type="short"
                    categSlug={category}
                  />
                ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default VideosContainer
