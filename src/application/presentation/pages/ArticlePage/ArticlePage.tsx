import { Article } from 'application/domain/entities/article/Article'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { fetchArticle } from 'application/domain/useCases/article/getArticle'
import getCategoryName from 'application/domain/useCases/category/getCategoryName'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaArticlePage } from 'application/presentation/meta/MetaContent'
import React, { useMemo } from 'react'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'
import cn from 'classnames'
import s from './ArticlePage.module.scss'
import { HTMLReactReplacer } from 'application/presentation/utils/htmlReactReplacer'
import formatters from './formatters'

export const getArticlePageServerSideProps = async ({ params }: GetServerSideDefaultProps) => {
  if (!params?.slug) {
    return {
      notFound: true,
    }
  }
  try {
    const articleResponse = await fetchArticle(params.slug as string)
    return {
      props: {
        article: articleResponse.article,
        category: params.category,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type ArticlePageProps = {
  article: Article
  category: string
}

export default function ArticlePage({ article, category }: ArticlePageProps) {
  const categoryTitle = getCategoryName(category)

  const parsedHTML = useMemo(() => HTMLReactReplacer(article.content, formatters), [article])

  return (
    <>
      <MetaArticlePage article={article} />
      <PageLayout
        title={article.title}
        withBackButton
        breadCrumbs={[
          { id: 1, name: 'Главная', link: '/' },
          { id: 2, name: categoryTitle, link: `/blog/${category}` },
          { id: 3, name: article.title },
        ]}
      >
        <div className={s.container}>
          <div className={cn(s.preview, { [s.video]: article.type === 'video' })}>
            {article.type === 'video' ? (
              <iframe
                width="560"
                height="315"
                src={article.url || ''}
                title={article.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <StoredImage
                className={s.stored_img}
                src={article.preview_img}
                alt=""
                width={1600}
                height={800}
              />
            )}
          </div>
          <div className={s.inner_container}>
            <div className={s.text}>{parsedHTML}</div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
