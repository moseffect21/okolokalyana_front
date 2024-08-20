import { Article } from 'application/domain/entities/article/Article'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { fetchArticle } from 'application/domain/useCases/article/getArticle'
import getCategoryName from 'application/domain/useCases/category/getCategoryName'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaArticlePage } from 'application/presentation/meta/MetaContent'
import React from 'react'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'
import cn from 'classnames'
import s from './ArticlePage.module.scss'

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
  return (
    <>
      <MetaArticlePage article={article} />
      <PageLayout
        title={article.title}
        withBackButton
        breadCrumbs={[
          { id: 1, name: categoryTitle, link: `/${category}` },
          { id: 2, name: article.title },
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
              <StoredImage src={article.preview_img} alt="" width={600} height={300} />
            )}
          </div>
          <div className={s.inner_container}>
            <div className={s.text} dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </PageLayout>
    </>
  )
}
