import { ArticleCategory } from 'application/domain/entities/article/ArticleCategory'
import React from 'react'
import s from './VideosContainer.module.scss'
import { sortVideos } from 'application/domain/useCases/article/sortArticles'
import ArticleCard from 'application/presentation/components/ArticleCard'
import cn from 'classnames'
import {
  DesktopContainer,
  MobileContainer,
} from 'application/presentation/components/uiComponents/AdaptiveContainers'

type VideosContainerProps = {
  articleCategory: ArticleCategory
}

const VideosContainer = ({ articleCategory }: VideosContainerProps) => {
  const category = articleCategory.slug
  const articles = articleCategory.articles.data
  const sortedArticles = sortVideos(articles)
  return (
    <>
      <DesktopContainer>
        <div className={s.video_container}>
          {sortedArticles.map((item, index: number) => {
            return (
              <div
                className={cn(s.row, { [s.reverse]: index % 2 === 1 })}
                key={`video_row_${item.long?.id || index}`}
              >
                <div className={cn(s.column, s.long)}>
                  {item.long && <ArticleCard item={item.long} type="long" categSlug={category} />}
                </div>
                <div className={cn(s.column, s.short)}>
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
      </DesktopContainer>
      <MobileContainer>
        {articles.map(item => {
          return (
            <ArticleCard
              key={`video_item_${item.id}`}
              item={item}
              type="long"
              categSlug={category}
            />
          )
        })}
      </MobileContainer>
    </>
  )
}

export default VideosContainer
