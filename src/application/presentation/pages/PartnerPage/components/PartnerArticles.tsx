import React from 'react'

import s from './PartnerArticles.module.scss'

import { Article, Articles } from 'application/domain/entities/article/Article'
import Link from 'next/link'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'

type ArticleItemProps = {
  article: Article
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  const url = `/blog/${article.type}s/${article.id}`
  return (
    <Link className={s.item} href={url}>
      <div className={s.img}>
        <StoredImage
          src={article.preview_img}
          alt=""
          width={300}
          height={150}
          className={s.image}
        />
        <div className={s.shadow} />
      </div>
      <div className={s.name}>{article.title}</div>
    </Link>
  )
}

type PartnerArticlesProps = {
  articles: Articles
  type: 'articles' | 'videos'
}

const PartnerArticles = ({ articles, type }: PartnerArticlesProps) => {
  return (
    <div className={s.container}>
      <div className={s.title}>{type === 'videos' ? 'Видео' : 'Статьи'}</div>
      <div className={s.articles}>
        {articles.map(item => (
          <ArticleItem key={`article_item_${item.id}`} article={item} />
        ))}
      </div>
    </div>
  )
}

export default PartnerArticles
